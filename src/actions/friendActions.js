export function addAction(val){
    return{
        type:"ADD_FRIEND",
        value:val
    }
}

export function delAction(val){
    return{
        type:"DELETE_FRIEND",
        value:val
    }
}