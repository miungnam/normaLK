import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Main from './components/Main/Main'
import Login from './components/Login/Login'
import Registr from './components/Registr/Registrationn'
import { getData,login } from './redux/actions/index'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'

const App = () => {
	const dispatch = useDispatch()
	const token = useSelector(state=>state.data.token)
	const loginSuccess = useSelector(state=>state.data.get.success)
	console.log(loginSuccess);
	console.log(loginSuccess);
	React.useEffect(() => {
		dispatch(getData(window.localStorage.getItem('token')||token))
	}, [getData, window.localStorage.getItem("token"),login,token])
	return (
		<BrowserRouter>
			<div className="app">
				<Switch>
					<Route path="/auth" component={Registr} exact />
					
					{loginSuccess&&<Route path="/main" component={Main} exact />}
					{loginSuccess&&<Redirect to="/main" />}
					{!loginSuccess&&<Route path="/login" component={Login} exact />}	
					{!loginSuccess&&<Redirect to="/login" />}					
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
