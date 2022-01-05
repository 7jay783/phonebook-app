import React from 'react'
import {useSelector} from 'react-redux';
import ContactCard from './ContactCard';

function Recent() {
    const recentCalls = useSelector(state => state.recentCalls)
    const allContacts = useSelector(state => state.allContacts)
   
    return (
        <div>
            {recentCalls.slice(0).reverse().map(e=>{
               let recents = {}
               allContacts.forEach(contact => {
                   if(contact.id === e){
                       recents = contact
                   }
                   
               })
                return ( <ContactCard name={recents.name} mobile={recents.mobile} isFav= {recents.isFav}  id = {recents.id}/>)
            })}
        </div>
    )
}

export default Recent
