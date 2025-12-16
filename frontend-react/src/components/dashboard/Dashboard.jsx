import { useEffect } from "react";
import axiosInstance from "../../axiosInstance";

function Dashboard() {
  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axiosInstance.get("/protected-view/");
        console.log("success", response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchProtectedData();
  }, []);

  return <div className="text-light">Dashboard</div>;
}

export default Dashboard;
