export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const loggedIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const generateNumber = () => {
    return {
        type: 'GENERATE'
    }
}

export const getContacts = (contacts) => {
    return {
        type: 'ADD_CONTACTS',
        payload: contacts
    }
}

export const deleteContact = (id) => {
    return {
        type: 'DELETE_CONTACT',
        payload: id
    }
}

export const selectContact = (id) => {
    return {
        type: 'SELECT',
        payload: id
    }
}

export const search = (input) => {
    return {
        type: "FILTER",
        payload: input
    }
}