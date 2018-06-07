import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            value: ''
        }
    }
//fonction qui gère le rendu
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button type="submit">Add TODO</button>
            </form>
        )
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
//fonction qui permet d'envoyer le contenu du input
    handleSubmit(e) {
        this.props.addTodo(this.state.value)
        this.setState({
            value: ''
        })
        e.preventDefault();
        e.stopPropagation();
    }
}

export default Form
