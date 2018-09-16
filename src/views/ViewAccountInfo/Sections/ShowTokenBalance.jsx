/*eslint-disable no-unused-vars */
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import SvgIcon from '@material-ui/core/SvgIcon';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const styles = {
    root: {

    },
    tokenValue: {
        //marginLeft:'auto',
        textAlign: 'right',
    },
    tokenList: {
        padding: '10px 0px',
    }

}

const ShowTokenBalace = props => {
    const { classes, tokenBalance } = props;
    if (tokenBalance != null)
        return (
                <Card className={classes.card}>
                    <CardHeader
                        className={classes.cardHeader}
                        // avatar={
                        //   <Avatar aria-label="Recipe" className={classes.avatar}>A</Avatar>
                        // }
                        title="Available Token"
                        titleTypographyProps={{
                            variant: 'title',
                            color: 'inherit',
                        }}
                    />
                    <CardContent>

                        <div>
                            {

                                Object.keys(tokenBalance).map((key) => {
                                    return <List>
                                        <ListItem className={classes.tokenList}>
                                            <Avatar>
                                                <ImageIcon />
                                            </Avatar>
                                            <ListItemText className={classes.tokenName}
                                                primary={tokenBalance[key].account}
                                                primaryTypographyProps={{
                                                    variant: 'subheading',
                                                    color: 'inherit',
                                                }} />
                                            <ListItemText className={classes.tokenValue} primary={tokenBalance[key].balance} secondary="0.00 USD" />
                                        </ListItem>
                                        <li>
                                            <Divider inset />
                                        </li>

                                    </List>
                                })
                            }
                        </div>



                    </CardContent>

                </Card>
        )
}
export default withStyles(styles)(ShowTokenBalace);
