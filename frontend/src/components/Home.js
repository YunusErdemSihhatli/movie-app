import React, { useEffect } from 'react';
import Movies from './Movies';
import Movie from './Movie';
import Navbar from './Navbar';

class Home extends React.Component {
  state = {
    selectedMovie: null,
  }

  selectMovie = (movie) => {
    this.setState({ selectedMovie: movie })
  }

  render() {
    return (
      <div className="container mx-auto px-4">
        {
          this.props.user ?
            <p>{this.props.user.name}</p>
            :
            <Navbar />

        }
        {
          this.state.selectedMovie ?
            <Movie movie={this.state.selectedMovie} selectMovie={this.selectMovie} />
            :
            <Movies selectMovie={this.selectMovie} />
        }
      </div>
    )
  };
}
export default Home;
