import React from 'react'
import classNames from "classnames";

const timerStates = {
    'not_started': 0,
    'going': 1,
    'paused': 2,
};
export default class Timer extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            seconds: 0,
            state: timerStates.not_started
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.state === this.state.state){
            return;
        }
        if (this.state.state === timerStates.going){
            this.startInterval();
        } else {
            clearInterval(this.timer);
        }
    }

    startInterval() {
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    tick(){
        this.setState({ seconds: this.state.seconds + 1 });
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleClick(newTimerState){
        this.setState({state:newTimerState})
    }

    render(){
        return (
            <div>
                <h4> Уже прошло {this.state.seconds} секунд </h4>
                <Controls currentState={this.state.state} handleClick={(newTimerState)=>this.handleClick(newTimerState)}/>
            </div>
        );
    }
}

class Controls extends React.Component
{
    handleClick(newTimerState){
        this.props.handleClick(newTimerState)
    }
    render() {
        switch(this.props.currentState){
            case timerStates.going:
                return <button onClick={() => this.handleClick(timerStates.paused)}>Пауза</button>;
            case timerStates.paused:
                return <button onClick={() => this.handleClick(timerStates.going)}>Возобновить</button>;
            case timerStates.not_started:
                return <button onClick={() => this.handleClick(timerStates.going)}>Старт</button>;
        }
    }
}
