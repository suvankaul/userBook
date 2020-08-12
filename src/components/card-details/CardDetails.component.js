import React, {Component} from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInfoCircle, FaBirthdayCake, FaIdBadge, FaFlag } from 'react-icons/fa';
import './CardDetails.styles.scss'
class CardDetails extends Component {
    render() {
        const { user } = this.props;
        return (
            <Modal {...this.props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header className="modal-header">
                    <div className="card-img">
                        <img alt={user.name.first} src={user.picture.medium}/>
                    </div>
                    <div className="card-title">
                        <div className="user-name">{user.name.title} {user.name.first} {user.name.last}</div>
                        <div className="user-email"><FaEnvelope></FaEnvelope> {user.email}</div>
                        <div className="user-phone"><FaPhoneAlt></FaPhoneAlt> {user.phone}</div>
                    </div>  
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Card className="card-container">
                        <div className="card-header"><FaInfoCircle></FaInfoCircle> Bio</div>
                        <div className="card-body">
                            {/* <div><FaBirthdayCake></FaBirthdayCake> {new Date(user.dob.date).toUTCString().split(' ').slice(0,4).join(' ')}</div> */}
                            <div><FaIdBadge></FaIdBadge>  {user.id.name} {user.id.value} </div>
                            <div><FaBirthdayCake></FaBirthdayCake>  {new Date(user.dob.date).toDateString().split(' ').slice(1,3).join(' ')}</div>
                            <div><FaPhoneAlt></FaPhoneAlt>  {user.cell}</div>
                            <div><FaFlag></FaFlag>  {user.nat}</div>
                        </div>
                    </Card>
                    <Card className="card-container">
                        <div className="card-header"><FaMapMarkerAlt></FaMapMarkerAlt> Address</div>
                        <div className="card-body">
                            <div>{user.location.street.number}, {user.location.street.name}</div>
                            <div>{user.location.city}, {user.location.state}</div>
                            <div>{user.location.country} - {user.location.postcode}</div>
                            <div>{user.location.coordinates.latitude}&#176; LAT / {user.location.coordinates.longitude}&#176; LONG</div>
                        </div>
                    </Card>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button className="close-btn" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            // <Card>
            //     <div className="card-top">
            //         <div className="card-img">
            //             <img alt="" src=""/>
            //         </div>
            //         <div className="card-title">
            //             <div className="user-name"></div>
            //             <div className="user-email"></div>
            //             <div className="user-phone"></div>
            //         </div>
            //     </div> 
            //     <div className="card-body">
                
            //     </div>
            // </Card>
        )
    }
}

export default CardDetails;