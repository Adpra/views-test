import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from '../Navbar';



// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345,
//     },
//   });
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: "100px",
    },
  }));
    

    
const Detail = (props) => {
  const history = useHistory();
  const [data,setData] = useState({});
    useEffect(() => {
        console.log('params', props.match.params.id);
        const id = props.match.params.id;
        axios.get(`https://serv-fabelio.herokuapp.com/fabelio/post/${id}`)
        .then((res) => {
            console.log('success', res);
            setData(res.data.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [props])
    const classes = useStyles();
    return (
        <div>
         
      <Navbar />
        <Container>



        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={data.imagesrc}
          title="Contemplative Reptile"
        />
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography gutterBottom variant="p" component="p">
            {data.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
          </Typography>
        <Button size="small" color="primary" onClick={() => {history.push('/list')}}>
          List Data
        </Button>
          
          </Paper>
        </Grid>
      </Grid>
    </div>
  

  
  </Container>
        </div>
    )
}

export default withRouter(Detail) 
