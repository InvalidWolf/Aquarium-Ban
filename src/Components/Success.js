import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

class Success extends Component {
    render() {
        return (
            <Grid item>
                <h1 style={{textAlign: "center", color: "#00e676"}}>Deine Anfrage wurde an unser Mod Team geschickt!</h1>
                <h4>Dies kann eine Zeit dauern.</h4>
            </Grid>
        );
    }
}

export default Success;
