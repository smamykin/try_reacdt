import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Icon from "@material-ui/core/Icon";
import {recordTypeNames, recordTypes} from "./FinanceApp/recordTypes";
import AddNewRecord from "./FinanceApp/AddNewRecord";

const columns = [
    {id: 'value', label: 'Value', minWidth:170},
    {id: 'type', label: 'Type', minWidth:170},
];

const createData = (value, type, id) => {
    return {value, type, id, isEdit: false}
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
            data: data,
            isAdd:false,
        }
    }

    add(){
        this.setState({isAdd:true})
    }
    getNextId(){
        let values = this.state.data.map((el) => el.id);
        return Math.max(...values) + 1;
    }

    save(record){
        if (record.id){
            let data =this.state.data.map((v)=>{
                if (v.id === record.id){
                    record.isEdit = false;
                    return record;
                }

                return v;
            });
            this.setState({data})
        } else {
            let data = this.state.data.slice(0),
                value,
                type;
            ({value, type} = record);
            data.push(createData(value, type, this.getNextId()));
            this.setState({data, isAdd:false})
        }
    }
    onDelete(row){
        let data  = this.state.data.filter((v)=> v.id !== row.id);
        this.setState({data});
    }
    onEdit(row){
        row.isEdit = true;
        let data =  this.state.data.map((v) => (v.id === row.id) ? row : v);
        this.setState({data});
    }
    render(){

        let rows = this.state.data.map(row => {
            if (row.isEdit){
                return <AddNewRecord row={row} save={(record) => this.save(record)}/>
            }

            return (
                <TableRow key={row.id}>
                    <TableCell className='table__row-action-cell'>
                        <Icon
                            tabIndex={2}
                            className='table__action-edit'
                            onClick={() => this.onEdit(row)}
                        >
                            edit
                        </Icon>
                        <Icon tabIndex={3} className='table__action-delete'
                              onClick={() => this.onDelete(row)}
                        >
                            delete
                        </Icon>
                    </TableCell>
                    <TableCell align={'center'}>{row.value}</TableCell>
                    <TableCell align={'center'}>{recordTypeNames[row.type]}</TableCell>
                    <TableCell/>
                </TableRow>
            );
        });
        return (
            <React.Fragment>
                <CssBaseline/>
                <Paper>
                    <Table aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Actions</TableCell>
                                {columns.map((x,i) => {return <TableCell key={i} align={'center'}>{x.label}</TableCell>})}
                                <TableCell className={'table__header-action'} onClick={(e)=>this.add()}>
                                     <Icon tabIndex={1} className={'table__action-add'}>add_circle</Icon>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows}
                            <AddNewRecord
                                save={(record) => this.save(record)}
                                display={this.state.isAdd ? '' : 'none'}
                            />
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