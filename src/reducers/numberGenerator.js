const numberReducer = ( state = 0, action) => {
    switch(action.type) {
        case 'GENERATE':
            return state + Math.floor(Math.random()*10000)
        default:
            return state
    }
}
export default numberReducer;