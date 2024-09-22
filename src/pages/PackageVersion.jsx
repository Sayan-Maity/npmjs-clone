import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import DetailsAndVersion from "../components/DetailsAndVersion";

const PackageVersion = () => {
  const { packageName, version } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("package =>", packageName, "version =>", version)

  useEffect(() => {
    if (packageName && version) {
      const fetchData = async () => {
        try {
          const name = encodeURIComponent(packageName);
          const response = await axios.get(`https://registry.npmjs.org/${name}/${version}`);
          if (response.status === 200) {
            setPackageDetails(response.data);
          }
        } catch (err) {
          setError(err);
          setLoading(false);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, [packageName, version]);

  // console.log("packageDetails =>", packageDetails);

  return (
    <PageWrapper>
      <DetailsAndVersion loading={loading} packageDetails={packageDetails} />
    </PageWrapper>
  );
};

export default PackageVersion;