import React from "react";
import {TextField} from "@material-ui/core";
import "./update-profile.css"
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

export default function UpdateProfile() {
    return (
        <div>
            <div className="update-profile-card">
                <form noValidate autoComplete="off">
                    <Grid container
                          direction="row"
                          spacing={2}
                    >
                        <Grid item xs={12} sm={6}>
                            <Box pt={3}><TextField id="outlined-basic" label="вв" variant="outlined"/></Box>
                            <Box pt={3}><TextField id="outlined-basic" label="вв" variant="outlined"/></Box>
                            <Box pt={3}><TextField id="outlined-basic" label="вв" variant="outlined"/></Box>
                            <Box pt={3}><TextField id="outlined-basic" label="вв" variant="outlined"/></Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box pt={3}><TextField id="outlined-basic" label="вв" variant="outlined"/></Box>
                            <Box pt={3}><TextField id="outlined-basic" label="вв" variant="outlined"/></Box>
                            <Box pt={3}><TextField id="outlined-basic" label="вв" variant="outlined"/></Box>
                            <Box pt={3}><TextField id="outlined-basic" label="вв" variant="outlined"/></Box>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    )
}