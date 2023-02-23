import { Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { addressFormFields, formFields } from '../utils/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10
  },
  text: {
    color: 'green',
  },
  header: {
    fontWeight: 'bold'
  },
  data: {
    borderBottom: '1px solid black',
  },
  subText: {
    wordWrap: 'break-word'
  }
}));
const UserDetail = ({ userDetails, setUserDetails, handleChange }) => {
  const classes = useStyles();
  console.log(userDetails)
  return (
    <div>
      <Typography variant='h3' className={classes.text}>Data added successfully</Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {Object.keys(userDetails.userInformation).map(item => {
            return (
              <>
                <Grid item xs={6} sm={6} className={classes.data}>
                  <Typography variant="subtitle1" className={classes.header}>
                   {formFields.find(ele=>ele.id === item)?.label}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} className={classes.data}>
                  <Typography variant="subtitle1" className={classes.subText}>
                    {userDetails.userInformation[item]}
                  </Typography>
                </Grid>
              </>
            )
          })
          }
           {Object.keys(userDetails.addressDetails).map(item => {
            return (
              <>
                <Grid item xs={6} sm={6} className={classes.data}>
                  <Typography variant="subtitle1" className={classes.header}>
                   {addressFormFields.find(ele=>ele.id === item)?.label}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} className={classes.data}>
                  <Typography variant="subtitle1" className={classes.subText}>
                    {userDetails.addressDetails[item]}
                  </Typography>
                </Grid>
              </>
            )
          })
          }
        </Grid>
      </div>
    </div>
  )
}

export default UserDetail