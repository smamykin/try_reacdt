//main styles
import '../style/main.scss';

import React from 'react';
import ReactDOM from  'react-dom';

class Calc extends React.Component
{
    constructor(props){
        super(props);
        this.state = {'result': '0'}
    }
    get n1(){
        return this.normalize(this.number1.value);
    }

    get n2(){
        return this.normalize(this.number2.value);
    }

    normalize(n){
        n = +n;
        if (!n){
            return 0
        }
        return n;
    }

    addition() {
        this.setState({'result': this.n1 + this.n2});
    }

    multiplication() {
        this.setState({'result': this.n1 * this.n2});
    }

    subtraction() {
        this.setState({'result': this.n1 - this.n2});
    }

    componentDidMount() {
        this.number1 = document.querySelector('.number1');
        this.number2 = document.querySelector('.number2');
   }

   shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState.result !== this.state.result;
   }

    render() {
        return (
            <div>
                <input type='number' className={'number1'} name="number1" placeholder={'Number 1'}/>
                <input type='number' className={'number2'} name="number2" placeholder={'Number 2'}/>
                <button onClick={()=> this.addition()}>+</button>
                <button onClick={()=> this.subtraction()}>-</button>
                <button onClick={()=> this.multiplication()}>*</button>
                <div className="result">Result  = {this.state.result} </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Calc />,
    document.getElementById("app")
);
