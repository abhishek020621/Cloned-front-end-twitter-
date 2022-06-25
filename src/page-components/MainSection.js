import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Button } from "@mui/material";
// import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconButton from '@mui/material/IconButton';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "50%",
  maxHeight: "50%",
});

const MainSection = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >

<Box
          sx={{mt:'50px',
          height:'150px'}}>
              <Box display={'flex'}>
              <ButtonBase sx={{ width: 50, height: 50 }}>
                <Img src="/img/abhishek.png" />
              </ButtonBase>
                <Box sx={{color:'gray', fontSize:'30px', mt:'70px', ml:'15px'}}>What's happening?</Box>
              </Box>
              <Box sx={{mt:'25px', ml:"40px", display:'flex'}}>
                <IconButton sx={{color:'lightblue'}}><ImageOutlinedIcon/></IconButton>
                <IconButton sx={{color:'lightblue'}}><GifBoxOutlinedIcon/></IconButton>
                <IconButton sx={{color:'lightblue'}}><PollOutlinedIcon/></IconButton>
                <IconButton sx={{color:'lightblue'}}><SentimentSatisfiedAltOutlinedIcon/></IconButton>
                <IconButton sx={{color:'lightblue'}}><CalendarMonthOutlinedIcon/></IconButton>
                <IconButton sx={{color:'lightblue'}}><LocationOnOutlinedIcon/></IconButton>
                <Button variant='contained' sx={{ml:"30%", borderRadius:'70px'}}>Tweet</Button>
              </Box>
          </Box>
     




      <Box sx={{ overflowY: "scroll" }}>
        <Box px={10} mt={1}>
          <Grid container spacing={2}>
            <Grid mt={2} px={1} item spacing={1}>
              <ButtonBase sx={{ width: 50, height: 50 }}>
                <Img src="/img/abhishek.png" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item direction="row" spacing={1}>
                <Grid item xs>
                  <Box mt={5} variant="body2" gutterBottom>
                    Abhishek Sharma
                  </Box>
                  <Box variant="body2" color="text.secondary">
                    
                    #Tweet by Abhishek
                  </Box>
                  <Box variant="body2" color="text.secondary">
                    
                    “When you meet people, show real appreciation, then genuine
                    curiosity.”
                  </Box>
                  <Button startIcon={<MoreHorizIcon />}> </Button>
                  <Box sx={{ borderRadius: "500%" }}>
                    <Img src="/img/place.png" />
                  </Box>
                  <Box>
                <Button variant='text'  startIcon = {<ChatBubbleOutlineIcon/>}>4215</Button>
                <Button  variant='text' startIcon = {<AutorenewOutlinedIcon/>}>5235</Button>
                <Button  variant='text' startIcon = {<FavoriteBorderOutlinedIcon/>}>65.5k</Button>
                <IconButton><FileUploadOutlinedIcon/></IconButton>
              </Box>
                </Grid>
              </Grid>
            </Grid>


<Box>
            <Grid mt={2} px={1} item spacing={10}>
                    <ButtonBase sx={{ width: 50, height: 50 }}>
                   
                     <Img src="/img/abhishek.png" />
                     </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item direction="row" spacing={1}>
                      <Grid item xs>
                        <Box mt={2} variant="body2" gutterBottom>
                          Abhishek Sharma
                        </Box>
                        <Box variant="body2" color="text.secondary">
                         #Tweet by Abhishek 
                        </Box>
                        <Box variant="body2" color="text.secondary">
                        “When you meet people, show real appreciation, then genuine curiosity.”
                        </Box>
                        <Button startIcon={<MoreHorizIcon />}></Button>
                        <Box sx={{ borderRadius: '500%' }}>
                        <Img src="/img/tweet.png" />
                      </Box>
                      <Box>
                <Button variant='text'  startIcon = {<ChatBubbleOutlineIcon/>}>4215</Button>
                <Button  variant='text' startIcon = {<AutorenewOutlinedIcon/>}>5235</Button>
                <Button  variant='text' startIcon = {<FavoriteBorderOutlinedIcon/>}>65.5k</Button>
                <IconButton ><FileUploadOutlinedIcon/></IconButton>
              </Box>
                        </Grid>
                    </Grid></Grid></Box>
                   <Box>
                    <Grid mt={2} px={1} item spacing={10}>
                    <ButtonBase sx={{ width: 50, height: 50 }}>
                   
                     <Img src="/img/abhishek.png" />
                     </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item direction="row" spacing={1}>
                      <Grid item xs>
                        <Box mt={2} variant="body2" gutterBottom>
                          Abhishek Sharma
                        </Box>
                        <Box variant="body2" color="text.secondary">
                         #Tweet by Abhishek 
                        </Box>
                        <Box variant="body2" color="text.secondary">
                        “When you meet people, show real appreciation, then genuine curiosity.”
                        </Box>
                        <Button startIcon={<MoreHorizIcon />}></Button>
                        <Box sx={{ borderRadius: '500%' }}>
                        <Img src="/img/cycle.png" />
                      </Box>
                      <Box>
                <Button variant='text'  startIcon = {<ChatBubbleOutlineIcon/>}>4215</Button>
                <Button  variant='text' startIcon = {<AutorenewOutlinedIcon/>}>5235</Button>
                <Button  variant='text' startIcon = {<FavoriteBorderOutlinedIcon/>}>65.5k</Button>
                <IconButton ><FileUploadOutlinedIcon/></IconButton>
              </Box>
                        </Grid>
                    </Grid></Grid></Box> 


                  <Box>
                    <Grid mt={2} px={1} item spacing={10}>
                    <ButtonBase sx={{ width: 50, height: 50 }}>
                   
                     <Img src="/img/abhishek.png" />
                     </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item direction="row" spacing={1}>
                      <Grid item xs>
                        <Box mt={2} variant="body2" gutterBottom>
                          Abhishek Sharma
                        </Box>
                        <Box variant="body2" color="text.secondary">
                         #Tweet by Abhishek 
                        </Box>
                        <Box variant="body2" color="text.secondary">
                        “When you meet people, show real appreciation, then genuine curiosity.”
                        </Box>
                        <Button startIcon={<MoreHorizIcon />}></Button>
                        <Box sx={{ borderRadius: '500%' }}>
                        <Img src="/img/optimistic.png" />
                      </Box>
                      <Box>
                <Button variant='text'  startIcon = {<ChatBubbleOutlineIcon/>}>4215</Button>
                <Button  variant='text' startIcon = {<AutorenewOutlinedIcon/>}>5235</Button>
                <Button  variant='text' startIcon = {<FavoriteBorderOutlinedIcon/>}>65.5k</Button>
                <IconButton ><FileUploadOutlinedIcon/></IconButton>
              </Box>
                        </Grid>
                    </Grid></Grid></Box>

                    <Box>
                    <Grid mt={2} px={1} item spacing={10}>
                    <ButtonBase sx={{ width: 50, height: 50 }}>
                   
                     <Img src="/img/abhishek.png" />
                     </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item direction="row" spacing={1}>
                      <Grid item xs>
                        <Box mt={2} variant="body2" gutterBottom>
                          Abhishek Sharma
                        </Box>
                        <Box variant="body2" color="text.secondary">
                         #Tweet by Abhishek 
                        </Box>
                        <Box variant="body2" color="text.secondary">
                        “When you meet people, show real appreciation, then genuine curiosity.”
                        </Box>
                        <Button startIcon={<MoreHorizIcon />}></Button>
                        <Box sx={{ borderRadius: '500%' }}>
                        <Img src="/img/quote.png" />
                      </Box>
                      <Box>
                <Button variant='text'  startIcon = {<ChatBubbleOutlineIcon/>}>4215</Button>
                <Button  variant='text' startIcon = {<AutorenewOutlinedIcon/>}>5235</Button>
                <Button  variant='text' startIcon = {<FavoriteBorderOutlinedIcon/>}>65.5k</Button>
                <IconButton ><FileUploadOutlinedIcon/></IconButton>
              </Box>
                        </Grid>
                    </Grid></Grid></Box>



          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};
export default MainSection;
