import React, {Component} from 'react';
import './Card.styles.css'
import { Card, Button } from 'react-bootstrap';

class Cards extends Component{
    constructor(){
        super()
        this.formatUserName = this.formatUserName.bind(this)
    }

    formatUserName(name){
        return name.split(' ').join('+');
    }

    render(){
        let formatUserString = this.formatUserName(this.props.user.name)
        const { user } = this.props
        return(
            <Card className="card-container">
            <Card.Img variant="top" src={`https://ui-avatars.com/api/?name=${formatUserString}&size=128&background=fcfcfc&rounded=true&color=56677b`} />
            <Card.Body className="card-body">
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                    <div>{user.email}</div>
                    <div>{user.phone}</div>
                </Card.Text>
                <Button variant="primary">Get Details</Button>
            </Card.Body>
            </Card>
            
        )

    }
}

export default Cards;