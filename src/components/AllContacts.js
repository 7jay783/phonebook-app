import React from 'react'
import ContactCard from './ContactCard'
import {useSelector} from 'react-redux'
function AllContacts() {
    const contacts = useSelector(state => state.allContacts)
     
    return (
        <div>
            {
                contacts.map(e=>{
                    return ( <ContactCard name={e.name} mobileNo={e.mobileNo} isFav= {e.isFav} id = {e.id}/>)
                })
            }
          
           
        </div>
    )
}

export default AllContacts
