import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
/* import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ThumbUpIcon from '../../assets/icons/thumbUpIcon.png';
import ThumbDownAltIcon from '../../assets/icons/thumbDownIcon.png';
import personData from '../../assets/data.json';
import kanye from '../../assets/peopleImg/kanye.png';
import Typography from '@material-ui/core/Typography'; */
import peopleData from '../../assets/data.json';
import Person from '../Person/Person';
import Grid from '@material-ui/core/Grid';

const styles = {
  scrollmenu: {
    height: 300
  },
};

function PeopleList () {
  const myData = peopleData.data;
  const listItems = myData.map (person => <Person data={person} />);

  return (
    <Grid container direction="row" className={styles.scrollmenu} >
      {listItems}
    </Grid>
  );
}

export default PeopleList;
