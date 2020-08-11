import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

class CardDetails extends Component {
    render() {
        return (
            <Card>
                <div className="card-top">
                    <div className="card-img">
                        <img alt="" src=""/>
                    </div>
                    <div className="card-title">
                        <div className="user-name"></div>
                        <div className="user-email"></div>
                        <div className="user-phone"></div>
                    </div>
                </div> 
                <div className="card-body">
                
                </div>
            </Card>
        )
    }
}

export default CardDetails;