import React from 'react';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import Routes from '../routes/AppRoutes'
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({});

function Root(props) {
    const {store, history} = props;
    return (<ThemeProvider theme={theme}>
            <Provider store={store}>
                <Router history={history}>
                    {Routes}
                </Router>
            </Provider>
        </ThemeProvider>

    );
}

export default Root;