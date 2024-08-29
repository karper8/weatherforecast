import { useState } from 'react'
import axios from 'axios'
import service from './services/current'


function App() {
  const [count, setCount] = useState(0)
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
      })
      .catch(err=>console.log("some error occured"))
    // const req = axios.get(`${baseUrl}?q=${search}&appid=${apiKey}`)
    //   .then(res => console.log(res))
    //   .catch(err=>console.log("Some error occured"))
    

  }

  return (
    <>
      
      <h1>Hello World</h1>

      <div>
        <input onChange={handleChange}></input>
        <button onClick={handleClick}>Search</button>
        <div>Location: {data.name}</div>
        <div>Temperature: {data.main.temp} C</div>
        <div>Humidity: {data.main.humidity}</div> 
        <div>Wind: {data.wind.speed} mtr/sec</div>
        
        <div>Cloudiness: {data.clouds.all} %</div>
        <div>Visibility: {data.visibility} meters</div>
        <div>Sunrise: {data.sys.sunrise}</div>
        <div>Sunset: {data.sys.sunset}</div>
      </div>
    </>
  )
}

export default App
