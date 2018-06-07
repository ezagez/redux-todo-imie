import React, { Component } from 'react'
import PropTypes from 'prop-types'

import List from 'components/List'
import Form from 'components/Form'
import Filter from 'components/Filter'

class App extends Component {
    constructor(props) {
        super(props)
    }

    //voici le rendu de notre page principale
    render () {
        return (
            <div>
                <p>Mon application super trop bien 👌🏻❤️</p>
                <Filter />
                <List />
                <Form />
                <p>Made with ❤️ by 🦆 tout doux</p>
                <p><b> Nos vrais noms sont Gilles de la tourette et Gabriel</b> </p>
            </div>
        )
    }
}

export default App
