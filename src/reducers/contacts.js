const initialState = {
    data: [],
    selected: null ,
    filtered: []
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACTS":
            return {...state, data: action.payload}
        case "DELETE_CONTACT":
            return {...state, data: state.data.filter(c => c.id !== action.payload)}
        case "SELECT": 
            return {...state, selected: state.data.find(c=>c.id === action.payload)}
        case "FILTER":
            return {...state, filtered: state.data.filter( c=> c.name.toLowerCase().includes(action.payload.toLowerCase()))}
        case "EDIT":
            return {...state, selected: state.selected}    
        default:
            return state
    }
}

export default contactsReducer;