import React, { useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import { useMediaQuery } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Header from '../Header/Header'
import ContactInfo from '../ContactInfo/ContactInfo'
import News from '../News/News'
import Footer from '../Footer/footer'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		marginTop: 10
	},
	root2: {
		marginTop: -8,
		marginBottom: 15
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36,
		marginTop: 4
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		background: 'linear-gradient(180deg, #374F6B 41.15%, rgba(55, 79, 107, 0.64) 100%)'
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar
	},
	toolbar2: {
		color: 'white'
	},
	toolbar3: {
		color: 'white'
	},
	content: {
		flexGrow: 1
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	},
	mobileTitle: {
		marginLeft: 80,
		marginTop: 0
	}
}))

export default function MiniDrawer(props) {
	const classes = useStyles()
	const theme = useTheme()
	const [open, setOpen] = React.useState(true)

	const MobileVersionPlatform = useMediaQuery('(max-width:768px)')

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}
	return (
		<div className={classes.root}>
			{!MobileVersionPlatform && (
				<Drawer
					variant="permanent"
					className={clsx(
						classes.drawer,
						{
							[classes.drawerOpen]: open,
							[classes.drawerClose]: !open
						},
						classes.bgsidebar
					)}
					classes={{
						paper: clsx({
							[classes.drawerOpen]: open,
							[classes.drawerClose]: !open
						})
					}}
				>
					<div
						style={{
							background: 'linear-gradient(180deg, #374F6B 41.15%, rgba(55, 79, 107, 0.64) 100%)',
							height: '100vh'
						}}
						className={classes.mainToolbar}
					>
						<div className={classes.toolbar}>
							<IconButton onClick={open === false ? handleDrawerOpen : handleDrawerClose}>
								{open === false ? (
									<MenuIcon style={{ color: 'white' }} />
								) : (
									<ChevronLeftIcon style={{ color: 'white' }} />
								)}
							</IconButton>
						</div>
						<Divider />
						<List className={classes.toolbar2}>
							{['Главная', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
								<ListItem button key={text}>
									<ListItemIcon>
										{index % 2 === 0 ? (
											<InboxIcon style={{ color: 'white' }} />
										) : (
											<MailIcon style={{ color: 'white' }} />
										)}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItem>
							))}
						</List>
						<Divider />
						<List className={classes.toolbar3}>
							{['All mail', 'Trash', 'Spam'].map((text, index) => (
								<ListItem button key={text}>
									<ListItemIcon>
										{index % 2 === 0 ? (
											<InboxIcon style={{ color: 'white' }} />
										) : (
											<MailIcon style={{ color: 'white' }} />
										)}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItem>
							))}
						</List>
					</div>
				</Drawer>
			)}

			<main className={classes.content}>
				{MobileVersionPlatform && (
					<div className={classes.root2}>
						<Accordion
							style={{
								background: 'linear-gradient(rgb(55, 79, 107) 41.15%, rgba(55, 79, 107, 0.64) 100%)',
								marginTop: '-10px'
							}}
						>
							<AccordionSummary
								aria-controls="panel1a-content"
								id="panel1a-header"
								expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
							>
								<MenuIcon style={{ color: 'white' }} />
								<Typography style={{ color: 'white' }} className={classes.mobileTitle}>
									Личный кабинет
								</Typography>
							</AccordionSummary>
							<Divider />
							<List style={{ color: 'white' }}>
								{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
									<ListItem button key={text}>
										<ListItemText primary={text} />
									</ListItem>
								))}
							</List>
						</Accordion>
					</div>
				)}
				<div>
					<Header />
					<br />
					<ContactInfo />
					<News />
					<Footer />
				</div>
			</main>
		</div>
	)
}
