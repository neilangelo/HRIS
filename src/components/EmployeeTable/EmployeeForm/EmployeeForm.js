import { makeStyles} from '@material-ui/core';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
  },
}));

export default function EmployeeForm({first_name, last_name, email, handleChange, handlePost}) {
  const classes = useStyles();
return (
  <Container component="main" maxWidth="md">
  <div className={classes.paper}>
  <CssBaseline />
    Employee Form
    <Paper>
    <form className={classes.form} onSubmit={handlePost}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
        <TextField
          id="outlined-firstname-input"
          label="Firstname"
          variant="outlined"
          fullWidth
          value = {first_name}
          name="first_name"
          onChange = {handleChange}
        />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField
          id="outlined-lastname-input"
          label="Lastname"
          variant="outlined"
          fullWidth
          value = {last_name}
          name="last_name"
          onChange = {handleChange}
        />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField
          id="outlined-Email-input"
          label="Email"
          variant="outlined"
          name="email"
          autoComplete="email"
          value = {email}
          fullWidth
          onChange = {handleChange}
        />
        </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
        </form>
    </Paper>
    </div>
  </Container>
)
}