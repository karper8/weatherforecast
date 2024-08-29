import axios from 'axios'

const baseurl = 'https://api.openweathermap.org/data/2.5/weather'


const getCurrent = (baseurl,currentCity,apiKey) =>{
    return axios.get(`${baseurl}?q=${currentCity}&appid=${apiKey}&units=metric`)
        
}

export default {getCurrent}