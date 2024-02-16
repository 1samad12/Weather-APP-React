import React, { useEffect } from 'react';
import './CSS/style.css';
import { useState } from 'react';

function Tempapp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(" Delhi");
    const [error, setError] = useState(null);
  const [temp,setTemp]= useState(null)
  const [minTemp,setMinTemp]= useState(null)
  const [maxTemp,setMaxTemp]= useState(null)

 let checkTemp=()=>{
  const fetchApi = async () => {
    const url =` https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e2f8371cbda5bafef907b46b1f8c384f`
   const response = await fetch(url);
   const data = await response.json();                                                             
   setCity(data.name);
   console.log(data.main.temp_min);
   setTemp(data.main.temp);
   setMinTemp(data.main.temp_min);
   setMaxTemp(data.main.temp_max);
 };
 fetchApi();
 }
  useEffect(() => {
    checkTemp()
  }, []);
  return (
    <>
      <div className="box">
        <div   className='inputFeild' >
          <input
          onKeyUp={(e)=>{
            if(e.key==="Enter"){
              checkTemp()
            }
          }}
                     type="text"
            className="inputFeild"
            placeholder="Enter City Name"
            onChange={(event) => {

              setSearch(event.target.value); 

            }}
          />
          <button className='btn' onClick={checkTemp}>Search</button>
        </div>
        <div className="info">
          <h2 className="city">{city}</h2>
          <h1 className="temp">{temp}</h1>
          <h3 className="desc">minimum Temperature :{minTemp}</h3>
          <h3 className="desc">maximum Temperature :{maxTemp}</h3>
        </div>

      </div>

    </>
  );
}

export default Tempapp;
