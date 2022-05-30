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
import { ProductsList } from '../../App';

interface TableCProductProps {
    products: ProductsList;
    product: string;
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.products.map(product => {
                            if (product.product_type === props.product){
                                return (
                                    <TableCRowProduct 
                                        key={product.name}
                                        name={product.name}
                                        price={product.price}
                                        category={product.category}
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