import React, { useState, useEffect,useContext, createContext } from "react";
import Loading from "./Loading";
import Tours from "./Tours.js";
const url = "https://course-api.com/react-tours-project";

const toursContext=React.createContext();


function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour=(id)=>{
    const newTours=tours.filter((tour)=>tour.id !== id);
    setTours(newTours);
  }

  const fetchTours=async()=>{
    setLoading(true);
    try {
      const response= await fetch(url);
      const tours=await response.json();
      console.log(tours);
      setLoading(false)
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchTours();
  },[])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if(tours.length===0){
    return <main>
      <div className="title">
        <h2>No tours Left</h2>
        <button className="btn" onClick={fetchTours}>Refresh</button>
      </div>
    </main>
  }

  return (
    <toursContext.Provider value={{ removeTour,tours }}>
    <main>
      <Tours  />
    </main>
    </toursContext.Provider>
  );
}

export default App;
export {toursContext}
