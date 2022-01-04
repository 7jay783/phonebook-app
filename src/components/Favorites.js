import React from 'react'
import {useSelector} from 'react-redux'
import ContactCard from './ContactCard'
function Favorites() {
    const contacts = useSelector(state => state.allContacts)
    return (
        <div>
            {contacts.map(e=>{
                if(e.isFav === true)
                return ( <ContactCard name={e.name} mobileNo={e.mobileNo} isFav= {e.isFav} id = {e.id}/>)
            })}
        </div>
    )
}

export default Favorites
