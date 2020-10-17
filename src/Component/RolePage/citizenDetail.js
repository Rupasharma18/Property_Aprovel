import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid, Hidden, Link } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import EditCitizenDetails from './EditCitizenDetail';
import {withRouter} from 'react-router-dom'

const useStyles = makeStyles({

    root: {
        maxWidth: "90%",
        padding: '2%',

    },
    Title: {
        textAlign: 'center',
        marginTop: '2%'
    },
    ptin: {
        float: 'right',
        // marginBotom:'25
        clear: "both",
    },
    btn: {
        justifyContent: "center",
    },
    btnRight: {
        width: "40%",
    },
    leftcontent: {
        float: 'left',
    },
    lefttext: {
        fontWeight: "bold",
    },


});

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
 function CitizenDetail({history,userData}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
  
    return (

        <Container  >

            <Typography className={classes.Title} variant="h4">Property Details</Typography>
            <Grid container spacing={12} justify="center">

                <Grid item xs={12} md={8} >
                    <Card className={classes.root}>
                        <CardActionArea style={{ padding: '0 12% 0 12%' }}>
                            <CardContent >
                                <Typography className={classes.ptin} gutterBottom variant="h5" component="h2">
                                    {userData.PTIN}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {userData.Financial_Year}
                                </Typography>
                            </CardContent>

                            <CardContent className={classes.leftcontent}>
                                <Typography className={classes.lefttext} gutterBottom variant="h5" component="h2">
                                    Owner Name
                                </Typography>
                                <Typography className={classes.lefttext} gutterBottom variant="h5" component="h2">
                                    House No.
                                </Typography>
                                <Typography className={classes.lefttext} gutterBottom variant="h5" component="h2">
                                    Locality
                                </Typography>
                                <Typography className={classes.lefttext} gutterBottom variant="h5" component="h2">
                                    Property Type
                                </Typography>
                                <Typography className={classes.lefttext} gutterBottom variant="h5" component="h2">
                                    Last Payment Date
                                </Typography>
                                <Typography className={classes.lefttext} gutterBottom variant="h5" component="h2">
                                    Total Paid Amount
                                </Typography>
                            </CardContent>

                            <CardContent className={classes.rigthconter}>

                                <Typography style={{ textOverflow: 'ellipsis', overflow: "hidden", whiteSpace: "nowrap" }} gutterBottom variant="h5" component="h2">
                                    {userData.Owner_Name}
                                  </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {userData.House_No}, {userData.Zone}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {userData.Locality}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {userData.Property_type}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {userData.Last_Payment_Date}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {userData.Total_Paid_Amount}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.btn}>

                            <Button variant="contained" color="primary" onClick={handleClick} className={classes.btnRight}>
                                Send Request
                            </Button>
                            <Snackbar open={open} autoHideDuration={6000} className={classes.anackbar} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success">
                            Successfully Request sent to the approval
                            </Alert>
                        </Snackbar>
                            <Button variant="contained" color="secondary" onClick={() => history.push('/EditCitizenDetails')} className={classes.btnRight} >
                                Edit Detail
                         </Button>


                        </CardActions>
                    </Card>
                </Grid>


            </Grid>

        </Container>

    );
}


export default withRouter(CitizenDetail)