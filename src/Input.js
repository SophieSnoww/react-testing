import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="Input">
                <input type="number" step="0.1" min="0.4" max="10" className="mass-input" placeholder="1" onInput={this.props.handleInput} />
                <div className="input-title">Mass of Star<br />(In solar masses)</div>
            </div>
        );
    }
}

export default Input;
