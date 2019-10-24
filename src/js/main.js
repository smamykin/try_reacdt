//main styles
import '../style/main.scss';

import React from 'react';
import ReactDOM from  'react-dom';

class App extends React.Component
{
    constructor(props){
        super(props);
        this.state = {text: ''};
    }

    onchange(evt){
        this.setState({text: evt.target.value});
    }

    render(){
        return (
            <div>
                <input type={'text'} placeholder={'Whom to say hello?'} onChange={this.onchange.bind(this)}/>
                <div>Hello, {this.state.text ? this.state.text : 'stranger' }!</div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
