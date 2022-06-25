import * as React from "react";
//import { styled } from "@mui/material/styles";
import {Box,Button, Typography} from "@mui/material";
// import Typography from "@mui/material/Typography";
//import ButtonBase from "@mui/material/ButtonBase";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// const Img = styled("img")({
//   margin: "auto",
//   display: "block",
//   maxWidth: "50%",
//   maxHeight: "50%",
// });


const HappeningSection = () => {
  return (
  
  
    <Box px={10} mt={1}>

      
      <Typography mt={10} style={{ fontWeight: 800, fontSize:20}} variant="body2">
              What's Happening ? 
            </Typography>
        
        
            <Box mt={2} variant="body2">
            India national news·LIVE
            </Box>
            <Box variant="body2" color="text.secondary">
            Enforcement Directorate continues questioning Rahul Gandhi
            </Box>
            <Box variant="body2" color="text.secondary">
            123.1k tweets
            </Box>
            <Button startIcon={<MoreHorizIcon />}></Button>
            <Box mt={2} variant="body2">
              Bussiness World
            </Box>
            <Box variant="body2" color="text.secondary">
              The Latest from World Bussiness..
            </Box>
            <Box variant="body2" color="text.secondary">
           366k tweets
            </Box>
            <Button startIcon={<MoreHorizIcon />}></Button>
            <Box mt={2} variant="body2">
              War Update
            </Box>
            <Box variant="body2" color="text.secondary">
              Get the latest update about War..
            </Box>
            <Box variant="body2" color="text.secondary">
           345k tweets
            </Box>
            <Button startIcon={<MoreHorizIcon />}></Button>
            <Box mt={2} variant="body2">
              Covid-19 Updates
            </Box>
            <Box variant="body2" color="text.secondary">
              Get the latest stats about covid-19
            </Box>
            <Box variant="body2" color="text.secondary">
           450k tweets
            </Box>
            <Button startIcon={<MoreHorizIcon />}></Button>
            <Box>
            <Button variant="outlined"  endIcon={<MoreHorizIcon />}>
            Show More</Button>
                {/* <Button startIcon={<MoreHorizIcon />}>
                 
                </Button> */}
            </Box>
            
            
    </Box>

  )
}
    export default HappeningSection;