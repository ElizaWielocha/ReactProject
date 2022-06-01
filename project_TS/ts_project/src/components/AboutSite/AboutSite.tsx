import React from 'react';
import Typography from '@mui/material/Typography/Typography';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Product } from '../../models/Product';

import Table from '@mui/material/Table/Table'; // to samo co <table> w html
import TableContainer from '@mui/material/TableContainer/TableContainer'; // owijamy nim nasz table
import Card from '@mui/material/Card/Card'; // efekt kartki 
import TableBody from '@mui/material/TableBody/TableBody'; // to samo co <tbody> w html
import TableHead from '@mui/material/TableHead/TableHead'; // to samo co <th> w html
import TableRow from '@mui/material/TableRow/TableRow'; // to samo to <tr> w html
import TableCell from '@mui/material/TableCell/TableCell'; // to samo co <th> w html
import Grid from "@mui/material/Grid";

function AboutSite() {
    const [brandList, setBrandList] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios
        .get<Product[]>(`http://makeup-api.herokuapp.com/api/v1/products.json?`)
        .then(response => {
            console.log(response.data);
            setBrandList(response.data);
            setLoading(false);
        });
    });


    let brands: string[] = [];
    let products: string[] = [];

    for(var i=0; i < brandList.length; i++){
        if( !brands.includes(brandList[i].brand) && brandList[i].brand !== '' ){
            brands.push(brandList[i].brand);
        }
    }
        
    for(var i=0; i < brandList.length; i++){
        if( !products.includes(brandList[i].product_type) ){
            products.push(brandList[i].product_type);
        }
    }
    

    return (
        
        <>
        <Typography>
        Welcome to the makeup product finder! You can search for your favorite products by brand, product type or both . You can also choose what price range you want the products to be in. Below you will find two lists: A list of available brands and a list of available product types you can search by.
        </Typography>

        {loading === false &&
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <TableContainer component={Card}>
            <Table sx={{ maxWidth: 300 }} aria-label="table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ maxWidth: 300 }} align="center">Brands</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {brands.map(element => {
                        return (
                            <TableRow>
                                <TableCell align="center">{element}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        </Grid>
        
        <Grid item xs={6}>
        <TableContainer component={Card}>
            <Table sx={{ maxWidth: 300 }} aria-label="table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ maxWidth: 300 }} align="center">Types of products</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map(element => {
                        return (
                            <TableRow>
                                <TableCell align="center">{element}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        </Grid>
        </Grid>}
        </>

    )
}


export default AboutSite;