//props.childern refer to the data that is passed between the child component tags in parent.
//E.g. <Cardlist name="ggg">gggg</Cardlist> ---- here props.children = 'gggg'
import React, {Component} from 'react';
import './CardList.styles.scss'
import Cards from '../card/Card.component';
import NoData from '../no-data/NoData.component'

class CardList extends Component{
    render(){
        // console.log(this.props)
        const { users } = this.props;
        if(users.length > 0){
            return(
                <div className="card-list">{  
                    users.map(user => <Cards key={user.id.value} user={user}></Cards>)   
                }</div>
            )
        } else {
            return(
                <div><NoData text='Users'></NoData></div>
            )   
        }
    }
}

export default CardList;