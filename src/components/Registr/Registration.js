import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    radio: {
        textAlign: 'left',
        marginRight: 476,
    },
    label: {
        fontSize: 1
    }

})

export default function Registration(props) {

    const classes = useStyles();
    const {actions} = props;
    console.log(actions);
    const onChange = event => {
        actions.changeRegisterField(event.target.name, event.target.value)
    };

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={onChange}
                        name="first_name"
                        fullWidth
                        label="Имя"
                        autoComplete="given-name"
                        // error={!!usernameError}
                        // helperText={usernameError}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={onChange}
                        name="last_name"
                        label="Фамилия"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={onChange}
                        name="email"
                        label="Емайл"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={onChange}
                        name="username"
                        label="Имя пользователя"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        onChange={onChange}
                        name="address"
                        label="Ваш Адрес"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={onChange}
                        name="city"
                        label="Город"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={onChange}
                        name="state"
                        label="Регион"
                        fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={onChange}
                        name="country"
                        label="Страна"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={onChange}
                        name="phone"
                        label="Номер телефона"
                        fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={onChange}
                        name="birthday"
                        label="Дата рождения"
                        fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={onChange}
                        name="birthday"
                        label="Пол"
                        fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        type="password"
                        onChange={onChange}
                        name="birthday"
                        label="Пароль"
                        fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        type="password"
                        onChange={onChange}
                        name="birthday"
                        label="Пароль 2"
                        fullWidth/>
                </Grid>
            </Grid><br/>
            <Box pb={2}>
                <Button
                    fullWidth
                    onClick={actions.register}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Войти
                </Button>
            </Box>
        </React.Fragment>
    );
}