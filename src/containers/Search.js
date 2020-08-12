import React from 'react'

const Search = props => {
    return (
        <div className="container">
        <div className="ui icon input">
            <input onChange={props.input} />
            <i className="search icon" />
        </div>
        </div>
    )
}

export default Search