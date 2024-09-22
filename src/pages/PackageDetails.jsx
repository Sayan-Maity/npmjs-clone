import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import DetailsAndVersion from "../components/DetailsAndVersion";

const PackageDetails = () => {
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { packageName } = useParams();

  useEffect(() => {
    if (packageName) {
      const fetchData = async () => {
        try {
          const name = encodeURIComponent(packageName);
          const response = await axios.get(`https://registry.npmjs.org/${name}/latest`);
          if (response.status === 200) {
            setPackageDetails(response.data);
          }
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, [packageName]);

  return (
    <PageWrapper>
      <DetailsAndVersion loading={loading} packageDetails={packageDetails} />
    </PageWrapper>
  );
};

export default PackageDetails;