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

        return (
            <div className="Visualizer">
                <star />
                <Arc color="#f00" width={iBoundry * 2} />
                <Arc color="#0f0" width={hZoneStart * 2} />
                <Arc color="#0f0" width={hZoneEnd * 2} />
                <Arc color="#0ff" width={fLine * 2} />
                <Arc color="#f00" width={oBoundry * 2} />
            </div>
        );
    }
}

export default Visualizer;
