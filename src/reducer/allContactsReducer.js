
export function allContactsReducer(state=[
    {   
        id:0,
        name:"Jay Prakash",
        mobile: "+91 9453253454",
        email:"jay@123",
        isFav: false
    },
    {
        id:1,
        name:"Ramesh Singh",
        mobile: "+91 9453253454",
        email:"ramesh@123",
        isFav: false
    },
    {
        id:2,
        name:"Sanjay Singh",
        mobile: "+91 9453253454",
        email:"sanjay@123",
        isFav: true
    }
], action)
{
    switch(action.type){
        case "NEW_CONTACT":
             return [...state, {...action.payload, isFav:false, id:(state? state[state.length-1].id+1:0)}]
        case "TOGGLE_FAV": 
           const x= [...state]
          state.forEach((element, i) => {
            if(action.payload === element.id){           
               x[i].isFav = !state[i].isFav
                }
          })
          return x
        
        default:
            return state;
    }
}