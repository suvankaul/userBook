import React, {Component} from 'react';
import './Card.styles.scss'
import { Card } from 'react-bootstrap';
import CardDetails from '../card-details/CardDetails.component'
class Cards extends Component{
    constructor(){
        super()
        this.formatUserName = this.formatUserName.bind(this)
        this.state = {
            showUserDetailsFlag : false
        }
    }

    showUserDetails = () => {
        this.setState({showUserDetailsFlag : true})
        // console.log(this.state)
    }

    hideUserDetails = (event) => {
        this.setState({showUserDetailsFlag: false})
        if(event) event.stopPropagation();
        // console.log(this.state)
    }

    formatUserName(user){
        // return name.split(' ').join('+');
        return user.name.first.concat("+",user.name.last);
    }

    render(){
        const { user } = this.props
        const { showUserDetailsFlag } = this.state
        return(
            <>
            <Card className="card-container" onClick={this.showUserDetails}>
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
            <CardDetails show={showUserDetailsFlag} user={user} onHide={this.hideUserDetails}></CardDetails>
            </Card>
            </>
        )

    }
}

export default Cards;