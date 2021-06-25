import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '../../assets/icons/thumbUpIcon.png';
import ThumbDownAltIcon from '../../assets/icons/thumbDownIcon.png';
import PropTypes from 'prop-types';
import Styles from '../../styles/useStyles';
import GaugeBar from '../Person/GauB';

/** Componente asociado a cada personaje */
const Person = props => {
  const classes = Styles ();
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

  /** Calculo de porcentajes de votacion para el gauge*/
  const percentageCalculation = () => {
    let totalCuantity = props.data.votes.positive + props.data.votes.negative;
    setPositiveVote (
      Math.round (props.data.votes.positive * 100 / totalCuantity) + '%'
    );
    setNegativeVote (
      Math.round (props.data.votes.negative * 100 / totalCuantity) + '%'
    );
  };

  /** Evento para el cambio del mensaje al votar, ajuste de texto boton VOTAR*/
  const voteMsg = val => {
    if (val === 'Up') {
      setVoteButtonText ('Vote Again');
      setmsg ('Thank you for your vote!');
    } else {
      setmsg ('1 month ago in ' + props.data.cate);
    }
  };
  /** Adecuacion de numero de caracteres de la descripcion*/
  const descriptionToShow = props.data.description.substring (0, 60) + '...';
  /** Adecuacion de numero de caracteres del nombre del personaje*/
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

        <GaugeBar positive={positiveVote} negative={negativeVote} />
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

/** Recibe informacion de componente padre  PeopleList en cuanto ala data en json*/
Person.propTypes = {
  data: PropTypes.any.isRequired,
};

export default Person;
