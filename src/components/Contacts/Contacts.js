import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, MuiThemeProvider, useTheme } from '@material-ui/core/styles';
import { Avatar, Chip, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			// display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	card: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	mainroot: {
		paddingLeft: 60
	}

}));

function ContactChat(props) {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<List style={{ marginTop: -50 }}>
				{['Иван Иванов', 'Дэвид Джонс', 'Семен Петров', 'Азамат Белеков'].map((text, index) => (
					<ListItem button key={text}>
						<Chip
							avatar={<Avatar>M</Avatar>}
							label={text}
							// onClick={handleClick}
							variant="outlined"
						/>
					</ListItem>
				))}
			</List>
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const bull = <span className={classes.bullet}>•</span>;

	return (
		<MuiThemeProvider theme={theme}>
			<div className={classes.root}>
				<AppBar position="fixed" className={classes.appBar} style={{ backgroundColor: '#A5C8C8' }}>
					<Toolbar style={{ backroundColor: 'white' }}>
						<Typography variant="h6" noWrap style={{ color: 'black' }}>
							Чаты
          </Typography>
					</Toolbar>
				</AppBar>

				<nav className={classes.drawer} aria-label="mailbox folders">

					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					{/* <Hidden smUp implementation="css"> */}

					{/* </Hidden> */}
					{/* <Hidden xsDown implementation="css"> */}

					<PopupState variant="popover" popupId="demo-popup-menu" >
						{(popupState) => (
							<React.Fragment>
								<Button variant="contained" color="inherit" style={{ height: 25, width: 25, marginLeft: 40, marginTop: 80, marginBottom: 20, backgroundColor: 'white' }} {...bindTrigger(popupState)}>
									<Typography >
										Тег
                    </Typography>
								</Button>
								<Menu {...bindMenu(popupState)}>
									<MenuItem onClick={popupState.close}>Первый</MenuItem>
									<MenuItem onClick={popupState.close}>Второй</MenuItem>
								</Menu>
							</React.Fragment>
						)}
					</PopupState>
					<Divider />
					{drawer}
					{/* </Hidden> */}
				</nav>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<Divider orientation="horizontal" />
					<Card className={classes.card} style={{ marginTop: -15, marginLeft: -15, height: '100vh', backgroundColor: "#F5F5F5", }}>
						<CardContent>
						</CardContent>
						<CardActions>
						</CardActions>
					</Card>
				</main>
			</div>
		</MuiThemeProvider>
	);
}

// ContactChat.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default ContactChat;
