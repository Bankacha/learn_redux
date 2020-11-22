const contactsReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_CONTACTS":
            return action.payload
    default:
        return state
    }
}

export default contactsReducer;