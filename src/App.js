import {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      users: [],
      search: ""
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(users => this.setState(() => {
          return {users: users};
        },
        () => {
          console.log(this.state)
        }));
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <input type='search' onChange={(event) => {
          this.setState({search: event.target.value})
        }}/>
        {
          this.state.users.filter((user) => user.name.match(new RegExp(`${this.state.search}`, "i"))).map((user) => this.getDiv(user))
        }
        {console.log(this.state)}
      </div>
    );
  }

  getDiv(user) {
    return <div key={user.id}>
      <h1>{user.name}</h1>
    </div>;
  }
}

export default App;
