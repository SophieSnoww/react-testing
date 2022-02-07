import React from 'react';
import './OrbitDisplay.css';

class OrbitDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let orbitElements = [
            <div className="orbit-display-element label">
                <div className="orbit-display-name">Orbit</div>
                <div className="orbit-display-au">Distance</div>
                <div className="orbit-display-peroid">Orbital Period</div>
                <div className="orbit-display-velocity">Velocity</div>
            </div>
        ];
        
        for (let i = 1; i < this.props.data.orbits.length + 1; i++) {
            orbitElements.push(
                <div className="orbit-display-element">
                    <div className="orbit-display-name">Orbit {i}</div>
                    <div className="orbit-display-au">{Math.round(((this.props.data.orbits[i-1]/this.props.data.oBoundry)*this.props.data.oBoundry)*100)/100} AU</div>
                    <div className="orbit-display-peroid">{Math.round(((Math.sqrt((this.props.data.orbits[i-1] ** 3)/this.props.data.mass))*365.24)*100)/100} Earth Days</div>
                    <div className="orbit-display-velocity">{Math.round(((Math.sqrt(this.props.data.mass/this.props.data.orbits[i-1]))*30)*10)/10} km/s</div>
                </div>
            );
        }
        
        return (
            <div className="OrbitDisplay" onClick={this.props.handleClick} style={{
                opacity: this.props.data.orbitsDisabled ? "0" : "1"
            }}>
                <div className="orbit-display-title">Valid Orbits</div>
                {orbitElements}
            </div>
        );
    }
}

export default OrbitDisplay;
