import React, {Component} from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardList from './components/card-list/CardList.component';
import SearchBox  from './components/search-box/SearchBox.component'

class App extends Component{
  constructor(){
    super();
    // this.searchUsers = this.searchUsers.bind(this); ----if not using arrow functions----------------
    this.state = {
      users : [],
      searchText: ''
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
    fetch('https://randomuser.me/api/?results=100&nat=us')
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      this.setState({users: data.results})
    })
  }

  render(){
    const { users} = this.state;
    let filteredUsers = users.filter(user => {
        return user.name.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0 || user.name.first.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0 || user.name.last.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0;
    })
    return(
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">User Book</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <SearchBox placeholder="Search user...." handleChange={this.searchUsers}></SearchBox>
          </Form>
        </Navbar>
        <CardList users={filteredUsers}> </CardList>       
      </div>
    )
  }
}

export default App;
