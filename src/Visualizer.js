import React from 'react';
import Arc from './Arc';
import './Visualizer.css';

class Visualizer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let appWidth = window.innerWidth -40;
        let arcStart = 0;
        let arcEnd = appWidth - 125;

        let iBoundry = arcEnd * (this.props.data.iBoundry / this.props.data.oBoundry);
        let fLine = arcEnd * (this.props.data.fLine / this.props.data.oBoundry);
        let hZone = arcEnd * (this.props.data.hZone / this.props.data.oBoundry);

        return (
            <div className="Visualizer">
                {/* <star /> */}
                <Arc color="#f00" width={iBoundry * 2} />
                <Arc color="#0f0" width={hZone * 2} />
                <Arc color="#0ff" width={fLine * 2} />
                <Arc color="#f00" width={arcEnd * 2} />
            </div>
        );
    }
}

export default Visualizer;
