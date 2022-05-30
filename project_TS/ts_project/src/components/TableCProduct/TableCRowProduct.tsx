import React from 'react';
import TableRow from '@mui/material/TableRow/TableRow'; // to samo to <tr> w html
import TableCell from '@mui/material/TableCell/TableCell'; // to samo co <th> w html

interface TableRowCProductProps {
    key: string;
    name: string;
    price: string;
    category: string;
    product_type: string;
    productInput: string;
}

const TableRowCProduct: React.FC<TableRowCProductProps> = (props) => {
    return (
        <TableRow>
            <TableCell align="left">{props.name}</TableCell>
            <TableCell align="right">{props.price === "0.0" ? <span>unknown price</span> : <span>{props.price}</span>}</TableCell>
            <TableCell align="right">{ props.category === null ? <span>unknown category</span> : <span>{props.category}</span> }</TableCell>
            {props.productInput === '' && <TableCell align="left">{props.product_type}</TableCell>}
        </TableRow>
    );
};

export default TableRowCProduct;
