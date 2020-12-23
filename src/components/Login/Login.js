import React from 'react';
import TextField from '@material-ui/core/TextField';
import './login.css'
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { NavLink } from 'react-router-dom';

const Login = (props) => {

    const {actions, usernameError, passwordError, isError } = props;

    const onChange = event => {
        actions.changeLoginField(event.target.name, event.target.value)
    };

     const renderError = () => (<Typography
        component="p"
        color="error"
        align="center"
    >Неверный пароль или логин! </Typography>);

    return (
        <div className="login-body">
            <Card className="login-container">
                <Box><h1 className="login-title">Login</h1></Box>
                <Box pt={2} pb={2}>
                    <TextField
                        onChange={onChange}
                        variant="outlined"
                        margin="normal"
                        name="login"
                        fullWidth
                        label="Имя пользователя"
                        error={!!usernameError}
                        helperText={usernameError}
                    />
                    <TextField
                        onChange={onChange}
                        name="password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Пароль"
                        type="password"
                        error={!!passwordError}
                        helperText={passwordError}
                    />
                </Box>
                <Box pb={2}>
                    <Button
                        onClick={actions.login}
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Войти
                    </Button> 
                    <div className="auth-link">
                    <NavLink  to="/auth">Хотите зарегистрироваться?</NavLink>
                    </div>
                    
                </Box>
                {isError && renderError()}
            </Card>
            
        </div>
    );
}
export default Login