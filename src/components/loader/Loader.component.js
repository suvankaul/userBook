import React, {Component } from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.style.scss';

class Loader extends Component{
    render(){
        const { text } = this.props
        return (
            <div className="loader">
                <Spinner className="loader-spin" animation="border" role="status"></Spinner>
                <div className="loader-text">Fetching {text}...</div>
            </div>
        )
    }
}

export default Loader; 