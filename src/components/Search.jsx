import React from "react";

class Search extends React.Component {
    state = {
        searchValue: ''
    }

    handleClick = (e) => {
        if (e.key === 'Enter') this.props.searchMovie(this.state.searchValue)
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input type="text"
                           className='validate'
                           value={this.state.searchValue}
                           onChange={e => this.setState({searchValue: e.target.value})}
                           onKeyDown={e => this.handleClick(e)}
                           placeholder='Enter movie title'
                    />
                    <button onClick={() => this.props.searchMovie(this.state.searchValue)}>Search</button>
                </div>
            </div>
        )
    }
}

export default Search