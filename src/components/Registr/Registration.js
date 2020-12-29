import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../redux/actions/index'

const useStyles = makeStyles({
	radio: {
		textAlign: 'left',
		marginRight: 476
	},
	label: {
		fontSize: 1
	}
})

export default function Registration() {
	const dispatch = useDispatch()
	const classes = useStyles()
	const [first_name, setName] = React.useState('')
	const [last_name, setSurame] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [username, setUsername] = React.useState('')
	const [city, setCity] = React.useState('')
	const [address, setAddress] = React.useState('')
	const [phone, setPhone] = React.useState('')
	const [birthday, setBirthday] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [password2, setPassword2] = React.useState('')
	const [country, setCountry] = React.useState('Кыргызстан')
	const [gender, setGender] = React.useState('Male')
	const [state, setState] = React.useState('KG')
	const [valid, setValid] = React.useState(false)
	React.useEffect(() => {
		if (
			first_name.length > 3 &&
			last_name.length > 3 &&
			email.length > 5 &&
			username.length > 5 &&
			city.length > 3 &&
			phone.length > 9 &&
			birthday.length > 5 &&
			password.length > 8 &&
			address.length > 6 &&
			password2.length > 8 &&
			password == password2
		) {
			setValid(true)
		} else {
			setValid(false)
		}
	}, [first_name, last_name, username, email, city, phone, birthday, password, password2, address])
	const handleClick = () => {
		if (valid) {
			dispatch(
				auth({
					first_name,
					last_name,
					username,
					email,
					city,
					phone,
					birthday,
					password,
					password2,
					state,
					country,
					gender,
					address
				})
			)
		}
	}
	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						value={first_name}
						onChange={(e) => setName(e.target.value)}
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
						value={last_name}
						onChange={(e) => setSurame(e.target.value)}
						name="last_name"
						label="Фамилия"
						fullWidth
						autoComplete="family-name"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						name="email"
						label="Емайл"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						name="username"
						label="Имя пользователя"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						value={city}
						onChange={(e) => setCity(e.target.value)}
						name="city"
						label="Город"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						name="address"
						label="Адрес"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						name="phone"
						label="Номер телефона"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						value={birthday}
						onChange={(e) => setBirthday(e.target.value)}
						name="birthday"
						label="Дата рождения"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						name="birthday"
						label="Пароль"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						type="password"
						value={password2}
						onChange={(e) => setPassword2(e.target.value)}
						name="birthday"
						label="Пароль еще раз"
						fullWidth
					/>
				</Grid>
			</Grid>
			<br />
			<Box pb={2}>
				<Button
					disabled={!valid}
					fullWidth
					onClick={handleClick}
					variant="contained"
					color="primary"
					type="submit"
				>
					Войти
				</Button>
			</Box>
		</React.Fragment>
	)
}
