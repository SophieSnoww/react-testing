import React from 'react';
import './App.css';
import Input from './Input';
import Visualizer from './Visualizer';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();
        
        this.state = {
            starMass: 1
        }
    }
    
    handleInput(data) {
        this.setState({
            starMass: Number(data.target.value)
        });
    }
    
    truncate(number, places=3) {
        let num = 10 ** places;
        return Math.round(number*num)/num;
    }
    
    render() {
        let m = this.state.starMass;

        let luminosity = this.truncate(m ** 4);
        let radius = this.truncate(m ** 0.74);
        let lifespan = this.truncate(m ** -2.5);
        let temp = this.truncate(m ** 0.505);
        let iBoundry = this.truncate(m * 0.1);
        let hZone = this.truncate(luminosity ** 0.5)
        let fLine = this.truncate((luminosity ** 0.5) * 4.85)
        let oBoundry = this.truncate(m * 40);

        return (
            <div className="App">
                <Visualizer data={{mass: m, luminosity, radius, lifespan, temp, iBoundry, hZone, fLine, oBoundry, ref: this.ref}} />
                <Input handleInput={(data) => this.handleInput(data)} />
                <div> Luminosity: {luminosity} </div>
                <div> Radius: {radius} </div>
                <div> Surface Tempreture: {temp} ({Math.round(temp*5778)} K) </div>
                <div> Lifespan: {lifespan * 10} billion years </div>
                <div> Inner Boundry: {iBoundry} AU </div>
                <div> Habitable Zone: {this.truncate(hZone * 0.95)} AU - {this.truncate(hZone * 1.37)} AU </div>
                <div> Frost Line: {fLine} AU </div>
                <div> Outer Boundry: {oBoundry} AU </div>
            </div>
        );
    }
}

export default App;
