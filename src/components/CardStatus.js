import React from 'react'
import CountUp from 'react-countup';
import {Card,CardDeck} from 'react-bootstrap'

import './CardStatus.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function CardStatus ({pickedCountry})  {
    console.log(pickedCountry)
    return (
        <>
            <CardDeck className ="card__deck">
            <Card text="warning" className="text-center card__deck">
                <Card.Body>
                <Card.Title><h3>Cases</h3></Card.Title>
                <Card.Text>
                <h4>  {pickedCountry.todayCases} </h4> 
                    
                </Card.Text>
                </Card.Body>
                <Card.Footer className="card__deck">
                    <small className="text-muted"><h4>Total: {pickedCountry.cases} </h4></small>
                </Card.Footer>
            </Card>
            <Card  text="success" className="text-center card__deck">
                
                <Card.Body>
                <Card.Title><h3>Recovered</h3></Card.Title>
                <Card.Text>
                <h4>  {pickedCountry.todayRecovered} </h4>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"><h4> Total: {pickedCountry.recovered} </h4></small>
                </Card.Footer>
            </Card>
            <Card  text="danger" className="text-center card__deck" >
                
                <Card.Body>
                <Card.Title><h3>Deaths</h3></Card.Title>
                <Card.Text>
                <h4>{pickedCountry.todayDeaths}</h4>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"><h4>Total: {pickedCountry.deaths}</h4></small>
                </Card.Footer>
            </Card>
            </CardDeck>
        </>
    )
}

export default CardStatus