import React,{Link} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

 const MapCards = ({items}) => {
    
    const classes = useStyles();
    return (

        
        <div>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={items.countryInfo.flag}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {items.country}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <h3> <b>Cases:</b>{items.cases} </h3>
                    <h3> Recovered: {items.recovered} </h3>
                    <h3> Deaths: {items.deaths} </h3>
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                
            </CardActions>
        </Card>
        </div>
    )
}

export default MapCards