import React from 'react';
import './RegenButton.css';

class RegenButton extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="RegenButton" onClick={this.props.handleClick}>Regenerate orbits</div>
        );
    }
}

export default RegenButton;
