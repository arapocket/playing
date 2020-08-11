export default function todos (state = ["plorik"], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        default:
            return state
    }
}