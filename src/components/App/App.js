import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import Welcome from '../../pages/Welcome/Welcome';
import Teachers from '../../pages/Teachers/Teachers';
import Students from '../../pages/Students/Students';

class App extends Component {
  state = { 
    teachers: ["Ben", "Linnae", "Jim"],
    students: ["Sky", "Crys", "Bran", "Jan"]
  }

  handleAdd = (name, role) => {
    this.setState({
        [role]: [...this.state[role], name]
    });
  }

  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink exact to="/" >Home</NavLink>
            <NavLink exact to="/teachers" >Teachers</NavLink>
            <NavLink exact to="/students" >Students</NavLink>
          </nav>
        </header>
        <main>
          <Route exact path="/" render={() =>
            <Welcome />
          }  />
          <Route exact path="/teachers" render={() =>
            <Teachers 
              teachers={this.state.teachers}
              handleAdd={this.handleAdd} />
          } />
          <Route exact path="/students" render={() =>
            <Students 
              students={this.state.students} 
              handleAdd={this.handleAdd}/>
          } />
        </main>
      </div>
    );
  }
}
 
export default App;


