import ReadmeSubtitle from "./ReadmeSubtitle"

const PackageReadme = ({ packageDetails }) => {
    return (
        <div className="flex flex-col">
            <div className="w-full">
                <ReadmeSubtitle subTitle={"Description"} />
                <p className="text-lg py-4">{packageDetails.description}</p>
            </div>
            <div className="w-full">
                <ReadmeSubtitle subTitle={"Keywords"} />
                <div className="flex flex-wrap text-[#cb3837] font-semibold py-4 text-xl">
                    {packageDetails?.keywords ? (
                        packageDetails?.keywords.map((keywords, index) => (
                            <p key={index} className="m-1 py-1 mr-2 text-nowrap">{keywords}</p>
                        ))
                    ) : "none"}
                </div>
            </div>
        </div>
    )
}

export default PackageReadme
