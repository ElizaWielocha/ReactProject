import React from "react";
import Fade from '@mui/material/Fade/Fade';
import Table from '@mui/material/Table/Table'; // to samo co <table> w html
import TableContainer from '@mui/material/TableContainer/TableContainer'; // owijamy nim nasz table
import Card from '@mui/material/Card/Card'; // efekt kartki 
import TableBody from '@mui/material/TableBody/TableBody'; // to samo co <tbody> w html
import TableHead from '@mui/material/TableHead/TableHead'; // to samo co <th> w html
import TableRow from '@mui/material/TableRow/TableRow'; // to samo to <tr> w html
import TableCell from '@mui/material/TableCell/TableCell'; // to samo co <th> w html
import TableCRowProduct from './TableCRowProduct';
import { ProductsList } from '../../models/ProductsList';

type TableCProductProps = {
    products: ProductsList;
    productType: string;
};


const TableCProduct: React.FC<TableCProductProps> = (props) => {

    return (
        <Fade in={true} timeout={2000}>
            <TableContainer component={Card}>
                <Table sx={{ minWidth: 650 }} aria-label="table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{maxWidth: 300}} align="center">Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Category</TableCell>
                            {props.productType === '' && <TableCell align="center">Type of product</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.products.map(product => {
                            if ( (props.productType !== "") && (props.productType === product.product_type)){
                                    return (
                                        <TableCRowProduct 
                                            key={product.id}
                                             name={product.name}
                                             price={product.price}
                                             category={product.category} 
                                             product_type={product.product_type}  
                                             productInput={props.productType}                                    
                                        />
                                    );
                            }
                            else if (props.productType === "") {
                                return (
                                    <TableCRowProduct 
                                        key={product.id}
                                         name={product.name}
                                         price={product.price}
                                         category={product.category} 
                                         product_type={product.product_type}  
                                         productInput={props.productType}                                    
                                    />
                                );
                            }
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fade>
    );
};

export default TableCProduct;