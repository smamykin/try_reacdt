import React from "react";
import ColorOption from "./ColorOption";

export default class ColorSelector extends React.Component {
    render() {
        let options = [
            'blue',
            'red',
            'gray',
            'green',
            'yellow'
        ];
        return (
            <div className={'color-selector'}>
                {
                    options.map((color, index) => {
                        return <ColorOption
                            key={index}
                            handleSelect={()=>this.props.handleColorSelect(color)}
                            color={color}
                            selected={this.props.selected === color}/>
                    })
                }
            </div>
        );
    }
}
