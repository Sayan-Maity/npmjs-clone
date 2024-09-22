import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { textTrimmer } from './utils';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const debounceTimeout = useRef(null);
    const navigate = useNavigate()

    const fetchResults = async (value) => {
        if (value) {
            setLoading(true);
            try {
                const response = await axios.get('https://registry.npmjs.org/-/v1/search', {
                    params: {
                        text: value,
                        size: 10,
                    },
                });
                if (response.status === 200) {
                    setShowSearchResults(true)
                    setSearchResults(response?.data.objects.map(obj => obj.package));
                    setLoading(false);
                } else {
                    setShowSearchResults(false)
                    setSearchResults([]);
                    searchTerm("")
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setShowSearchResults(false)
                setSearchResults([]);
                searchTerm("")
                setLoading(false);
            }
        } else {
            setShowSearchResults(false)
            setSearchResults([]);
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            fetchResults(value);
        }, 300);
    };

    const navigateToPackageDetails = (result) => {
        const encodedPackageName = encodeURIComponent(result.name);
        navigate(`/${encodedPackageName}`, { state: { result } });
        setShowSearchResults(false)
        setSearchResults([])
        setSearchTerm(result.name)
    };

    return (
        <div className="flex w-full bg-[#f2f2f2] relative">
            <input
                type="text"
                placeholder="Search packages"
                className="p-3 w-full bg-transparent outline-none border-none"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <div className="mt-4 absolute w-full top-8 shadow-lg">
                {!loading && showSearchResults && searchResults ? (searchResults.map((result, index) => (
                    <div
                        key={index}
                        className="flex flex-col p-2 bg-white hover:bg-[#f2f2f2] border-b cursor-pointer"
                        onClick={() => navigateToPackageDetails(result)}
                    >
                        <div className='flex w-full justify-between items-center text-sm font-medium'>
                            <p >{result?.name}</p>
                            <p>{result?.version}</p>
                        </div>
                        <p className='text-xs'>{textTrimmer(result?.description, 60)}</p>
                    </div>
                ))) : loading ? (
                <div className="p-2 bg-white border-b" > ... </div>
                ) : ("")}
            </div>
        </div>
    );
};

export default SearchBar;