import React from 'react'
import Movies from "./Movies";
const axios = require('axios').default;

const movie = 'terminator'

class Main extends React.Component {
    state = {
        movies: [],
    }

    url = `http://www.omdbapi.com/?apikey=d26bfc81&s=${movie}`
    componentDidMount() {
        axios.get(this.url).then(res => this.setState({movies: res.data.Search}))
    }

    render() {
        const {movies} = this.state
        return (
            <main className="content">
                    <Movies movies={movies} />
            </main>
        )
    }
}

export default Main
