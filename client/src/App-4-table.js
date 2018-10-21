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
    var data = this.state.movies;

    return (
      <div className="App">
        <div className="jumbotron text-center header">
          <h1>Movies</h1>
          <p>Search for movies</p>
        </div>
        <div className="container">
          <ReactTable
            data={data}
            columns={[
              {
                Header: 'Title',
                accessor: 'title'
              },
              {
                Header: 'Year',
                accessor: 'year'
              },
              {
                Poster: 'Poster',
                Cell: row => {
                  return (
                    <div>
                      <img height={34} src={data.poster} />
                    </div>
                  );
                }
              }
            ]}
            defaultPageSize={5}
            className="-striped -highlight"
          />
        </div>
      </div>
    );
  }
}

export default App;
