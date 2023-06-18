import { Box, Typography, Grid } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>

                    <Box className='box1'>
                        
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.instagram.com/alanismayraoliveira/" target="_blank">
                                <InstagramIcon className='redes' />                                                 
                            </a>
                            <a href="https://www.linkedin.com/in/alanis-mayra/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                        </Box>
                        <Box className="box2">
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom align="center" className="texto">brasil.generation.org</Typography>
                            </a>
                        </Box>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="texto2">© 2023</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;
