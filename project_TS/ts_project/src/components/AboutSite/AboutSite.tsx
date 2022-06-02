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
import { borders } from '@mui/system';


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
        <Typography justifyContent="center" sx={{ m:2, fontFamily: "sans-serif" }}>
        <strong>Welcome to the makeup product finder! You can search for your favorite products by brand, product type or both . </strong>
        </Typography>
        <Typography sx={{ m:2, fontFamily: "sans-serif" }}>
        <strong>You can also choose what price range you want the products to be in. <br></br>Below you will find two lists: A list of available brands and a list of available product types you can search by.</strong>
        </Typography>

        {loading === false &&
        <Grid container spacing={2} justifyContent="left" alignItems="top">
        <Grid item xs={4}>
        <TableContainer >
            <Table sx={{ maxWidth: 250, ml: 5, mt: 5, border: 1, borderBottom: 1.1, borderColor: '#6A2031', fontSize: 16 }} aria-label="table">
                <TableHead>
                    <TableRow sx={{borderBottom: 1.1, borderColor: '#6A2031', bgcolor: '#FBF3F5', color: '#3D0E11' }}>
                        <TableCell sx={{ maxWidth: 300 }} align="center"><strong>Brands</strong></TableCell>
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
        
        
        <Grid item xs={4}>
        <TableContainer>
            <Table sx={{ maxWidth: 250, ml: 5, mt: 5, border: 1, borderBottom: 1.1, borderColor: '#6A2031', fontSize: 16 }} aria-label="table">
                <TableHead>
                    <TableRow sx={{borderBottom: 1.1, borderColor: '#6A2031', bgcolor: '#FBF3F5', color: '#3D0E11' }} >
                        <TableCell sx={{ maxWidth: 300 }} align="center"><strong>Types of products</strong></TableCell>
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