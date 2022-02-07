import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="Input">
                <input type="text" className="mass-input" placeholder="1" onInput={this.props.handleInput} />
            </div>
        );
    }
}

export default Input;
