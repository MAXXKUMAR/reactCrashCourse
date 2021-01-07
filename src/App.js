import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import About from './components/pages/About';

class App extends Component {
  state ={
    ct:3,
    todos: [
      {
        id:1,
        title: 'take out trash',
        completed: false
      },
      {
        id:2,
        title: 'dinner reservation',
        completed: false
      },
      {
        id:3,
        title: 'meeting boss',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo=>{
      if(todo.id===id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  //Add Todo
  addTodo = (title) =>{
    this.setState({ct: this.state.ct+1})
    const newTodo = {
      id:this.state.ct+1,
      title,
      completed: false
    }
    this.setState({todos:[...this.state.todos, newTodo]})
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )}/>
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
 }
export default App;
