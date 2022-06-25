import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Box} from "@mui/material";

 const SideBar = () => {
  return (
    <Box py={15}>
       
    <Stack direction="column" spacing={2}>
    <Box m={5} pt={5}>
      <Button variant="outlined" style={{ borderRadius: 100 }} startIcon={<HomeIcon />}>
        Home
      </Button>
      <Button variant="outlined" style={{ borderRadius: 100 }} startIcon={<TagIcon />}>
        Explore
      </Button>
      <Button variant="outlined" style={{ borderRadius: 100 }} startIcon={<NotificationsNoneIcon />}>
        Notification
      </Button>
      <Button variant="outlined" style={{ borderRadius: 100 }} startIcon={<MailOutlineIcon />}>
        Messages
      </Button>
      <Button variant="outlined" style={{ borderRadius: 100 }} startIcon={<PersonIcon />}>
        Profile
      </Button>
      <Button variant="outlined"  mt={1} style={{ borderRadius: 100 }} startIcon={<MoreHorizIcon />}>
        Learn More
      </Button></Box>
      <Button variant='contained' sx={{ml:"30%", borderRadius:'70px'}}>Tweet</Button>
      
    </Stack></Box>
  );
}
  
    export default SideBar;

