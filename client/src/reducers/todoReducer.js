import { ADD_TODO, GET_TODO, DELETE_TODO, TODO_LOADING } from '../actions/types'

const initialState = {
    todos : [],
    loading : false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_TODO:
            return {
                ...state,
                todos : action.payload,
                loading : false
            }
        case DELETE_TODO:
            return {
                ...state,
                todos : state.todos.filter(todo => todo._id != action.payload)
            }
        case ADD_TODO:
            return {
                ...state,
                todos : [action.payload, ...state.todos]
            }
        case TODO_LOADING:
            return {
                ...state,
                loading : true
            }
        default:
            return state
    }
}