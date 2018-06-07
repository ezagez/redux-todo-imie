import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Filter extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    //ici la methode .map boucle sur tous les éléments et applique à chacun une fonction
    render() {
        let options = this.props.options.map((option, i) => {
            return <option key={`option-${i}`} value={option}>{option}</option>
        })
        return (
            <select id="filter-select" onChange={this.handleChange}>
                {options}
            </select>
        )
    }

    //s'execute quand il y a un changement
    handleChange(e) {
        this.props.setFilter(e.target.value)
    }
}


Filter.propType = {
    options: PropTypes.array.isRequired,
    setFilter: PropTypes.func.isRequired
}

export default Filter
