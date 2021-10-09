import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link";
import './footer.css'


export default function Footer() {
    return  <footer>
        <Box px={{xs: 3, sm:10}}
             py={{xs: 5, sm:10}}
             bgcolor="white" color="black">
            <Container  maxWidth="lg">
                 <Grid container spacing={5}>
                         <Grid item xs={12} sm={4}>
                         <Box borderBottom={1}>Informacion</Box>
                         <Box>
                         <Link href='/respuestas' color="inherit">
                             Preguntas Frecuentes
                        </Link>
                         </Box>
                         <Box>
                         <Link href='/privacidad' color="inherit">
                            Politicas de privacidad
                         </Link>
                         </Box>
                         </Grid> 
                         <Grid item xs={12} sm={4}>
                         <Box borderBottom={1}>Nosotros</Box>
                         <Box >
                         <Link href='/wishList' color="inherit">
                             Favoritos
                         </Link>  
                         </Box>
                         <Box>
                         <Link href='/contacto' color="inherit">
                          Vende con nosotros!
                        </Link>
                         </Box>
                         </Grid>
                         <Grid item xs={12} sm={4}>
                         <Box borderBottom={1}>Ayuda</Box>
                         <Box >
                         <Link href='/contact' color="inherit">
                             Soporte
                         </Link>  
                         </Box>
                         </Grid>
                    </Grid>
                 <div className="detalle" >
                   2021 Tukiteck | All rights reserved | Terms Of Service | Privacy
                 </div>
            </Container>
        </Box>
    </footer>
    }
