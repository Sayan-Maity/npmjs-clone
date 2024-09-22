import { Link } from "react-router-dom"

const CommonDependency = ({ packageDetails }) => {
    return (
        <div className="w-full">
            <p className="border-b border-[#cccdcd] font-semibold py-3 text-xl">Dependencies ({Object.keys(packageDetails ?? {}).length})</p>
            <div className="flex flex-wrap text-[#cb3837] font-semibold py-4">
                {Object.keys(packageDetails ?? {}).map((dep) => (
                    <Link to={`/${dep}`} key={dep} className="m-1 py-1 mr-2 text-nowrap leading-none">{dep}</Link>
                ))}
            </div>
        </div>
    )
}

export default CommonDependency
