import Highlighter from './Highlighter'
import Footer from './Footer'
import Navbar from './Navbar'

const PageWrapper = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Highlighter />
            <Navbar />
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
            <Highlighter />
        </div>
    );
};

export default PageWrapper;