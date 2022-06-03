import React from 'react';

import { TableRowCProductProps } from '../../models/TableRowCProduct';

import { TableRow, TableCell }  from '@mui/material/'; 


const TableRowCProduct: React.FC<TableRowCProductProps> = (props) => {
    return (
        <TableRow>
            <TableCell align="left"><img alt='product appearance' style={{ width: 150}} src={props.image} /></TableCell>
            <TableCell align="left" sx={{ fontSize: 20 }}>{props.name}</TableCell>
            <TableCell align="center" sx={{ fontSize: 16 }}>{props.brand}</TableCell>
            <TableCell align="center" sx={{ fontSize: 16 }}>{props.price === "0.0" ? <span>unknown price</span> : <span>{props.price}</span>}</TableCell>
            <TableCell align="center" sx={{ fontSize: 16 }}>{props.product_type}</TableCell>
        </TableRow>
    );
};

export default TableRowCProduct;
