import React from "react";
import classNames from "classnames";

export default class ColorOption extends React.Component {
    render() {
        let elementName = 'color-selector__item';
        let optClass = classNames(
            elementName,
            elementName + '_' + this.props.color,
            {[elementName + '_selected']: this.props.selected}
        );

        return <div className={optClass} onClick={this.props.handleSelect}/>;
    }
}
