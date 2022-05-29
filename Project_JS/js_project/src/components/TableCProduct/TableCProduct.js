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

function TableCProduct(props) {

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
                        {Array.from(props.productTypeList).map((el)=>{
                            if (el.product_type === props.product){
                                return (
                                    <TableCRowProduct 
                                        key={el.name}
                                        name={el.name}
                                        price={el.price}
                                        category={el.category}
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