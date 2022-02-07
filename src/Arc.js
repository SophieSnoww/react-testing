import React from 'react';
import './Arc.css';

class Arc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <arc style={{
                border: "1px solid " + this.props.color,
                width: this.props.width + "px",
                height: this.props.width + "px",
                left: -(this.props.width / 2) + "px"
            }} />
        );
    }
}

export default Arc;
