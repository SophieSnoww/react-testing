import React from 'react';
import './Arc.css';

class Arc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="arc" style={{
                border: "1px solid " + this.props.color,
                width: this.props.width + "px",
                height: this.props.width + "px",
                left: -(this.props.width / 2) + "px",
                opacity: (this.props.isDisabled) ? 0 : ((this.props.isOrbit) ? 0.5 : 1)
            }}>
                <div className="arc-label" style={{color: this.props.color}}>{this.props.label}</div>
            </div>
        );
    }
}

export default Arc;
