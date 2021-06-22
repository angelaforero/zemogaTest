import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import personData from '../../assets/data.json'
import kanye from '../../assets/peopleImg/kanye.png'

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
    textAlign: 'left',
  },
}));

const styles = {
  paperContainer: {
    backgroundImage: `url(${kanye}})`,
    width: 300,
    height: 300,
    backgroundSize: 'cover',
  },
  green: {
    backgroundColor: '#3CBBB4',
  },
  yellow: {
    backgroundColor: '#F9AD1D',
  },
};

function Person () {
  const classes = useStyles ();

  return (
    <Paper style={styles.paperContainer}>
      <Grid container>

        <Grid container>
          <Grid item xs={3}>
            <Button
              pt={3}
              spacing={1}
              variant="contained"
              className={classes.button}
              startIcon={<ThumbUpIcon />}
            />
          </Grid>
          <Grid item xs={9}>
            <Grid item xs={12}>
              <h1 className={classes.title}>{personData.data[0].name}</h1>
              <h4 className={classes.subtitle}> {personData.data[0].description}</h4>
              <p className={classes.msg}>1 month ago in {personData.data[0].cate}</p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Button
                spacing={1}
                variant="contained"
                className={classes.button}
                startIcon={<ThumbUpIcon />}
              />
              <Button
                spacing={1}
                variant="contained"
                className={classes.button}
                startIcon={<ThumbDownAltIcon />}
              />
              <Button variant="outlined">Vote Now!</Button>
            </Grid>
          </Grid>
          <Box width="75%" style={{backgroundColor: '#3CBBB4'}}>%</Box>
          <Box width="25%" style={{backgroundColor: '#F9AD1D'}}>%</Box>

        </Grid>
      </Grid>
    </Paper>
  );
}

export default Person;
