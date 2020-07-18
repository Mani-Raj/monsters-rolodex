import React from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}) )
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    console.log(filteredMonster, 'fil monster')
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monster'
          handleChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters={filteredMonster} />
      </div>
    )
  }

}

export default App;
