import { useState } from 'react';

const PackageDetailTabs = ({ packageDetailTitles, selectedPackageTitle, handlePackageDetailClick }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="flex flex-col md:flex-row w-full">
            {packageDetailTitles.map((item, index) => (
                <div
                    key={index}
                    onClick={() => handlePackageDetailClick(item.title)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="flex items-center justify-center px-4 py-2 w-full h-fit text-base cursor-pointer"
                    style={{
                        backgroundColor: selectedPackageTitle === item.title ? item.lightColor : (hoveredIndex === index ? item.lightColor : "transparent"),
                        borderBottom: `2px solid ${item.darkColor}`,
                        color: `${item.textColor}`
                    }}
                >
                    {item.title}
                </div>
            ))}
        </div>
    )
}

export default PackageDetailTabs;