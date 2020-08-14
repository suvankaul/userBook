//props.childern refer to the data that is passed between the child component tags in parent.
//E.g. <Cardlist name="ggg">gggg</Cardlist> ---- here props.children = 'gggg'
import React, {Component} from 'react';
import './NoData.style.scss';

class CardList extends Component{
    render(){
        // console.log(this.props)
        const { text } = this.props;
        return(
            <div className="no-data">
                <div className="no-data-img">
                    <img className="data-img" src="../../no-data.png" alt="No Data" />
                </div>
                <div className="no-data-text">No {text} Found..</div>
            </div>
        )
    }
}

export default CardList;