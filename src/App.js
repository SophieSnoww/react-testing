import React from 'react';
import './App.css';
import Input from './Input';
import OrbitDisplay from './OrbitDisplay';
import OrbitToggle from './OrbitToggle';
import RegenButton from './RegenButton';
import Visualizer from './Visualizer';

class App extends React.Component {
    constructor(props) {
        super(props);

        let m = 1;
        let luminosity = this.truncate(m ** 4);
        let iBoundry = this.truncate(m * 0.1);
        let fLine = this.truncate((luminosity ** 0.5) * 4.85);
        let oBoundry = this.truncate(m * 40);

        let startingOrbit = fLine + 1;
        let orbit = startingOrbit;
        let orbits = [startingOrbit];

        while (orbit < oBoundry) {
            orbit *= 1.4 + (Math.floor(Math.random() * 60) / 100);
            orbits.push(orbit);
        }

        orbits.pop(orbits.length - 1);

        orbit = startingOrbit;

        while (orbit > iBoundry) {
            orbit /= 1.4 + (Math.floor(Math.random() * 60) / 100);
            orbits.splice(0, 0, orbit);
        }

        orbits.splice(0, 1);
        orbits.splice(0, 1);

        this.state = {
            mass: m,
            luminosity: this.truncate(m ** 4),
            radius: this.truncate(m ** 0.74),
            lifespan: this.truncate(m ** -2.5),
            temp: this.truncate(m ** 0.505),
            iBoundry: this.truncate(m * 0.1),
            hZone: this.truncate(luminosity ** 0.5),
            fLine: this.truncate((luminosity ** 0.5) * 4.85),
            oBoundry: this.truncate(m * 40),
            orbits,
            orbitsDisabled: false
        }
    }

    handleInput(data) {
        let m = Number(data.target.value);
        if ([0, NaN].includes(m) || m < 0.4 || m > 10) {
            return;
        }
        let luminosity = this.truncate(m ** 4);
        let radius = this.truncate(m ** 0.74);
        let lifespan = this.truncate(m ** -2.5);
        let temp = this.truncate(m ** 0.505);
        let iBoundry = this.truncate(m * 0.1);
        let hZone = this.truncate(luminosity ** 0.5);
        let fLine = this.truncate((luminosity ** 0.5) * 4.85);
        let oBoundry = this.truncate(m * 40);

        let startingOrbit = fLine + 1;
        let orbit = startingOrbit;
        let orbits = [startingOrbit];

        while (orbit < this.state.oBoundry) {
            orbit *= 1.4 + (Math.floor(Math.random() * 60) / 100);
            orbits.push(orbit);
        }

        orbits.pop(orbits.length - 1);

        orbit = startingOrbit;

        while (orbit > this.state.iBoundry) {
            orbit /= 1.4 + (Math.floor(Math.random() * 60) / 100);
            orbits.splice(0, 0, orbit);
        }

        orbits.splice(0, 1);
        orbits.splice(0, 1);

        this.setState({
            mass: m,
            luminosity,
            radius,
            lifespan,
            temp,
            iBoundry,
            hZone,
            fLine,
            oBoundry,
            orbits
        });
    }

    regenOrbits() {
        let startingOrbit = this.state.fLine + 1;
        let orbit = startingOrbit;
        let orbits = [startingOrbit];

        while (orbit < this.state.oBoundry) {
            orbit *= 1.4 + (Math.floor(Math.random() * 60) / 100);
            orbits.push(orbit);
        }

        orbits.pop();

        orbit = startingOrbit;

        while (orbit > this.state.iBoundry) {
            orbit /= 1.4 + (Math.floor(Math.random() * 60) / 100);
            orbits.splice(0, 0, orbit);
        }

        orbits.splice(0, 1);
        orbits.splice(0, 1);

        this.setState({
            orbits
        });
    }

    toggleOrbits() {
        this.setState({
            orbitsDisabled: !this.state.orbitsDisabled
        });
    }

    truncate(number, places = 3) {
        let num = 10 ** places;
        return Math.round(number * num) / num;
    }

    render() {
        return (
            <div className="App">
                <Visualizer data={this.state} />
                <div className="app-container">

                    <OrbitDisplay data={this.state} />
                    <OrbitToggle data={this.state} handleClick={() => this.toggleOrbits()} />
                    <RegenButton handleClick={() => this.regenOrbits()} />
                    <Input handleInput={(data) => this.handleInput(data)} />
                    <div className="data-container">
                        <div className="data-output">
                            <div className="data-output-title">Luminosity:</div> {this.state.luminosity}
                        </div>
                        <div className="data-output">
                            <div className="data-output-title">Radius:</div> {this.state.radius}
                        </div>
                        <div className="data-output">
                            <div className="data-output-title">Surface Tempreture:</div> {this.state.temp} ({Math.round(this.state.temp * 5778)} K)
                    </div>
                        <div className="data-output">
                            <div className="data-output-title">Lifespan:</div> {this.truncate(this.state.lifespan * 10)} billion years
                    </div>
                        <div className="data-output">
                            <div className="data-output-title">Inner Boundry:</div> {this.state.iBoundry} AU
                    </div>
                        <div className="data-output">
                            <div className="data-output-title">Habitable Zone:</div> {this.truncate(this.state.hZone * 0.95)} AU - {this.truncate(this.state.hZone * 1.37)} AU
                    </div>
                        <div className="data-output">
                            <div className="data-output-title">Frost Line:</div> {this.state.fLine} AU
                    </div>
                        <div className="data-output">
                            <div className="data-output-title">Outer Boundry:</div> {this.state.oBoundry} AU
                    </div>
                    </div>
                    <div className="credits">
                        <a href="https://github.com/HouseholdDragon" className="credit-link">HouseholdDragon</a>
                        <a href="https://zephyrsnow.xyz" className="credit-link">Zephyr Snow</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
