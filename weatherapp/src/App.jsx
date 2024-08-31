import { useState } from 'react'
import axios from 'axios'
import service from './services/current'


function App() {

  const[search,setSearch] = useState('')
  const[data,setData] = useState({})
  const [location,setLocation] = useState(null)
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
  const queryParameters  = 'q=&appid='
  const apiKey = '14ca1a5ad9e7428224b9d3524f5e6c1b'

  const handleChange= (event)=>{
    setSearch(event.target.value)
    console.log(event.target.value)

  }

  const handleClick = (event) =>{
    event.preventDefault()
    console.log(`Searched value is ${search}`)
    service.getCurrent(baseUrl,search,apiKey)
      .then(res=>{
        console.log(res.data)
        setData(res.data)
        const sr = new Date(res.data.sys.sunrise).toLocaleDateString("en-US")
        console.log(sr)
      })
      .catch(err=>console.log("some error occured"))
    // const req = axios.get(`${baseUrl}?q=${search}&appid=${apiKey}`)
    //   .then(res => console.log(res))
    //   .catch(err=>console.log("Some error occured"))
    

  }

  const Details = (data) =>{
    
      return(
        <div>
            <div>Location: {data ? data.name : null}</div>
            <div>Temperature: {data ? data.main.temp : null} C</div>
            <div>Humidity: {data ? data.main.humidity : null}</div> 
            <div>Wind: {data ? data.wind.speed + ' mtr/sec': null}</div>
            
            <div>Cloudiness: {data ? data.clouds.all + '%': null} </div>
            <div>Visibility: {data ? data.visibility + 'meters': null} </div>
            <div>Sunrise: {data ? data.sys.sunrise : null}</div>
            <div>Sunset: {data ? data.sys.sunset : null}</div>
        </div>
      )
    
  }

  
    const StampToDate = (sr) => {

      const Time = new Date(sr).toLocaleTimeString("en-US")
      console.log(Time)

      return Time

    }

  

  return (
    <>
      
      <h1>Hello World</h1>

      <div>
        <input onChange={handleChange}></input>
        <button onClick={handleClick}>Search</button>
        {/* <Details data = {data} /> */}
        <div>Location: {data ? data.name : null}</div>
        <div>Temperature: {data.main ? data.main.temp + "C": null} </div>
        <div>Humidity: {data.main ? data.main.humidity : null}</div> 
        <div>Wind: {data.wind ? data.wind.speed + ' mtr/sec': null}</div>
        
        <div>Cloudiness: {data.clouds ? data.clouds.all + '%': null} </div>
        <div>Visibility: {data.visibility ? data.visibility + ' meters': null} </div>
        <div>Sunrise: {data.sys ? StampToDate(data.sys.sunrise): null}</div>
        <div>Sunset: {data.sys ? StampToDate(data.sys.sunset) : null}</div>
        
        
        
      </div>
    </>
  )
}

export default App
