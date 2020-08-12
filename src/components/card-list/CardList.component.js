//props.childern refer to the data that is passed between the child component tags in parent.
//E.g. <Cardlist name="ggg">gggg</Cardlist> ---- here props.children = 'gggg'
import React, {Component} from 'react';
import './CardList.styles.css'
import Cards from '../card/Card.component';

class CardList extends Component{
    render(){
        console.log(this.props)
        return(
            <div className="card-list">
                {
                    this.props.users.map(user => <Cards key={user.id.value} user={user}>
                    </Cards>)
                }
            </div>
        )
    }
}

export default CardList;