import React from "react";
import {Button, Paper, Box} from '@material-ui/core'
import './Home.css';

function Home() {
return(
    <>
    <Paper>
        <Box p={2}>
            <Box display="flex" justifyContent="center">
                <h1>Título</h1>
            </Box>
            <img src="./images/vesgo2.jpg" alt="" style={{width:"100%", height:"100%"}} />
            <Box display="flex" justifyContent="center" p={2}>
                <Button variant="contained" color="primary"> Vesgueiro </Button>
                <Button variant="contained" color="secondary"> Vesgueiro </Button>
            </Box>
        </Box>
    </Paper>
    </>
)
}

export default Home;