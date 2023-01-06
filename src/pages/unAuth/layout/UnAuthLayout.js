import { Box, Grid, Hidden } from '@mui/material'
import React from 'react'

export const UnAuthLayout = (props) => {

    return <Box sx={{ height: "100vh" }}>
        <Grid container className="height_100" justifyContent="center" alignItems="center" >
            <Grid container item xs={5}>
                <Grid item xs={12}>
                    {props.children}
                </Grid>
            </Grid>
        </Grid>
    </Box>
}
