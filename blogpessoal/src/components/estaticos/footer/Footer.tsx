import { Box, Typography, Grid } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>

                    <Box style={{ backgroundColor: " #AD8566ff", height: "170px" }}>
                        
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.instagram.com/alanismayraoliveira/" target="_blank">
                                <InstagramIcon style={{ fontSize: 50, color: "#341911ff" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/alanis-mayra/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 50, color: "#341911ff" }} />
                            </a>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "#341911ff" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#341911ff" }}>© 2023</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;
