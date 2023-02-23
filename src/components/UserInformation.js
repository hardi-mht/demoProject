import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { formFields } from "../utils/constants";
import FormFields from "../utils/FormFields";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 5,
  },
}));

const UserInformation = ({ userDetails, handleChange, error }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {formFields.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} key={index}>
              <FormFields
                key={`${index}${item.id}`}
                id={item.id}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
                options={item.options}
                values={userDetails.userInformation}
                handleChange={handleChange}
                valueField="userInformation"
                error={error}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default UserInformation;
