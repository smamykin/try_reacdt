import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const recordTypes = {
    'expenses': 0,
    'income': 1,
};
const columns = [
    {id: 'value', label: 'Value', minWidth:170},
    {id: 'type', label: 'Type', minWidth:170},
];

const createData = (value, type, id) => {
    return {value, type, id}
};
const data = [
    createData(12320, 0, 0),
    createData(12310, 1, 1),
];

export default class FinanceApp extends React.Component
{
    render(){

        return (
            <React.Fragment>
                <CssBaseline/>
                <Paper>
                    <Table aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                {columns.map(x => {return <TableCell align={'center'}>{x.label}</TableCell>})}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell align={'center'}>{row.value}</TableCell>
                                    <TableCell align={'center'}>{row.type}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell align="right">Total</TableCell>
                                <TableCell>{this.getSum()}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>
        );
    }

    getSum() {
        return data.reduce((carry, el) => {
            if (el.type === recordTypes.income){
                carry += el.value;
            } else {
                carry -= el.value;
            }

            return carry;
        }, 0);
    }
}