import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
  constructor() {
    super()
      this.state ={
        users: [],
        searchfield: ''
      }
  }

    componentWillMount() {
      fetch('https://randomuser.me/api/?results=100')
      .then(response=> {
        if(response.ok) return response.json();
        throw new Error('Resquest Failed.');
      })
      .then(data => {
        this.setState({users: data.results});
    })
    .catch(error => {
      console.log(error);
    });
  }


  onSearchChange = (event) =>{
    this.setState({ searchfield: event.target.value })


  }
  render() {
    const {users, searchfield}=this.state;
    const filteredusers = users.filter(users =>{
      return users.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if(!users.length)
{
  return <h1><center>Loading</center></h1>
  }  return (
    <div className ='tc'>
      <h1 className='f1'>UserID</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
      <ErrorBoundary>
  <CardList users={filteredusers} />
  </ErrorBoundary>
  </Scroll>
</div>
    );
}
}

export default App;
