const deleteReducer = (state = [], action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return state.filter(c=> c.id !== action.payload.id);
        default:
            return state
        }
    }

    export default deleteReducer;