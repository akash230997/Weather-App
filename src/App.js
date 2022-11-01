import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [City, setCity] = useState();
  const [Search, setSearch] = useState('Delhi');
  useEffect(() => {
    const dataApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=4c9d1d887ae661063aedfa22a9593e92`;
      const fetchData = await fetch(url);
      const confirmData = await fetchData.json();
      setCity(confirmData.main)
      // console.log(confirmData)
    }
    dataApi()
    // return () => {
    //   cleanup
    // };
  }, [Search]);

  return (
    <div>
      <div className="box">
        <div className="flexBox">
          <input type="Search" placeholder='Your City' className='searchBar' onChange={(event) => { setSearch(event.target.value) }} />
        </div>
        <center><h1>WEATHER APP</h1></center>
        {/* <div className="head" id="weathercon">
          <center><i className="fas fa-sun"></i></center>
        </div> */}

        <div className="bottom">
          <div className="city" >
            <p><i className="fas fa-street-view" ></i>{Search}</p>
            <p id="date"></p>
          </div>
          {
            !City? (
              <p>NO DATA FOUND</p>
            ) : 
              <>
                <h1 className="temp">{City.temp} °Cel</h1>
                <h3 className="tempmin_max">Min {City.temp_min} °Cel| Max {City.temp_max} °Cel</h3>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default App
