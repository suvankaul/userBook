import React, {Component} from 'react';
import { Navbar, Spinner } from 'react-bootstrap';
import { FaAddressBook } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import CardList from './components/card-list/CardList.component';
import SearchBox  from './components/search-box/SearchBox.component'
import Loader from './components/loader/Loader.component';

class App extends Component{
  constructor(){
    super();
    // this.searchUsers = this.searchUsers.bind(this); ----if not using arrow functions----------------
    this.state = {
      users : [],
      searchText: '',
      loading: false
    }
  }

  searchUsers = (event) => {
    let { value } = event.target;
    //Since setState() is asynchronous function use callbacks to execute events which are triggered when asynchronous function execution is completed. [ this.setState({searchText: value},()=> console.log(this.state)) ]
    this.setState({searchText: value})
  }

  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    //   this.setState({users: data})
    // })
    this.setState({loading: true})
    console.log(this.loading)
    fetch('https://randomuser.me/api/?results=100&nat=us')
    .then(response => response.json())
    .then(data => {
      data.results = data.results.map(resD => ({...resD, getDetails: false}))
      // console.log(data.results);
      this.setState({users: data.results, loading:false})
      
    })
  }

  render(){
    const { users, loading} = this.state;
    let filteredUsers = users.filter(user => {
        return user.name.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0 || user.name.first.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0 || user.name.last.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0 || user.email.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0 || user.phone.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0;
    })
    return(
      <div className="App">
        <Navbar className="navbar">
          <div className="title">
            <div className="title-icon"><FaAddressBook></FaAddressBook></div>
            <div className="title-name">
                <div className="primary">User Book </div>
                {/* <div className="secondary">Your Personalised User Address Book</div> */}
            </div>
          </div>
          <div className="search-area">
            <SearchBox placeholder="Search user...." handleChange={this.searchUsers}></SearchBox>
          </div>
        </Navbar>
          { loading ? <Loader text='Users'></Loader> : <CardList users={filteredUsers}></CardList> }
          {/* <Loader></Loader> */}
      </div>
    )
  }
}

export default App;
