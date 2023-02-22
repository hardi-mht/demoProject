import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 5
    },


}));


const UserInformation = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {/* first name */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        // error
                        fullWidth
                        id="first-name"
                        label="First Name"
                        placeholder="Hardi"
                        // helperText="Incorrect entry."
                        variant="outlined"
                    />
                </Grid>
                {/* middle name */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        // error
                        fullWidth
                        id="middle-name"
                        label="Middle Name"
                        placeholder="Ketankumar"
                        // helperText="Incorrect entry."
                        variant="outlined"
                    /></Grid>
                {/* last name */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        // error
                        fullWidth
                        id="last-name"
                        label="Last Name"
                        placeholder="Mehta"
                        // helperText="Incorrect entry."
                        variant="outlined"
                    />
                </Grid>
                {/* mobile number */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        // error
                        fullWidth
                        id="mobile-number"
                        label="MobileNumber"
                        placeholder="9999000112"
                        // helperText="Incorrect entry."
                        variant="outlined"
                    /></Grid>
                {/* email */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        // error
                        fullWidth
                        id="email"
                        label="Email"
                        placeholder="upforce@gmail.com"
                        // helperText="Incorrect entry."
                        variant="outlined"
                    />
                </Grid>
                {/* birthdate */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        // error
                        fullWidth
                        id="birthdate"
                        label="Birthday"
                        placeholder="13/04/2000"
                        // helperText="Incorrect entry."
                        variant="outlined"
                    /></Grid>
                {/* Age */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        // error
                        fullWidth
                        id="age"
                        label="Age"
                        placeholder="23"
                        // helperText="Incorrect entry."
                        variant="outlined"
                    />
                </Grid>
                {/* blood group */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        // error
                        fullWidth
                        id="bloodgroup"
                        label="Blood Group"
                        placeholder="o+"
                        // helperText="Incorrect entry."
                        variant="outlined"
                    /></Grid>
                {/* height  */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        // error
                        fullWidth
                        id="height"
                        label="Height"
                        placeholder="5.0"
                        // helperText="Incorrect entry."
                        variant="outlined"
                    />
                </Grid>
                {/* weight */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        // error
                        fullWidth
                        id="weight"
                        label="Weight"
                        placeholder="40"
                        // helperText="Incorrect entry."
                        variant="outlined"
                    /></Grid>

            </Grid>
        </div>
    )
}

export default UserInformation