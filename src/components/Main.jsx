import React from 'react'
import Movies from "./Movies";
import Search from "./Search";
const axios = require('axios');


class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        axios.get(`http://www.omdbapi.com/?apikey=d26bfc81&s=terminator`).then(res => this.setState({movies: res.data.Search}))
    }

    searchMovie = (str) => {
        axios.get(`http://www.omdbapi.com/?apikey=d26bfc81&s=${str}`).then(res => this.setState({movies: res.data.Search}))
    }

    render() {
        const {movies} = this.state
        return (
            <main className="content">
                <Search searchMovie={this.searchMovie} />
                <Movies movies={movies} />
            </main>
        )
    }
}

export default Main
