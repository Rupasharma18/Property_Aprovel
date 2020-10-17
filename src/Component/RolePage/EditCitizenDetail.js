import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Card, Button } from '@material-ui/core';
import Header from './Header'

const useStyles = makeStyles({
    SUBMITBUTTON: {
        marginTop: '10px',
        height: '50px'

    }

})

export default function EditCitizenDetails(props) {
    // console.log(props,"PRrrrrrrrrrrrrrrrrrrrrrrr")
    const classes = useStyles();
    return (
        <React.Fragment>
            <Header />

            <Container maxWidth="sm" style={{ marginTop: '8%' }}>
                <Typography variant="h3" gutterBottom style={{textAlign:"center", fontWeight:'bold'}}>
                    Update your Detail
                </Typography>
                <Card>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="Financial Year"
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                name="PTIN"
                                label="PTIN"
                                fullWidth
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Owner Name"
                                fullWidth
                                autoComplete="shipping address-line1"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Locality"
                                fullWidth
                                autoComplete="shipping address-line2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="House No"
                                fullWidth
                                autoComplete="shipping address-level2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField name="state" label="zone*" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Property Type"
                                fullWidth
                                autoComplete="shipping postal-code"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Last Payment Date"
                                fullWidth
                                autoComplete="shipping country"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Total Paid Amount"
                                fullWidth
                                autoComplete="shipping address-line2"
                            />
                        </Grid>

                        <Button fullWidth variant="contained" color="primary" className={classes.SUBMITBUTTON}  >
                            SUBMIT/ SEND FOR Approvel
                        </Button>
                    </Grid>

                </Card>


            </Container>
        </React.Fragment>
    );
}



