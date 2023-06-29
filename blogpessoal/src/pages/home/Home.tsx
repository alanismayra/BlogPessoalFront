import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css';
import { Box, Button, Grid, Typography } from "@mui/material";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokenReducer';
import { toast } from 'react-toastify';

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state)=> state.tokens
    );// acessa o store, pega o token e atribui a const token

    
    useEffect(() => {
      if (token == "") {
          toast.error("Você precisa estar logado",{
                position:'top-right',
                autoClose:2000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:false,
                draggable:false,
                theme: 'colored',
                progress:undefined     
            });
          navigate("/login")
  
      }
  }, [token])

    const items = [

        <div className="item" data-value="1" >
            <img src="./images/img5.jpg" width={1490} height={500} />
        </div>,
        <div className="item" data-value="1" >
            <img src="./images/img6.jpg" width={1490} height={500} />
        </div>,
         <div className="item" data-value="1" >
            <img src="./images/img5.jpg" width={1490} height={500} />
        </div>,
         <div className="item" data-value="1" >
            <img src="./images/img6.jpg" width={1490} height={500} />
        </div>
    ]

    return (
        <>
            <div className='App'>
                <AliceCarousel
                    autoHeight
                    infinite
                    mouseTracking
                    items={items}
                />
            </div>

            <Grid container direction="row" justifyContent="Center" alignItems="center" className='caixa' >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={5} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Conte aqui seus sonhos e momentos mais felizes!</Typography>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box marginRight={1}>
                            <ModalPostagem/>
                        </Box>
                        <Link to="/posts">
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                
                <Grid xs={12} className="postagens">
                    <TabPostagem />
                </Grid>
            </Grid>

        </>
    );
}

export default Home;