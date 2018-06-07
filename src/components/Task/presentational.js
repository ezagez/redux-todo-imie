import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class Task extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render () {
        return (
            <Fragment>
                <td>{this.props.label}</td>
                <td>
                    <button onClick={this.handleClick}>Supprimer</button>
                </td>
            </Fragment>
        )
    }
//fonction qui gère le clic
    handleClick() {
        this.props.delTodo(this.props.index)
    }
}

Task.propType = {
    index: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
}

export default Task
