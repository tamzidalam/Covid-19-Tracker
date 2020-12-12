import React,{useState, useEffect} from 'react';
import './Graph.css'
import {Line,Bar,Doughnut} from 'react-chartjs-2';
import { red } from '@material-ui/core/colors';


    
   const  Bar1 = ({countries:{cases,recovered,deaths}}) =>
    {   
       
        
        const data={
            labels:['Global Data'], 
            datasets:[
                {
                    label:"Cases",
                    data:[cases],
                    backgroundColor: [    
                        'rgba(255, 206, 86, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)',         
                    ],
                    
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)',
                        
                    ],
                    
                    borderWidth: 1               
                },
                {
                    label:"Recovered",
                    data:[recovered],
                    backgroundColor: [    
                        
                        'rgba(54, 162, 235, 1)',        
                    ],
                    
                    borderColor: [
                        
                        'rgba(54, 162, 235, 1)',
                        
                        
                    ],
                    
                    borderWidth: 1               
                },
                {
                    label:"Deaths",
                    data:[deaths],
                    backgroundColor: [    
                      
                        'rgba(255, 99, 132, 1)',         
                    ],
                    
                    borderColor: [

                        'rgba(255, 99, 132, 1)',
                        
                    ],
                    
                    borderWidth: 1               
                }
            ],    
        }
        var options= {
            scales: {
                xAxes:[{
                    ticks:{
                        fontColor:'white'      
                    },
                    gridLines: {
                        display: true,
                        color:'white',
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        fontColor:'white'
                    },
                    gridLines: {
                        display: true,
                        color:'white',
                    }

                }]
            }
        }
            


        return (
            <div className="bar">               
                 <Bar 
                    data={data}
                    options={options}
                />
            </div>

        )
    } 
    
    const Pie1 = ({countries:{cases,recovered,deaths}}) =>
    {
        const data={
            labels:['Cases','Recovered','Deaths'], 
            datasets:[
                {
                    
                    data:[cases,recovered,deaths],
                    backgroundColor: [    
                        'rgba(255, 206, 86, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)',         
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)',
                        
                    ],
                    borderWidth: 1               
                },
            ],    
        }
    
        const option=  {
            title:{
                display:true,
                text:'Global Data'
    
            },
            
            maintainAspectRatio:false,
            scales: {
                xAxes:[{
                    ticks:{
                        fontColor:'white'      
                    }
                   
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor:'white'
                    }
                }]
            }
        }
    

        return (
            <div className="bar">               
                 <Doughnut 
                    data={data}
                    //options={option}
                />
            </div>

        )
    } 


    const Line1= ({timeSeries:{cases,recovered,deaths}}) =>{
        
        //console.log(cases)

        if(!cases){
            return 'Loading....'
        }

        const data={
            labels:Object.keys(cases), 
            datasets:[
                {
                    label:"Cases",
                    data:Object.values(cases),
                    backgroundColor: [    
                        'rgba(255, 206, 86, 1)',       
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    fill:true,
                    borderWidth: 1               
                },
                {
                    label:"Recovered",
                    data:Object.values(recovered),
                    backgroundColor: [    
                        'rgba(54, 162, 235, 1)',       
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    fill:true,
                    borderWidth: 1               
                },
                {
                    label:"Deaths",
                    data:Object.values(deaths),
                    backgroundColor: [    
                        'rgba(255, 99, 132, 1)',       
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    fill:true,
                    borderWidth: 1               
                },
            ],    
        }
        const option=  {
            title:{
                display:true,
                text:'Global Data'
    
            },
            //maintainAspectRatio:false,
            scales: {
                xAxes:[{
                    ticks:{
                        fontColor: "white"
                    },
                    gridLines: {
                        display: true,
                        color:'white',
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "white"
                    },
                    gridLines: {
                        display: true,
                        color:'white',
                    }
                }]
            }
        }

        return (
            <div className="line">               
                 <Line 
                    data={data}
                    options={option}
                />
            </div>

        )
    }
    

export  {Bar1,Pie1,Line1}
