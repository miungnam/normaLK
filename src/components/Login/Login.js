import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../../redux/actions/index'
import point from '../../point'
import TextField from '@material-ui/core/TextField'
import './login.css'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { NavLink } from 'react-router-dom'

const Login = (props) => {
	const dispatch = useDispatch()
	const state = useSelector((state) => state.getUserData)
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const handleClick = () => {
		if (email.length > 2 && password.length > 2) {
			fetch(`${point}/api/auth/users/login/`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			})
				.then((response) => response.json())
				.then((data) => {
					console.log('NICE LOGIN')
					window.localStorage.setItem('token', data.token)
				})
				.catch((err) => {
					console.log('BAD LOGIN')
				})
		}
	}
	React.useEffect(()=>{
		dispatch(getData(window.localStorage.getItem("token")))
		 },[getData,window.localStorage])
	return (
		<div className="login-body">
			<Card className="login-container">
				<Box>
					<h1 className="login-title">Login</h1>
				</Box>
				<Box pt={2} pb={2}>
					<TextField
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						variant="outlined"
						margin="normal"
						name="login"
						fullWidth
						label="Имя пользователя"
					/>
					<TextField
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						name="password"
						variant="outlined"
						margin="normal"
						fullWidth
						label="Пароль"
						type="password"
					/>
				</Box>
				<Box pb={2}>
					<Button onClick={handleClick} variant="contained" color="primary" type="submit">
						Войти
					</Button>
					<div className="auth-link">
						<NavLink to="/auth">Хотите зарегистрироваться?</NavLink>
					</div>
				</Box>
			</Card>
		</div>
	)
}
export default Login
