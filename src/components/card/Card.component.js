import React, {Component} from 'react';
import './Card.styles.scss'
import { Card, Button } from 'react-bootstrap';

class Cards extends Component{
    constructor(){
        super()
        this.formatUserName = this.formatUserName.bind(this)
    }

    getDetails = () => {
        console.log(this.props.user)
        this.props.user.getDetails = true;
    }

    formatUserName(user){
        // return name.split(' ').join('+');
        return user.name.first.concat("+",user.name.last);
    }

    render(){
        let formatUserString = this.formatUserName(this.props.user)
        const { user } = this.props
        return(
            <Card className="card-container" onClick={this.getDetails}>
            <div className="card-top">
                <div className="card-img">
                    {/* <img alt={user.name.first} src={`https://ui-avatars.com/api/?name=${formatUserString}&background=fcfcfc&rounded=true&color=56677b`}/> */}
                    <img alt={user.name.first} src={user.picture.thumbnail}/>
                </div>
                <div className="card-title">
                    <div className="user-name">{user.name.title} {user.name.first} {user.name.last}</div>
                    <div className="user-email">{user.email}</div>
                    <div className="user-phone">{user.phone}</div>
                </div>
                
            </div>            
            {/* <div className="card-body">
                
                <div className="card-text">
                    <span className="email">{user.email}</span>
                    <span className="phone">{user.phone}</span>
                </div>
            </div> */}
            </Card>
            
        )

    }
}

export default Cards;