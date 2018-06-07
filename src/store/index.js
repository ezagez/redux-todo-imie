import { createStore, combineReducers } from 'redux'
import * as filters from 'store/ducks/filters'
import * as todos from 'store/ducks/todos'

//combineducers #jeuDeMot (ou pas)
const rootReducer = combineReducers({
    todos: todos.default,
    filters: filters.default
})

const store = createStore(rootReducer)

// les exports permettent l'import dans d'autres fichier de notre projets PARCE QUE C'EST NOTRE PROJET !! #Perlinpinpin 🚫
export default store
