import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ThumbUpIcon from '../../assets/icons/thumbUpIcon.png';
import ThumbDownAltIcon from '../../assets/icons/thumbDownIcon.png';
import personData from '../../assets/data.json';
import kanye from '../../assets/peopleImg/kanye.png';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles (theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    '& > *': {
      margin: theme.spacing (1),
    },
  },
  paper: {
    padding: theme.spacing (2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontSize: 30,
    textAlign: 'left',
  },
  subtitle: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontSize: 15,
    textAlign: 'left',
  },
  msg: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontSize: 12,
    textAlign: 'center',
  },
  buttonUp: {
    background: '#FBBD4A',
    margin: 5,
  },
  buttonDown: {
    background: 'rgba(60, 187, 180, 0.8)',
    margin: 5,
  },
  voteButton:{
    background: 'rgba(0, 0, 0, 0.6)',
    border: '1px solid #FFFFFF',
    boxSizing: 'border-box'
  }
}));

const styles = {
  paperContainer: {
    backgroundImage: `url(${kanye})`,
    width: 300,
    height: 300,
    backgroundSize: 'cover',
  },
};

function Person () {
  const classes = useStyles ();
  const [positiveVote, setPositiveVote] = useState ('');
  const [negativeVote, setNegativeVote] = useState ('');
  const [showVote, _setShowVote] = useState (false);
  const [msg, setmsg] = useState ('');

  useEffect (() => {
    percentageCalculation();
    voteMsg();
  }, []);

  const percentageCalculation = () => {
    let totalCuantity =
      personData.data[0].votes.positive + personData.data[0].votes.negative;
    setPositiveVote (Math.round(personData.data[0].votes.positive * 100 / totalCuantity)+'%');
    setNegativeVote (Math.round(personData.data[0].votes.negative * 100 / totalCuantity)+'%');
  };

  const voteMsg = val => {
    if (val === 'Up') {
      setmsg ('Thank you for your vote!');
    } else {
      setmsg ('1 month ago in ' + personData.data[0].cate);
    }
  };

  return (
    <Paper style={styles.paperContainer}>
      <Grid container>
        {/*   <img src={kanye} /> */}
        <Grid container>
          <Grid item xs={3}>
            {showVote === true
              ? <Button
                  m={2}
                  size="small"
                  variant="contained"
                  className={classes.buttonUp}
                  startIcon={<img src={ThumbUpIcon} alt="ThumbUp" />}
                />
              : ''}

          </Grid>
          <Grid item xs={9}>
            <Grid item xs={12}>
              <h1 className={classes.title}>{personData.data[0].name}</h1>
              <h4 className={classes.subtitle}>
                {' '}{personData.data[0].description}
              </h4>
              <p className={classes.msg}>
                {msg}
              </p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item mb={2} xs={12}>
              <Button
                m={2}
                size="small"
                variant="contained"
                className={classes.buttonUp}
                startIcon={<img src={ThumbUpIcon} alt="ThumbUp" />}
              />
              <Button
                m={2}
                size="small"
                variant="contained"
                className={classes.buttonDown}
                startIcon={<img src={ThumbDownAltIcon} alt="ThumbDown" />}
              />
              <Button
                mb={2}
                variant="outlined"
                className={classes.voteButton}
                onClick={() => {
                  voteMsg ('Up');
                  _setShowVote (true);
                }}
              >
                Vote Now!
              </Button>
            </Grid>
          </Grid>
          <Box
            width= {positiveVote}
            height="15%"
            display="flex"
            style={{backgroundColor: '#3CBBB4', textAlign: 'left'}}
          >
            <img src={ThumbUpIcon} alt="ThumbUp" /><Typography variant="h4">
              {positiveVote}
            </Typography>
          </Box>
          <Box
            width= {negativeVote}
            height="15%"
            display="flex"
            style={{backgroundColor: '#F9AD1D', textAlign: 'right'}}
          >
            <img src={ThumbDownAltIcon} alt="ThumbDown" />
            <Typography variant="h4">
              {negativeVote}
            </Typography>
          </Box>

        </Grid>
      </Grid>
    </Paper>
  );
}

export default Person;
