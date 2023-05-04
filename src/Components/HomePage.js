import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RightMenuBar from './RightMenuBar';
import { BuildOutlined, BusinessOutlined, HomeOutlined, NoteAltOutlined, PeopleAltOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { ReactSVG } from "react-svg";
import { TitleUserWrapper } from '../Assets/StyledComponents/AlocateStyles';


const drawerWidth = 275;

  const Icon = (i,type) =>{
    if(i === 'usericon-0' && type === 2) return(<Avatar alt="Remy Sharp" src="../Images/userlogo.svg" />)
    if(i === 'usericon-1' && type === 2) return(<ReactSVG src="../Images/userprivilage.svg"  />)
    if(i === 'usericon-2' && type === 2) return(<ReactSVG src="../Images/profile.svg"  />)
    if(i === 'usericon-3' && type === 2) return(<ReactSVG src="../Images/logout.svg"  />)
    switch(i){
      case 'icon-0' : return <HomeOutlined style={{color:'#FFF'}} />; 
      case 'icon-1' : return <NoteAltOutlined style={{color:'#FFF'}} />; 
      case 'icon-2' : return <BusinessOutlined style={{color:'#FFF'}} />;
      case 'icon-3' : return <PeopleAltOutlined style={{color:'#FFF'}} />; 
      case 'icon-4' : return <BuildOutlined style={{color:'#FFF'}} />;
      default : <></>;
    }
  }



export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex',backgroundColor:'#E4E4E4' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#3344FF',
            borderRadius: '0px 20px 20px 0px',
            color: '#FFF'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <TitleUserWrapper>
            <img src='../Images/logo.png' alt='logo' />
        </TitleUserWrapper>
        <Divider />
        <List>
          {['Dashboard', 'Gig Execution', 'Companies', 'Giggers', 'Gig Config'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {Icon(`icon-${index}`,1)}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List style={{marginTop:'auto'}}>
          {['Admin@gigchain.ai', 'Users & Previliges', 'Profile & Settings', 'Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon style={index?{paddingLeft:'7.4px'}:{}}>
                  {Icon(`usericon-${index}`,2)}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#F9F9F9',minHeight:'100vh', p: 3 }}
      >
        <RightMenuBar/>
      </Box>
    </Box>
  );
}