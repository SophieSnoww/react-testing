import React from 'react';
import './OrbitDisplay.css';

class OrbitDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let orbitElements = [];
        
        for (let i = 1; i < this.props.data.orbits.length + 1; i++) {
            orbitElements.push(
                <div className="orbit-display-element">
                    <div className="orbit-display-name">Orbit {i}</div>
                    <div className="orbit-display-au">{Math.round(((this.props.data.orbits[i-1]/this.props.data.oBoundry)*this.props.data.oBoundry)*100)/100} AU</div>
                </div>
            );
        }
        
        return (
            <div className="OrbitDisplay" onClick={this.props.handleClick} style={{
                opacity: this.props.data.orbitsDisabled ? "0" : "1"
            }}>
                <div className="orbit-display-title">Orbits</div>
                {orbitElements}
            </div>
        );
    }
}

export default OrbitDisplay;
