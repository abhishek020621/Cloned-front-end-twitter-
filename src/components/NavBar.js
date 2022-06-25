// import { Grid, Container,Box, Button, Typography } from "@mui/material";
// import Toolbar from "@mui/material/Toolbar";
// import AppBar from "@mui/material/AppBar";
// import React from "react";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import IconButton from "@mui/material/IconButton";
// // import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';



import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { Button, Hidden } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import TextField from '@mui/material/TextField';


const NavBar = () => {
  return (
    
//     <AppBar style={{ background: '#0E86D4'}} position="fixed">
//       <Toolbar>
//         <Container sx={{ maxWidth:'100%'  }} >
//         <Grid container direction="row">
//           <Grid item xs={3}>
//             <Box><IconButton>
//               <TwitterIcon />
//             </IconButton></Box>
//           </Grid>
//           <Grid item xs={6}>
//           <Typography variant="h5" m={1} style={{ fontWeight: 800, fontSize:20}}>
//               Home
//             </Typography> </Grid>
//             <Grid item xs={3}>
//             {/* <Box textAlign={"right"}>
//       <IconButton type="submit" sx={{ p: '10px' }} ariaLabel={"search"}>
//         <SearchIcon />
//       </IconButton>
//       </Box></Grid></Grid> */}
//       <Box>
      
//         <Button  placeholder='Search Twitter' variant="contained"  style={{ borderRadius: 100,backgroundColor: "#231F20"}} startIcon={<SearchIcon />}>
//       Search Twitter
//       {/* <TextField  placeholder='Search Twitter' /> */}
//       </Button></Box>
      
      
//       </Grid></Grid></Container>
//       </Toolbar>
//     </AppBar>
//   );
// };

// {/* <div className={styles.container}>
// <Box>
//  <AppBar
//     // elevation={0}
//    position="fixed"
//    >
//    <Toolbar>

//    <Grid container spacing={0} sx={{ width: "100%" }}>
//    <Hidden mdDown>
//        <Grid item lg={3} md={3} sm={0} xs={0} sx={{ p: 1 }}>
//        <Box
//            width={"100%"}
//            display={"flex"}
//            alignItems={"center"}
//            sx={{ cursor: "pointer" }}>
//           <IconButton size='large' sx={{color:'white', ml:"120px"}}><TwitterIcon/></IconButton>
//        </Box>
//        </Grid>
//    </Hidden>
//    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ p: 1 }}>
//        <Box
//        width={"100%"}
//        display={"flex"}
//        alignItems={"center"}
//        justifyContent={"space-between"}
//        sx={{ cursor: "pointer" }}
//        >
//          <Button variant='text' sx={{color:'white', fontSize:"20px", fontWeight:'1000px'}}>Home</Button>
//        {/*Home      Icon*/}
//        </Box>
//    </Grid>
//    <Hidden mdDown>
//        <Grid item lg={3} md={3} sm={0} xs={0} sx={{ p: 1 }}>
//        <Box
//            width={"100%"}
//            display={"flex"}
//            alignItems={"center"}
//            sx={{ cursor: "pointer" }}
//        >
//            <InputLabel  variant='outlined' htmlFor="SearchIcon" sx={{color:'gray'}}>
//      Search
//    </InputLabel>
//    <Input variant='outlined'
//      id="SearchIcon"
//      startAdornment={
//        <InputAdornment position="start">
//          <SearchIcon />
//        </InputAdornment>
//      }
//    />
//            {/*search bar*/}
//        </Box>
//        </Grid>
//    </Hidden>
//    </Grid>
//    </Toolbar>
   
//    </AppBar>
// </Box>
// <home/>
 

// </div>
// )
// } */}

<div>
     <Box>
      <AppBar
         // elevation={0}
        position="fixed"
        sx={{bgcolor:'black', opacity:'0.85'}}
        >
        <Toolbar>

        <Grid container spacing={0} sx={{ width: "100%" }}>
        <Hidden mdDown>
            <Grid item lg={3} md={3} sm={0} xs={0} sx={{ p: 1 }}>
            <Box
                width={"100%"}
                display={"flex"}
                alignItems={"center"}
                sx={{ cursor: "pointer" }}>
               <IconButton size='large' sx={{color:'white', ml:"120px"}}><TwitterIcon/></IconButton>
            </Box>
            </Grid>
        </Hidden>
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ p: 1 }}>
            <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ cursor: "pointer" }}
            >
              <Button variant='text' sx={{color:'white', fontSize:"20px", fontWeight:'1000px'}}>Home</Button>
              <IconButton size='large' sx={{color:'white', mr:'112px'}}><AutoAwesomeOutlinedIcon/></IconButton>
            {/*Home      Icon*/}
            </Box>
        </Grid>
        <Hidden mdDown>
            <Grid item lg={3} md={3} sm={0} xs={0} sx={{ p: 1 }}>
            <Box
                width={"100%"}
                display={"flex"}
                alignItems={"center"}
                sx={{ cursor: "pointer" }}

            >
                <TextField
        id="input-with-icon-textfield"
        label="Search"
        sx={{color:'gray', borderRadius:'20px'}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{color:'gray'}}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        
      />
                {/*search bar*/}
            </Box>
            </Grid>
        </Hidden>
        </Grid>
        </Toolbar>
        
        </AppBar>
    </Box>
    </div>
  )
}


export default NavBar;
