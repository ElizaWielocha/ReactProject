import React from "react";

import TableCRowProduct from './TableCRowProduct';
import { ProductsList } from '../../models/ProductsList';

import { Table, TableContainer, Card, TableBody, TableHead, TableRow, TableCell } from '@mui/material/'; 


type TableCProductProps = {
    products: ProductsList;
    productType: string;
};


const TableCProduct: React.FC<TableCProductProps> = (props) => {

    return (
        <TableContainer component={Card}>
            <Table sx={{ minWidth: 600, borderTop: 1.5, borderBottom: 1.5, borderColor: '#6A2031', fontSize: 16 }} aria-label="table">

                <TableHead>
                    <TableRow sx={{borderColor: '#6A2031', bgcolor: '#FBF3F5', color: '#3D0E11' }}>
                        <TableCell colSpan={2} sx={{minWidth: 200, color: '#3D0E11', borderColor: '#6A2031'}} align="center"><b>Name</b></TableCell>
                        <TableCell sx={{ borderColor: '#6A2031' }}align="center"><b>Brand</b></TableCell>
                        <TableCell sx={{ borderColor: '#6A2031' }} align="center"><b>Price</b></TableCell>
                        <TableCell sx={{ borderColor: '#6A2031' }} align="center"><b>Type of product</b></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.products.map(product => {
                        return (
                            <TableCRowProduct 
                                key={product.id}
                                image={product.api_featured_image}
                                name={product.name}
                                price={product.price}
                                product_type={product.product_type}    
                                brand={product.brand}                                
                            />
                        );
                    })}
                </TableBody>
                
            </Table>
        </TableContainer>
    );
};

export default TableCProduct;