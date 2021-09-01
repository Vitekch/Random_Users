import initialState from "./initialState";

export default function friendReucer(state=initialState.friends, action){
  const user=state.friendList.some(el=>el.id===action.value.id);
    switch(action.type){
        case "ADD_FRIEND":{
           if(!user)
            return{
                friendList:[...state.friendList,action.value]
            }
             else
           return state;
        }

        case "DELETE_FRIEND":{
            return{
        
                friendList:[...state.friendList.slice(0, action.value.id), ...state.friendList.slice(action.value.id + 1)]
            }
        }

        default:return state;
    }
}