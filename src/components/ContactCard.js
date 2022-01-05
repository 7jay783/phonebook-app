import React from 'react'
import Rating from '@mui/material/Rating';

import Avatar from '@mui/material/Avatar';
import CallIcon from '@mui/icons-material/Call';
import { toggle_fav, addRecent } from '../actions';
import { useDispatch } from 'react-redux';

const styles ={
    container:{
        display: 'flex',
    height:' 60px',
    padding: '8px',
    margin:"5px 0px 5px 0px",    
    alignItems:'center'
    

    },
    infoContainer:{
                flex:'1',
              paddingLeft:"8px",
              paddingRight:"8px",
              lineHeight:"1.1"
    },
    mobile:{
        fontSize:"12px",
        color:"#777"
    },
    callicon:{
        marginLeft:"8px"
    }
}
function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  
function ContactCard(props) {
    const dispatch = useDispatch();
    return (
        <div style={styles.container}>
            
            <div ><Avatar {...stringAvatar(props.name)} /></div>
            <div style={styles.infoContainer}>{props.name}
                 <br/>
                 <span style={styles.mobile}>{props.mobile}</span>
               
            </div>
            <div> 
              <Rating
        name="simple-controlled"
        value={props.isFav}
        max={1}
        onChange={() => {
        //   setValue(event );
        dispatch(toggle_fav(props.id))        
        }}
      />
      </div>
            <div style={styles.callicon}><CallIcon 
            onClick={()=>{
              
              dispatch(addRecent(props.id))
            }}
            ></CallIcon></div>
           
        </div>
    )
}

export default ContactCard
