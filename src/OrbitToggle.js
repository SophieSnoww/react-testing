import React from 'react';
import './OrbitToggle.css';

class OrbitToggle extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="OrbitToggle" onClick={this.props.handleClick} style={{
                border: this.props.data.orbitsDisabled ? "1px solid var(--color-1)" : "1px solid #0f7"
            }}>Orbits {this.props.data.orbitsDisabled ? "disabled" : "enabled"}</div>
        );
    }
}

export default OrbitToggle;
