import React from 'react';
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
