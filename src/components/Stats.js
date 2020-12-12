import React from 'react'
import {Card,CardContent,Grid,Typography,} from "@material-ui/core"
import './Stat.css'
import CountUp from 'react-countup';

function Stats({title,cases,total}) {
    return (
        <div>
         
           <Card className={`infoBox`}>
               <CardContent>
                    <Typography className="title_Box" color="black" >
                        {title}
                    </Typography>

                    <h2 className={`infoBox__cases`}>
                        {cases}
                        {/* <CountUp start={0} end={cases} duration={2.75} separator="," /> */}
                    </h2>
 
                    <Typography className="infoBox__total" color="black" >
                        Total:{total}
                    </Typography>
                </CardContent>
           </Card>
        
        </div>
    )
}

export default Stats
