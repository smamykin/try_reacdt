import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TableRow from "@material-ui/core/TableRow";
import {recordTypes} from "./recordTypes";


export default class AddNewRecord extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            type: '',
            value: '',
        };
    }
    save(){
        this.props.save({value: this.state.value, type: this.state.type});
        this.setState({
            value: '',
            type:''
        })
    }

    render(){
        let styles = {display:this.props.display};
        return <TableRow style={styles} className={'table_row-add-new'}>
            <TableCell className='table__row-action-cell' onClick={()=>this.save()}>
                <Icon className='table__action-save'>save</Icon>
            </TableCell>
            <TableCell align={'center'}>
                <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    value={this.state.value}
                    onChange={(e) => {
                        this.setState({value: e.target.value})
                    }}
                />
            </TableCell>
            <TableCell align={'center'}>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.type}
                        onChange={(e)=> this.setState({type: e.target.value})}
                    >
                        <MenuItem value={recordTypes.income}>Income</MenuItem>
                        <MenuItem value={recordTypes.expenses}>Expenses</MenuItem>
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell/>
        </TableRow>
    }
}