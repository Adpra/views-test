import React, { Component, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import { useState } from 'react';
import {Link} from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import Navbar from '../Navbar';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const List = () => {
    const [productData,setProductData] = useState([]);



    useEffect(() => {
        // getData()
        axios.get('https://serv-fabelio.herokuapp.com/fabelio/posts')
        .then((result) =>{
            console.log(result.data);
            const responseAPI = result.data;
            setProductData(responseAPI.data)
        })
        .catch((err) =>{
            console.log(err);
        })
        
    },[])


    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          padding: theme.spacing(5),
        },
      }));

        


    const data = productData.map(product => {
        return {
                    Name:product.title,
                    Price:product.price,
                    Description: product.description,
                    Action:product._id,
                    
        }
    })

    const columns = [
        {
            title:'Name', field: 'Name'
        },
        {
            title:'Price', field: 'Price'
        },
        {
            title:'Description', field: 'Description'
        },
        {
            title:'Action', render:productData =><Link href={`/detail/${productData.Action}`} >Detail</Link>
        },
        
        
    ]
   
    
    const classes = useStyles();
    
    return (
        <div >
                <Navbar />
                <Container className={classes.root}>
                    <MaterialTable title="List Data"  
                
                    data={ data}
                    columns={columns}
                    options = {{
                        search:true,
                        headerStyle: {
                            backgroundColor: '#01579b',
                            color: '#FFF'
                          },
                          rowStyle: {
                            backgroundColor: '#EEE',
                          }
                    }}
                 
                    />
                
              
                </Container>
         

            
        </div>
    )
}

export default hot(List);
