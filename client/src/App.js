import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('/getallmovies')
      .then(result => {
        this.setState({ movies: result.data });
        console.log(this.state.movies);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>{}</h1>
      </div>
    );
  }
}

export default App;
