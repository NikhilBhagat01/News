import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// COMPONENTS
import Navbar from "./components/navbar/Navbar";
import Featured from "./components/featured/Featured";
import WebStories from "./components/webStories/WebStories";
import Manoranjan from "./components/manoranjan/Manoranjan";

function App() {
  const [news, setNews] = useState([]);

  // FETCHING NEWS DATA
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get(
          "http://api.lokmat.com/assignmentassociate3"
        );
        setNews(data);
      } catch (error) {
        alert("Try again after some time");
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="App">
      {/* NAVBAR */}
      <Navbar />
      <main className="container">
        {/* FEATURES SECTION */}
        <Featured news={news} />
        {/* WEB STORIES SECTION */}
        <WebStories news={news} />
        {/* MANORANJAN SECTION */}
        <Manoranjan news={news} />
      </main>
    </div>
  );
}

export default App;
