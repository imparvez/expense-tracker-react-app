export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(item => item.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state, // returning initial state
                transactions: [action.payload, ...state.transactions] // with the new one.
            }
        default:
            return state;
    }
}