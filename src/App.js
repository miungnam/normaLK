import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Main from './components/Main/Main'
import Login from './components/Login/Login'
import Registr from './components/Registr/Registrationn'
import { getData } from './redux/actions/index'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'

const App = () => {
	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(getData(window.localStorage.getItem('token')))
	}, [getData, window.localStorage])
	return (
		<BrowserRouter>
			<div className="app">
				<Switch>
					<Route path="/auth" component={Registr} exact />
					<Route path="/login" component={Login} exact />
					{window.localStorage.getItem('token') != 'undefined' && window.localStorage.getItem('token') && (
						<Route path="/main" component={Main} exact />
					)}
						{window.localStorage.getItem('token') != 'undefined' && window.localStorage.getItem('token') && (
						<Redirect to="/main" />
					)}
					<Redirect to="/login" />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
