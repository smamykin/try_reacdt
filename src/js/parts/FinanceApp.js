import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Icon from "@material-ui/core/Icon";

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
    constructor(props){
        super(props);
        this.state = {
            data: data
        }
    }

    render(){

        return (
            <React.Fragment>
                <CssBaseline/>
                <Paper>
                    <Table aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Actions</TableCell>
                                {columns.map((x,i) => {return <TableCell key={i} align={'center'}>{x.label}</TableCell>})}
                                <TableCell className={'table__header-action'}><Icon>add_circle</Icon></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.data.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell className={'table__row-action-cell'}><Icon>edit</Icon><Icon>delete</Icon></TableCell>
                                    <TableCell align={'center'}>{row.value}</TableCell>
                                    <TableCell align={'center'}>{row.type}</TableCell>
                                    <TableCell/>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell colSpan={2} align={"right"}>Total</TableCell>
                                <TableCell colSpan={2} align={"left"}>{this.getSum()}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>
        );
    }

    getSum() {
        return this.state.data.reduce((carry, el) => {
            if (el.type === recordTypes.income){
                carry += el.value;
            } else {
                carry -= el.value;
            }

            return carry;
        }, 0);
    }
}