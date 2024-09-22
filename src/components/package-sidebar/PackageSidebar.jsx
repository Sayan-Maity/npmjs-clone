import { Link } from "react-router-dom"
import MaintainerProfileImage from "../../assets/MaintainerProfileImage.jpg"
import { copyToClipboard, textTrimmer } from "../utils"

const PackageSidebar = ({
    loading,
    packageName,
    repository,
    homepage,
    license,
    version,
    totalFiles,
    unpackedSize,
    collaborators,

}) => {
    const npmInstallCommand = `npm i ${packageName}`

    return (
        <div className='package-sidebar flex flex-none flex-wrap w-full md:w-[20rem]'>
            {!loading ? (
                <div className="flex flex-col mt-4 px-4 w-full">
                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#757575] pt-2 mt-2 text-base font-semibold'>Install</p>
                            <p onClick={copyToClipboard(npmInstallCommand)} className="cursor-pointer p-[10px] border border-[#cccccc] rounded-md text-[#000000cc]"> {npmInstallCommand}</p>
                        </div>
                        <div className='flex flex-col border-b border-[#cccdcd] pb-3'>
                            <p className='text-[#757575] pt-2 mt-2 text-base font-semibold'>Repository</p>
                            <Link to={repository}>{repository ? textTrimmer(repository, 35) : 'N/A'}</Link>
                        </div>
                        <div className='flex flex-col border-b border-[#cccdcd] pb-3'>
                            <p className='text-[#757575] pt-2 mt-2 text-base font-semibold'>Homepage</p>
                            <Link to={homepage}>{homepage ? textTrimmer(homepage, 35) : 'N/A'}</Link>
                        </div>
                        <div className="flex gap-4 w-full border-b border-[#cccdcd] pb-3">
                            <div className='flex flex-col w-full'>
                                <p className='text-[#757575] pt-2 mt-2 text-base font-semibold'>Version</p>
                                <p className="text-xl font-semibold text-[#000000cc]">{version ? version : 'N/A'}</p>
                            </div>
                            <div className='flex flex-col w-full'>
                                <p className='text-[#757575] pt-2 mt-2 text-base font-semibold'>License</p>
                                <p className="text-xl font-semibold text-[#000000cc]">{license ? license : 'N/A'}</p>
                            </div>
                        </div>
                        <div className="flex gap-4 w-full border-b border-[#cccdcd] pb-3">
                            <div className='flex flex-col w-full'>
                                <p className='text-[#757575] pt-2 mt-2 text-base font-semibold'>Total Files</p>
                                <p className="text-xl font-semibold text-[#000000cc]">{totalFiles ? totalFiles : 'N/A'}</p>
                            </div>
                            <div className='flex flex-col w-full'>
                                <p className='text-[#757575] pt-2 mt-2 text-base font-semibold'>Unpacked Size</p>
                                <p className="text-xl font-semibold text-[#000000cc]">{unpackedSize ? Number(unpackedSize).toFixed(2) : 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[#757575] pt-2 mt-2 text-base font-semibold'>Collaborators</p>
                        <div className="flex gap-1 mt-1.5">
                            {(collaborators ?? []).map((collaborator, index) => (
                                <div key={index}>
                                    <img src={MaintainerProfileImage} alt={collaborator?.name} title={collaborator?.name} className="h-8 w-8" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : ("")}
        </div>
    )
}

export default PackageSidebar
