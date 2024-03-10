export default function (state, action) {
    switch (action.type) {
        case 'ADD_NAME':
            const {name} = action.payload
            return {...state, nameList: [...state.nameList, name]}; 
            case 'CLEAN_LIST':
            return {...state, nameList: []}; 
            case 'USERNAME_ADD':
            return {...state, userName: [action.payload.user]}; 
        default:
            return state; 
    }
}
