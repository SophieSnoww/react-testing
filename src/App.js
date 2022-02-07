import React from 'react';
import './App.css';
import Input from './Input';
import Visualizer from './Visualizer';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        let m = 1;
        let luminosity = this.truncate(m ** 4);
        
        this.state = {
            mass: m,
            luminosity: this.truncate(m ** 4),
            radius: this.truncate(m ** 0.74),
            lifespan: this.truncate(m ** -2.5),
            temp: this.truncate(m ** 0.505),
            iBoundry: this.truncate(m * 0.1),
            hZone: this.truncate(luminosity ** 0.5),
            fLine: this.truncate((luminosity ** 0.5) * 4.85),
            oBoundry: this.truncate(m * 40)
        }
    }
    
    handleInput(data) {
        let m = Number(data.target.value);
        let luminosity = this.truncate(m ** 4);
        
        this.setState({
            mass: Number(data.target.value),
            luminosity: this.truncate(m ** 4),
            radius: this.truncate(m ** 0.74),
            lifespan: this.truncate(m ** -2.5),
            temp: this.truncate(m ** 0.505),
            iBoundry: this.truncate(m * 0.1),
            hZone: this.truncate(luminosity ** 0.5),
            fLine: this.truncate((luminosity ** 0.5) * 4.85),
            oBoundry: this.truncate(m * 40)
        });
    }
    
    truncate(number, places=3) {
        let num = 10 ** places;
        return Math.round(number*num)/num;
    }
    
    render() {
        let startingOrbit = this.state.fLine + 1;

        return (
            <div className="App">
                <Visualizer data={this.state} />
                <Input handleInput={(data) => this.handleInput(data)} />
                <div className="data-container">
                    <div className="data-output">
                        <div className="data-output-title">Luminosity:</div> {this.state.luminosity}
                    </div>
                    <div className="data-output">
                        <div className="data-output-title">Radius:</div> {this.state.radius}
                    </div>
                    <div className="data-output">
                        <div className="data-output-title">Surface Tempreture:</div> {this.state.temp} ({Math.round(this.state.temp*5778)} K)
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
            </div>
        );
    }
}

export default App;
