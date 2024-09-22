import CommonDependency from "./CommonDependency"

const PackageDependency = ({ packageDetails }) => {
    return (
        <div className="flex flex-col text-xl">
            <CommonDependency packageDetails={packageDetails?.dependencies} />
            <CommonDependency packageDetails={packageDetails?.devDependencies} />
        </div>
    )
}

export default PackageDependency
