import "date-fns";
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { connect } from "react-redux";
import { updateForm } from "../../ducks/formReducer";

const useStyles = makeStyles({
  grid: {
    marginTop: "3vh"
  }
});

function DatePicker(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // console.log(new Date());
    props.updateForm("date", new Date());
  }, []);

  const classes = useStyles();

  function handleDateChange(date) {
    setSelectedDate(date);
    props.updateForm("date", date);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.grid} justify="center">
        <KeyboardDatePicker
          margin="normal"
          label="Service Date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

const mapStatetoProps = state => {
  return {
    date: state.form.date
  };
};
export default connect(
  mapStatetoProps,
  { updateForm }
)(DatePicker);
