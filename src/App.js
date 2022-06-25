import { useEffect } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./page-components/SideBar";
import OneComponent from "./page-components/OneComponent";
import MainSection from "./page-components/MainSection";
import HappeningSection from "./page-components/HappeningSection";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

function App() {
  useEffect(() => {
    document.title = "Twitter-Homepage";
  }, []);

  return (
    <div className="App">
      <>
      <Container>
        <NavBar />
        <Grid container spacing={2}>
          <Grid item xs={3}>
          <SideBar />
          <OneComponent />
          </Grid>
          <Grid item xs={6}>
          <MainSection />
          </Grid>
          <Grid item xs={3}>
             <HappeningSection />
          </Grid>
        </Grid></Container>

    
       
        
        
      </>
    </div>
  );
}

export default App;
