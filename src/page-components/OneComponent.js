import * as React from "react";
import { styled } from "@mui/material/styles";
import {Box,Button} from "@mui/material";
// import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "50%",
  maxHeight: "50%",
});

const OneComponent = () => {
  return (
    <Box px={5} mb={5} mt={0}>
      <Button variant="outlined" style={{ borderRadius:30}} >
     
        <ButtonBase sx={{ width: 50, height: 50 }}>
            <Img src="/img/abhishek.png" />
          </ButtonBase>
          <Box>
            <Box mt={2} >
              Abhishek Sharma
            </Box>
            <Box color="text.secondary">
              Abhishek21@twitter.com
            </Box>
            </Box><Button startIcon={<MoreHorizIcon />}></Button>
           </Button>
    </Box>
  );
};
export default OneComponent;
