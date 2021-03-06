import React from "react";
import {Container, Grid, Box, Link} from "@material-ui/core";
import "./footer.css";
import img from "./../../images/pngLetraNegraBorde.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";



export default function Footer() {

  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="white"
        color="black"
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Box>
                <Link href="/home" color="inherit">
                  <img
                    style={{ width: "100px", margin: "-20px auto -20px auto" }}
                    src={img}
                    alt="logo"
                  />
                </Link>
              </Box>
              <div className="social" style={{ margin: "auto auto" }}>
                <Link href="/home" color="inherit">
                  <AiFillFacebook />
                </Link>

                <Link href="/home" color="inherit">
                  <AiFillInstagram />
                </Link>
                <Link href="/home" color="inherit">
                  <AiFillTwitterSquare />
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>Informacion</Box>
              <Box>
                <Link href="/respuestas" color="inherit">
                  Preguntas Frecuentes.
                </Link>
              </Box>
              <br />
              <Box>
                <Link href="/privacidad" color="inherit">
                  Politicas de privacidad.
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>Emprende con nosotros</Box>

              <Box>
                <Link href="/contact" color="inherit">
                  Vende con nosotros
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>Ayuda</Box>
              <Box>
                <Link href="/support" color="inherit">
                  Soporte.
                </Link>
              </Box>
            </Grid>
          </Grid>
          <div className="detalle">
            2021 Tukiteck | All rights reserved | Terms Of Service | Privacy
          </div>
        </Container>
      </Box>
    </footer>
  );
}
