import React from "react";
import styled from "styled-components";
import logoimg from "./../assets/logo.png";
import Information from "./../assets/information.png";
import Questions from "./../assets/questions.png";
import Said from "./../assets/said.png";
import Tabs from "../components/tab";
import {
  Box,
  Container as MuiContainer,
  Grid,
  Typography,
  Divider,
  Card as MuiCard,
  CardContent,
  CardMedia,
} from "@mui/material";

const Wrapper = styled.div`
  background: #f0ebf8;
  box-shadow: inset 2px -10px 5px 0px rgb(0 0 0 / 11%);
  margin: 60px auto 30px;
  border-radius: 30px;
  max-width: 1920px;
`;

const Logo = styled.div`
  width: 30%;
  height: auto;
  background-color: #fff;
  border-radius: 0 50px 50px 0;
  img {
    max-width: 100%;
  }
`;

const Container = styled(MuiContainer)`
  padding: 20px;
`;

const Hr = styled.div`
  margin-top: 60px;
  margin-bottom: 16px;
  text-align: center;
  span {
    color: #000000;
    font-size: 30px;
    background-color: #f0ebf8;
    padding: 15px;
  }
  :after {
    content: "";
    height: 2px;
    width: 100%;
    background: #707070;
    display: block;
    margin-top: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Col = styled.div`
  width: 30%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

const Card = styled.div`
  background: #ffffff;
  box-shadow: 6px 0px 6px 0px rgba(0, 0, 0, 0.16);
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 60px;
    }
  }
  h2 {
    font-size: 24px;
    color: #707070;
    font-weight: normal;
    text-align: center;
    margin: 0;
    margin-top: 20px;
    max-width: 90%;
  }
`;

const Home = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Logo>
          <img src={logoimg} alt="logo" />
        </Logo>
        <Container maxWidth="lg">
          <Tabs />
          <Box sx={{ mt: 5 }}>
            <Divider variant="middle" />
          </Box>
          <Box sx={{ mt: 6 }}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 320 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Information}
                    alt="information"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Just put in your information
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 320 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Questions}
                    alt="questions"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Answer the questions as best as you can
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 320 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Said}
                    alt="said"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Take a look back at what you said
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default Home;
