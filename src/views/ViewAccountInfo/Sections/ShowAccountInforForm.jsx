import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

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

//style using in Footer
const ShowAccountInforFormStyle = theme => ({
    root: {
        marginBottom: "10px",
        marginTop: "10px",
        marginLeft: "10px",
    },
    layout: {
        marginBottom: "10px",
        marginTop: "10px",
        marginLeft: "20px",
    },
    tokenValue: {
        //marginLeft:'auto',
        textAlign: 'right',
    },
    tokenList: {
        padding: '10px 0px',
    }
})

class ShowAccountInforForm extends React.Component {
    constructor(props) {
        super(props);
        const { classes } = props;
        this.state = {
            data: null,
        }
    }
    componentDidMount() {
        fetch('https://api.coinmarketcap.com/v2/ticker/1765/')
            .then(results => results.json())
            .then(data => {
                // console.log("tam__", data.data.quotes.USD.price);
                this.setState({ data: data.data.quotes.USD.price })
            });
    };
    render() {
        return (
            <div>
                <Card className={this.props.classes.card}>
                    <CardHeader
                        className={this.props.classes.cardHeader}
                        title={this.props.account.account_name}
                        titleTypographyProps={{
                            variant: 'title',
                            color: 'inherit',
                        }}
                    />
                    <CardContent>

                        <div>
                            {
                                <List>
                                    <ListItem className={this.props.classes.tokenList}>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                        <ListItemText className={this.props.classes.tokenName}
                                            primary="EOS Balance"
                                            primaryTypographyProps={{
                                                variant: 'subheading',
                                                color: 'inherit',
                                            }} />
                                        <ListItemText className={this.props.classes.tokenValue}
                                            primary={this.props.account.core_liquid_balance}
                                            secondary={(parseInt(this.props.account.core_liquid_balance, 10) * this.state.data).toFixed(2) + ' USD'}
                                            />

                                    </ListItem>
                                    <li>
                                        <Divider inset />
                                    </li>


                                    <ListItem className={this.props.classes.tokenList}>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                        <ListItemText className={this.props.classes.tokenName}
                                            primary="CPU/NET Stake"
                                            primaryTypographyProps={{
                                                variant: 'subheading',
                                                color: 'inherit',
                                            }} />
                                        <ListItemText className={this.props.classes.tokenValue}
                                            primary={this.props.account.total_resources.cpu_weight}
                                            secondary={this.props.account.total_resources.net_weight}
                                            secondaryTypographyProps={{
                                                variant: 'subheading',
                                                color:"inherit",

                                            }}
                                            />
                                    </ListItem>
                                    <li>
                                        <Divider inset />
                                    </li>

                                    <ListItem className={this.props.classes.tokenList}>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                        <ListItemText className={this.props.classes.tokenName}
                                            primary="CPU"
                                            primaryTypographyProps={{
                                                variant: 'subheading',
                                                color: 'inherit',
                                            }} />
                                        <ListItemText className={this.props.classes.tokenValue}
                                            primary={this.props.account.cpu_limit.used + " µs"}
                                            secondary={this.props.account.cpu_limit.available + " µs"}
                                            secondaryTypographyProps={{
                                                variant: 'subheading',
                                                color:"inherit",

                                            }}/>
                                    </ListItem>
                                    <li>
                                        <Divider inset />
                                    </li>

                                    <ListItem className={this.props.classes.tokenList}>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                        <ListItemText className={this.props.classes.tokenName}
                                            primary="RAM"
                                            primaryTypographyProps={{
                                                variant: 'subheading',
                                                color: 'inherit',
                                            }} />
                                        <ListItemText className={this.props.classes.tokenValue}
                                            primary={this.props.account.ram_usage + " bytes"}
                                            secondary={this.props.account.ram_quota + " bytes"} 
                                            secondaryTypographyProps={{
                                                variant: 'subheading',
                                                color:"inherit",

                                            }}/>
                                    </ListItem>
                                    <li>
                                        <Divider inset />
                                    </li>

                                    <ListItem className={this.props.classes.tokenList}>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                        <ListItemText className={this.props.classes.tokenName}
                                            primary="NET"
                                            primaryTypographyProps={{
                                                variant: 'subheading',
                                                color: 'inherit',
                                            }} />
                                        <ListItemText className={this.props.classes.tokenValue}
                                            primary={this.props.account.net_limit.used + " bytes"}
                                            secondary={this.props.account.net_limit.available + " bytes"} 
                                            secondaryTypographyProps={{
                                                variant: 'subheading',
                                                color:"inherit",

                                            }}/>
                                    </ListItem>
                                    <li>
                                        <Divider inset />
                                    </li>

                                </List>
                            }
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
export default withStyles(ShowAccountInforFormStyle)(ShowAccountInforForm);




