import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Bar1,Pie1,Line1} from './Graph' 
import Stats from './Stats'
import CardStatus from './CardStatus'
import './Global.css';
import { FormControl,Select,MenuItem,Grid } from '@material-ui/core';

function Global() {


    const [allCountryData,setAllCountryData] = useState([]);

    const [timeSelectSeries,setTimeSelectSeries] = useState([]);

    const [selectedCountry,setSelectedCountry] =  useState("Global")
    
    const [pickedCountry,setPickedCountry] =  useState([])


    useEffect(() =>{
    
        const fetchedCountries = async () =>{ 
        const {data} = await axios.get('https://corona.lmao.ninja/v2/all?yesterday')
         

        setPickedCountry(data)
      }
        fetchedCountries();  
      },[]);

      useEffect(() =>{
    
        const fetchedTimeData = async () =>{ 
        const {data} = await axios.get(`https://corona.lmao.ninja/v2/historical/all`)

        setTimeSelectSeries(data)
      }
      fetchedTimeData();  
      },[]);   

      useEffect(() =>{
    
        const fetchedCountries = async () =>{ 
        const {data} = await axios.get(' https://corona.lmao.ninja/v2/countries?yesterday&sort')
         
        setAllCountryData(data);
      }
        fetchedCountries();  
      },[]);
    
      const selectCountry = async(event) => {
            const countryPicked=event.target.value;
           
            
            const url=
                countryPicked ==='Global' ? 'https://corona.lmao.ninja/v2/all?yesterday' : `https://corona.lmao.ninja/v2/countries/${countryPicked}?yesterday=true&strict=true&query`

            const {data} = await axios.get(url);
            
            setPickedCountry(data)

            if(countryPicked ==="Global"){
                
                const url2=`https://corona.lmao.ninja/v2/historical/all`
                const {data}= await axios.get(url2);
                setTimeSelectSeries(data)    
            }
            else{
                const url2=`https://corona.lmao.ninja/v2/historical/${countryPicked}?lastdays=30`
                const tim = await axios.get(url2);
                setTimeSelectSeries(tim.data.timeline)    
                
            }
            setSelectedCountry(countryPicked)
              }

         
    
    
    return (
        <div className ="container1">

         <div className="header_cards"> 
            <div className="header">
                            <div className="country_picker">
                                
                            <FormControl className="app__dropdown" >
                            <Select
                            variant="outlined"
                            value={selectedCountry}
                            onChange={selectCountry}
                            >
                            <MenuItem value="Global"><div style={{color: "red"}}>Global</div></MenuItem>
                            {allCountryData.map((country) => (
                                <MenuItem value={country.country}><div style={{color: "black"}}>{country.country}</div></MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                        </div>
            </div>
                            
                <CardStatus className="stats" pickedCountry={pickedCountry}/>
                  
        </div>   
            

                                                        <div className="card">
                                                        
                                                            {/* <Stats className="cases" title="Cases" cases={pickedCountry.todayCases} total={pickedCountry.cases}/>
                                                            <Stats className="recovered" title="Recovered" cases={pickedCountry.todayRecovered} total={pickedCountry.recovered}/>
                                                            <Stats className="deaths"  title="Deaths" cases={pickedCountry.todayDeaths} total={pickedCountry.deaths}/> */}
                                                        
                                                        </div>
            
                                                                <div className="all__charts">
                                                                        <div className="chart">
                                                                            <Bar1 countries={pickedCountry}/>
                                                                            <Pie1 countries={pickedCountry}/>
                                                                        </div>



                                                                        <div className='line'>
                                                                                <Line1 timeSeries={timeSelectSeries}/>   
                                                                        </div>
                                                                </div> 

             
        </div>
    )
}

export default Global
