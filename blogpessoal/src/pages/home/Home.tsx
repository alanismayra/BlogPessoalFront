

import './Home.css';
import { Box, Button, Grid, Typography } from "@mui/material";

function Home() {
return(
    <>
   <Grid container direction="row" justifyContent="Center" alignItems="center" style={{backgroundColor: "#AD8566ff"}}>
    <Grid alignItems="center" item xs={6}>
        <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{color: "#341911ff", fontWeight:'bold'}}>Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{color: "#341911ff", fontWeight:'bold'}}>Conte aqui seus sonhos e momentos mais felizes!</Typography>
        </Box>
        <Box display='flex' justifyContent='center'>
            <Box marginRight={1}>
                </Box>
                <Button variant="outlined" style={{ borderColor: '#341911ff', backgroundColor: "#AD8566ff", color: "#341911ff"}}>Ver Postagens</Button>
                </Box>
                </Grid>
                <Grid item xs={3} >
                    <img src="./images/agrvai.jpg" alt="" width="500px" height="500px" margin-bottom="1.5"/>
                </Grid>
                <Grid xs={12} style={{ backgroundColor:"white"}}>
                </Grid>
                </Grid>

    </>
)
}

export default Home;