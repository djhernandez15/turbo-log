import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import {
  updateForm,
  submitDIYRecord,
  getID,
  toggleShop
} from "../../ducks/formReducer";
import NavBar from "../navbar/NavBar";
import DatePicker from "./DatePicker";
import DIY from "./DIY";
import Shop from "./Shop";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Typography, Radio, Button } from "@material-ui/core";
import PartsForm from "./PartsForm";

const styles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(4)
  },
  dense: {
    marginTop: theme.spacing(4)
  },
  menu: {
    width: 200
  }
}));

function ServiceForm(props) {
  const classes = styles();
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    props.toggleShop(false);
  }, []);

  

  const handleChange = e => {
    props.updateForm(e.target.name, e.target.value);
  };

  const handleSubmit = () => {
    props.submitDIYRecord(
      props.id,
      props.shop,
      props.shop_name,
      props.date,
      props.miles,
      props.description,
      props.summary,
      props.image,
      props.part_number,
      props.part_description,
      );
    };
    
    if (selectedValue === "b") {
      return <Shop />;
    } else if (selectedValue === "a") {
      return <DIY />;
    }
  return (
    <div>
      <NavBar />
      <Typography
        variant="h3"
        style={{ textAlign: "center", marginTop: "5vh" }}
      >
        DIY Log
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2vh"
        }}
      >
        <Typography>DIY</Typography>
        <Radio
          checked={props.selectedValue === "a"}
          onChange={props.handleRadioButton}
          value="a"
          name="radio-button-demo"
          aria-label="A"
          style={{ color: "teal" }}
        />
        <Typography>Shop</Typography>
        <Radio
          checked={props.selectedValue === "b"}
          onChange={props.handleRadioButton}
          value="b"
          name="radio-button-demo"
          aria-label="A"
          style={{ color: "teal" }}
        />
      </div>
      <DatePicker />
      <div className={classes.container} noValidate autoComplete="off">
        <TextField
          name="description"
          id="outlined-name"
          label="Service Description"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="off"
        />
        <TextField
          name="miles"
          id="outlined-name"
          label="Current Mileage"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="off"
        />
        <PartsForm handleChange={handleChange}/>
        <TextField
          name="summary"
          id="outlined-multiline-flexible"
          label="Summary"
          rowsMax="4"
          onChange={handleChange}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          autoComplete="off"
        />
      </div>
      <Grid style={{textAlign:"center"}}>
      <Link to="/garage" ><Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button></Link>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    vehicle_id: ownProps.vehicle_id,
    shop: state.form.shop,
    date: state.form.date,
    miles: state.form.miles,
    summary: state.form.summary,
    shop_name: state.form.shop_name,
    image: state.form.image,
    part_number: state.form.part_number,
    part_description: state.form.part_description,
    description: state.form.description
  };
};

export default connect(
  mapStateToProps,
  { updateForm, submitDIYRecord, getID, toggleShop }
)(ServiceForm);
