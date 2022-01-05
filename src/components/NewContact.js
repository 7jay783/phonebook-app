import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from 'react-redux';
import { changeEmail,changeName, changeMobile, new_contact } from '../actions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = useSelector(state => state.newContact)
  const dispatch = useDispatch()
  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClick={handleOpen}
      >
       
      </SpeedDial>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={ {textAlign:'center'}}>
        
        <h2>New Contact</h2>
      <TextField id="outlined-basic" label="Name" variant="outlined" value={data.name} onChange={e=>dispatch(changeName(e.target.value))} />
      <br/>
      <br/>
      <TextField id="outlined-basic" label="Mobile No" variant="outlined" value={data.mobile} onChange={e=>dispatch(changeMobile(e.target.value))}/>
      <br/><br/>
      <TextField id="outlined-basic" label="Email ID" variant="outlined" value={data.email} onChange={e=>dispatch(changeEmail(e.target.value))}/>
       <br/><br/>
       <Button variant="contained"
                 onClick={()=>{
                   dispatch(new_contact(data))
                    handleClose()
                  }
                }
                 
       >Save</Button>
     
   
        </Box>
      </Modal>
    </div>
  );
}
