import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Registration from './Registration'
import './registr.css'

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: 'relative'
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingBottom:"20px",

		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		marginTop: theme.spacing(3),
    // marginBottom: theme.spacing(3),
    
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3)
		}
	},
	mainTittle: {
		marginBottom: 30
	},
	stepper: {
		padding: theme.spacing(3, 0, 5)
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1)
	},
	back: {}
}))

const steps = ['Базовая информация']

function getStepContent() {
	return <Registration />
	// case 1:
	//   return <PaymentForm />;
	// case 2:
	//   return <Review />;
	// default:
	//   throw new Error('Unknown step');
}

export default function Registrationn(props) {
	const classes = useStyles()
	const [activeStep, setActiveStep] = React.useState(0)

	const handleNext = () => {
		props.history.push('main')
	}

	const handleBack = () => {
		setActiveStep(activeStep - 1)
	}

	return (
		<div className="login-body">
			<CssBaseline />
			<AppBar position="absolute" color="default" className={classes.appBar}></AppBar>
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography className={classes.mainTittle} component="h2" variant="h4" align="center">
						Регистрация
					</Typography>

					<React.Fragment>
						{activeStep === steps.length ? (
							<React.Fragment>
								<Typography variant="h5" gutterBottom>
									Спасибо за заполнение формы регистрации
								</Typography>
								<Typography variant="subtitle1"></Typography>
							</React.Fragment>
						) : (
							<React.Fragment>
								{getStepContent(activeStep)}
								<div className={classes.buttons}>
									{activeStep !== 0 && (
										<Button onClick={handleBack} className={classes.button}>
											Back
										</Button>
									)}
									<Button
										variant="contained"
										color="primary"
										onClick={handleNext}
										className={classes.button}
									>
										{/*{activeStep === steps.length - 1 ? 'Submit' : 'Next'}*/}
										Зарегистрироваться
									</Button>
								</div>
							</React.Fragment>
						)}
					</React.Fragment>
				</Paper>
			</main>
		</div>
	)
}
