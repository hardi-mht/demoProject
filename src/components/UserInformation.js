import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { formFields } from "../utils/constants";
import FormFields from "../utils/FormFields";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 5,
  },
}));

const UserInformation = ({ userDetails, setUserDetails, handleChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {formFields.map((item) => {
          return (
            <Grid item xs={12} sm={6}>
              <FormFields
                id={item.id}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
                options={item.options}
                values={userDetails.userInformation}
                handleChange={handleChange}
                valueField="userInformation"
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default UserInformation;
