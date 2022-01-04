export function new_contact(contact){
    return {
        type:"NEW_CONTACT",
        payload:contact
    }
}
export function toggle_fav(id){
    return{
        type:"TOGGLE_FAV",
        payload: id
    }
}
export function changeName(name){
    return{
        type:"CHANGE_NAME",
        payload: name
    }
}

export function changeMob(mobile){
    return{
        type:"CHANGE_MOB",
        payload: mobile
    }
}
export function changeEmail(email){
    return{
        type:"CHANGE_EMAIL",
        payload: email
    }
}

