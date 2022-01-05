import {useState} from 'react';


import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Recent from './components/Recent';
import AllContacts from './components/AllContacts';
import Favorite from './components/Favorites'
import { createStore } from 'redux';
import allReducers from './reducer';
import { Provider } from 'react-redux';
import NewContact from "./components/NewContact";
const store = createStore(allReducers)
export default function App() {
  const [value, setValue] = useState(1);
 
  return (
    <Provider store={store}>
    <Box sx={{ width: 400, margin:'auto' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="All Contacts" icon={<PersonIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        
      </BottomNavigation>
      {(value === 0)&& <Recent/>}
      {(value === 1)&& <AllContacts/>}
      {(value === 2)&& <Favorite/>}
    </Box>
    
      <NewContact/>
    </Provider>
  );
}


