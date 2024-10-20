import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
import Main from "./components/hero";
import Sidebar from "./components/sidebar";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading as true
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY =import.meta.env.VITE_NASA_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch data from API");
        }
        const apiData = await res.json();
        setData(apiData);
        console.log('Fetched from API today');
      } catch (err) {
        console.log("Error:", err.message);
      } finally {
        setLoading(false); // Ensure loading is set to false after fetching data
      }
    }

    fetchAPIData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loadingState">
          <i className="fa-solid fa-gear fa-spin"></i> {/* Loading Spinner */}
        </div>
      ) : (
        <>
          <Main data={data} />
          {showModal && (
            <Sidebar data={data} handleToggleModal={handleToggleModal} />
          )}
          <Footer data={data} handleToggleModal={handleToggleModal} />
        </>
      )}
    </>
  );
}

export default App;
