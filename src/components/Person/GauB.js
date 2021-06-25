import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ThumbUpIcon from '../../assets/icons/thumbUpIcon.png';
import ThumbDownAltIcon from '../../assets/icons/thumbDownIcon.png';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Styles from '../../styles/useStyles';

/** Medidor en porcetaje de votaciones Gauge Bar*/
const GaugeBar = props => {
  const classes = Styles ();
  return (
    <Grid container direction="row">
      <Box
        width={props.positive}
        height="15%"
        display="flex"
        style={{
          backgroundColor: `rgba(60, 187, 180, 0.6)`,
          textAlign: 'left',
        }}
      >
        <img src={ThumbUpIcon} width="16px" height="16px" alt="ThumbUp" />
        <Typography className={classes.whiteColor} variant="h4">
          {props.positive}
        </Typography>
      </Box>
      <Box
        width={props.negative}
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
          {props.negative}
        </Typography>
      </Box>
    </Grid>
  );
};
/** Recibe informacion de porcentajes calculados desde componente padre Person*/
GaugeBar.propTypes = {
  positive: PropTypes.string.isRequired,
  negative: PropTypes.string.isRequired,
};

export default GaugeBar;
