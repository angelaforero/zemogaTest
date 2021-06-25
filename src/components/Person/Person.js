import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ThumbUpIcon from '../../assets/icons/thumbUpIcon.png';
import ThumbDownAltIcon from '../../assets/icons/thumbDownIcon.png';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

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
  voteButton: {
    background: 'rgba(0, 0, 0, 0.6)',
    border: '1px solid #FFFFFF',
    boxSizing: 'border-box',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  whiteColor: {
    color: '#ffffff',
  },
}));

const Person = props => {
  const classes = useStyles ();
  const [thumb, setThumb] = useState ('');
  const [positiveVote, setPositiveVote] = useState ('');
  const [negativeVote, setNegativeVote] = useState ('');
  const [showVote, _setShowVote] = useState (false);
  const [msg, setmsg] = useState ('');
  const [voteButtonText, setVoteButtonText] = useState ('Vote Now!');

  useEffect (() => {
    percentageCalculation ();
    voteMsg ();
  }, []);

  const percentageCalculation = () => {
    let totalCuantity = props.data.votes.positive + props.data.votes.negative;
    setPositiveVote (
      Math.round (props.data.votes.positive * 100 / totalCuantity) + '%'
    );
    setNegativeVote (
      Math.round (props.data.votes.negative * 100 / totalCuantity) + '%'
    );
  };

  const voteMsg = val => {
    if (val === 'Up') {
      setVoteButtonText('Vote Again');
      setmsg ('Thank you for your vote!');
    } else {
      setmsg ('1 month ago in ' + props.data.cate);
    }
  };

  const descriptionToShow = props.data.description.substring (0, 60) + '...';

  const nameToShow = props.data.name.substring (0, 20) + '...';

  return (
    <div
      style={{
        backgroundImage: `url('/peopleImg/${props.data.picture}')`,
        width: 300,
        height: 300,
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: '70%',
        }}
      >
        <Grid container direction="row">
          <Box
            width={positiveVote}
            height="15%"
            display="flex"
            style={{
              backgroundColor: `rgba(60, 187, 180, 0.6)`,
              textAlign: 'left',
            }}
          >
            <img src={ThumbUpIcon} width="16px" height="16px" alt="ThumbUp" />
            <Typography className={classes.whiteColor} variant="h4">
              {positiveVote}
            </Typography>
          </Box>
          <Box
            width={negativeVote}
            height="15%"
            display="flex"
            style={{
              backgroundColor: `rgba(249, 173, 29, 0.6)`,
              textAlign: 'right',
            }}
          >
            <img
              src={ThumbDownAltIcon}
              width="16px"
              height="16px"
              alt="ThumbDown"
            />
            <Typography className={classes.whiteColor} variant="h4">
              {negativeVote}
            </Typography>
          </Box>
        </Grid>

      </div>

      <Grid container>
        <Grid container>
          <Grid item xs={3}>
            {showVote === true
              ? <Button
                  m={2}
                  size="small"
                  variant="contained"
                  className={
                    thumb === 'Up' ? classes.buttonUp : classes.buttonDown
                  }
                  onClick={() => {
                    setThumb ('Up');
                  }}
                  startIcon={
                    <img
                      src={thumb === 'Up' ? ThumbUpIcon : ThumbDownAltIcon}
                      width="16px"
                      height="16px"
                      alt="ThumbUp"
                    />
                  }
                />
              : ''}

          </Grid>
          <Grid item xs={9}>
            <Grid item xs={12}>
              <h1 className={classes.title}>{nameToShow}</h1>
              <h4 className={classes.subtitle}>
                {' '}{descriptionToShow}
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
                onClick={() => {
                  setThumb ('Up');
                }}
                startIcon={
                  <img
                    src={ThumbUpIcon}
                    width="16px"
                    height="16px"
                    alt="ThumbUp"
                  />
                }
              />
              <Button
                m={2}
                size="small"
                variant="contained"
                className={classes.buttonDown}
                onClick={() => {
                  setThumb ('Down');
                }}
                startIcon={
                  <img
                    src={ThumbDownAltIcon}
                    width="16px"
                    height="16px"
                    alt="ThumbDown"
                  />
                }
              />
              <Button
                mb={2}
                variant="outlined"
                className={` ${classes.voteButton} ${classes.whiteColor}`}
                onClick={() => {
                  voteMsg ('Up');
                  _setShowVote (true);
                }}
              >
                {voteButtonText}
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
};

Person.propTypes = {
  data: PropTypes.any.isRequired,
};

export default Person;
