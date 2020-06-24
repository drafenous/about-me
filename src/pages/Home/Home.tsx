import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Container,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import moment from "moment";

import SkillComponent from './components/SkillsComponent';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
      width: '50vh'
    },

    divisor: {
      marginTop: '25px',
      marginBottom: '0px'
    },

    divisorIcon: {
      textAlign: 'center',
      display: 'block',
      width: '60px',
      lineHeight: '50px',
      marginTop: '0px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '0px',
      borderRadius: '100%',
      border: '5px solid #fff',
      boxShadow: '0px 5px 5px #BDC3C7',
      transform: 'translateY(-80%)',
      transition: 'all 400ms ease-in-out',
      '&$purple': {
        backgroundColor: '#8e44ad',
        '&:hover': {
          backgroundColor: '#9b59b6'
        },
      },
      '&$red': {
        backgroundColor: '#e74c3c',
        '&:hover': {
          backgroundColor: '#c0392b'
        }
      }
    },
    purple: {},
    red: {}
  }),
);

const Home = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "95vh" }}
      >
        <Grid item>
          <Card className={classes.root}>
            <CardContent>
              <Typography>
                <strong>Name:</strong> Rodrigo R. Almeida
              </Typography>
              <Typography>
                <strong>Age:</strong>{" "}
                {moment().diff(moment("1993-11-26"), "years")}
              </Typography>
            </CardContent>

            <Divider className={classes.divisor} />

            <CardContent>
              <div className={`${classes.divisorIcon} ${classes.red}`} >
                <FontAwesomeIcon icon={faCode} color="white" />
              </div>
              <SkillComponent/>
              {/* <Grid container direction="row" justify="center" alignItems="center" style={{textAlign: 'center'}}>
                <Grid item xs={3} style={{marginBottom: '50px'}}>
                  <FontAwesomeIcon icon={faReact} color="#2c3e50" size="3x" />
                </Grid>
                <Grid item xs={3} style={{marginBottom: '50px'}}>
                  <FontAwesomeIcon icon={faAngular} color="#2c3e50" size="3x" />
                </Grid>
                <Grid item xs={3} style={{marginBottom: '50px'}}>
                  <FontAwesomeIcon icon={faVuejs} color="#2c3e50" size="3x" />
                </Grid>
                <Grid item xs={3} style={{marginBottom: '50px'}}>
                  <FontAwesomeIcon icon={faNodeJs} color="#2c3e50" size="3x" />
                </Grid>
                <Grid item xs={3} style={{marginBottom: '50px'}}>
                  <FontAwesomeIcon icon={faLaravel} color="#2c3e50" size="3x" />
                </Grid>
                <Grid item xs={3} style={{marginBottom: '50px'}}>
                  <FontAwesomeIcon icon={faJs} color="#2c3e50" size="3x" />
                </Grid>
                <Grid item xs={3} style={{marginBottom: '50px'}}>
                  <FontAwesomeIcon icon={faHtml5} color="#2c3e50" size="3x" />
                </Grid>
                <Grid item xs={3} style={{marginBottom: '50px'}}>
                  <FontAwesomeIcon icon={faCss3} color="#2c3e50" size="3x" />
                </Grid>
              </Grid> */}
            </CardContent>

            <Divider className={classes.divisor} />

            <CardContent>
              <div className={`${classes.divisorIcon} ${classes.purple}`} >
                <FontAwesomeIcon icon={faThumbsUp} color="white" />
              </div>
              <Grid container direction="row" justify="center" alignItems="center" style={{textAlign: 'center'}}>
                <Grid item xs={4}>
                  <FontAwesomeIcon icon={faGithub} color="#2c3e50" size="3x" />
                </Grid>
                <Grid item xs={4}>
                  <FontAwesomeIcon icon={faTwitter} color="#2c3e50" size="3x" />
                </Grid>
                <Grid item xs={4}>
                  <FontAwesomeIcon icon={faLinkedin} color="#2c3e50" size="3x" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
