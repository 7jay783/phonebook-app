export function recentReducer(state=[], action)
{    const MAXLEN = 10;
    switch(action.type)
    {
         case "ADD_RECENT":
             let newState = [...state]
             if(newState.length === MAXLEN)
                newState.shift();
                newState.push(action.payload)
                return newState
         default:
             return state
    }
}