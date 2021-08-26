import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { Input } from '../../components'
import qs from 'qs';
import Button from '@material-ui/core/Button';
import { Container, Grid, TextField } from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import Navbar from '../Navbar';
import { makeStyles } from '@material-ui/core/styles';


const Home = (props) => {
    const history = useHistory();
    const[search, setSearch] = useState('')

    const onSubmit = () => {
        console.log('search', search);

       
            const data = { 'search': search };
            const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: 'https://serv-fabelio.herokuapp.com/fabelio/post' ,
            };
            console.log(options);
            axios(options);

      
    }


    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          
        },
        cont:{
            padding: theme.spacing(5),
        }
      }));
    

      const classes = useStyles();

    return (
        <div className={classes.root}>
             <Navbar />
                <Container  className={classes.cont}>
                   
                <p>Create Data</p>
                <Grid container spacing={1}>
                <Grid item md={8} >
                <TextField id="outlined-basic" label="Enter Url" variant="outlined" onChange={(e) => setSearch(e.target.value)} fullWidth/>
                </Grid>
                <Grid item md={8}>
                <Link onClick={() => history.push('/list') }>
                <Button  variant="contained" color="primary" onClick={onSubmit} fullWidth >
                Go
                </Button>
                </Link> 
                </Grid>
                </Grid>
                </Container>
                
                

               
        </div>
    )
}

export default Home
