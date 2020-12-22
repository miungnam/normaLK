import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    radio: {
        textAlign: 'left',
        marginRight: 476,
    },
    label: {
        fontSize: 1
    }

})

export default function Registration() {

    const classes = useStyles ()

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Имя"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Фамилия"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="FatherName"
            name="FatherName"
            label="Отчество"
            fullWidth
            autoComplete="father-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Адрес электронной почты"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="address2"
            name="address2"
            label="Ваш Адрес"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Город"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required 
            id="state"
            name="state" 
            label="Регион" 
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Страна"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required 
            id="phoneNumber"
            name="phoneNumber" 
            label="Номер телефона" 
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required 
            id="age"
            name="age" 
            label="Дата рождения" 
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} >
          
          <FormControl className={classes.radio} styles={{textAlign: 'left'}} component="fieldset">
            <FormLabel component="legend">Пол</FormLabel>
            <RadioGroup color="secondary" row aria-label="gender" name="gender1">
              <FormControlLabel value="male" control={<Radio />} label="М" />
              <FormControlLabel value="female" control={<Radio />} label="Ж" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}