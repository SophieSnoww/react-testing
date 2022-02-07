import React from 'react';
import Arc from './Arc';
import './Visualizer.css';

class Visualizer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let appWidth = window.innerWidth - 40;
        let arcEnd = appWidth - 50;

        let iBoundry = arcEnd * Math.sqrt(this.props.data.iBoundry / this.props.data.oBoundry);
        let hZoneStart = arcEnd * Math.sqrt((this.props.data.hZone * 0.95) / this.props.data.oBoundry);
        let hZoneEnd = arcEnd * Math.sqrt((this.props.data.hZone * 1.37) / this.props.data.oBoundry);
        let fLine = arcEnd * Math.sqrt(this.props.data.fLine / this.props.data.oBoundry);
        let oBoundry = arcEnd * Math.sqrt(1);
        
        let orbitLines = [];
        
        for (let i = 1; i < this.props.data.orbits.length + 1; i++) {
            orbitLines.push(
                <Arc color="#fff" width={(arcEnd * Math.sqrt(this.props.data.orbits[i-1] / this.props.data.oBoundry)) * 2} label={`Orbit ${i}`} isOrbit={true} isDisabled={this.props.data.orbitsDisabled} />
            );
        }

        return (
            <div className="Visualizer">
                <star />
                <Arc color="#f00" width={iBoundry * 2} label="Inner Boundry" />
                <Arc color="#0f0" width={hZoneStart * 2} label="Habitable Zone" />
                <Arc color="#0f0" width={hZoneEnd * 2} />
                <Arc color="#0ff" width={fLine * 2} label="Frost Line" />
                <Arc color="#f00" width={oBoundry * 2} label="Outer Boundry" />
                {orbitLines}
            </div>
        );
    }
}

export default Visualizer;
