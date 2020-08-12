export default function names (state = ["ejmin"], action) {
    switch (action.type) {
        case 'ADD_NAME':
            return [...state, action.payload]
        default:
            return state
    }
}