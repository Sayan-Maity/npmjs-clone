import { useState } from "react"
import PackageSidebar from "./package-sidebar/PackageSidebar"
import { packageDetailTitles, removeGitPlus } from "./utils"
import PackageDependency from "./package-detail-tabs/package-dependency/PackageDependency"
import PackageReadme from "./package-detail-tabs/package-readme/PackageReadme"
import PackageNothing from "./package-detail-tabs/PackageNothing"
import PackageDetailTabs from "./package-detail-tabs/PackageDetailTabs"


const DetailsAndVersion = ({
  loading,
  packageDetails,
}) => {
  const [selectedPackageTitle, setSelectedPackageTitle] = useState(packageDetailTitles[0].title)

  const handlePackageDetailClick = (title) => {
    setSelectedPackageTitle(title)
  }

  const renderClickedPackageDetails = () => {
    switch (selectedPackageTitle) {
      case "ReadMe":
        return <PackageReadme packageDetails={packageDetails} />
      case "Code":
        return <PackageNothing />
      case "Dependencies":
        return <PackageDependency packageDetails={packageDetails} />
      case "Dependents":
        return <PackageNothing />
      case "Versions":
        return <PackageNothing />
      default:
        return null;
    }
  };

  return (
    <div className="details-and-version flex justify-center w-full">
      {!loading && packageDetails ? (
        <div className="flex flex-col w-[1200px] mt-8 px-4 pb-16">
          <div className="mt-4">
            <p className="text-2xl">{packageDetails?.name}</p>
            <p className="py-2 mb-2 text-sm">{packageDetails?.version}</p>
          </div>
          <div className="flex flex-col w-full pr-8 py-2">
            <PackageDetailTabs
              packageDetailTitles={packageDetailTitles}
              selectedPackageTitle={selectedPackageTitle}
              handlePackageDetailClick={handlePackageDetailClick}
            />
            <div className="flex flex-col md:flex-row w-full">
              <div className="w-full pr-4 py-4">
                {renderClickedPackageDetails()}
              </div>
              <PackageSidebar
                loading={loading}
                packageName={packageDetails?.name}
                repository={removeGitPlus(packageDetails?.repository?.url)}
                homepage={packageDetails?.homepage}
                license={packageDetails?.license}
                version={packageDetails?.version}
                totalFiles={packageDetails?.dist?.fileCount}
                unpackedSize={packageDetails?.dist?.unpackedSize}
                collaborators={packageDetails?.maintainers}
              />
            </div>
          </div>
        </div>
      ) : loading ? (
        <p className="text-lg py-8">Loading, Please wait...</p>
      ) : (
        <p className="text-lg py-8">No Package details available</p>
      )}

    </div>
  )
}

export default DetailsAndVersion

// fefeff, fef4d8
// bc3433, f6e1e0
// c937c3, f5d7f2
// 8956ff, efdcfe
// 29aae3, d4eef9