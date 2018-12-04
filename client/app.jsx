import React from 'react';
import ReactDOM from 'react-dom';
import Habit from './habit.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      habit: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:1111/habit")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            habit: result[0].name
          })
          console.log(this.state.habit);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    if (this.state.habit) {
    return (
      <div id="habit">
        <Habit habit={this.state.habit}/>
      </div>
      )
   } else {
    return (
      <div> Loading... </div>
      )
   }
  }
}

export default App;