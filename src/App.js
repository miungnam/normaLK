import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Login from './redux/containers/LoginContainer/login'
import Main from './components/Profile/Profile'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'
import Registrationn from './redux/containers/Register/Register'

const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<Switch>
					<Route path="/auth" component={Registrationn} exact />
					<Route path="/login" component={Login} exact />
					<Route path="/main" component={Sidebar} exact />
					<Redirect to="/login" />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
