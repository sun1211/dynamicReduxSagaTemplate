import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  tableHeader: {
    backgroundColor: '#7190eb',
    fontSize: '16px',
  },
  tableCell: {
    //backgroundColor: "#E0E0E0",
    //color: "black",
    fontSize: '15px',
    lineHeight: 2.0,
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#FFFFFF',
    },
  },

});



const ShowAccountHistory = props => {
  const { classes, history } = props;

  return (
    <div>
      {

        <Table>
          <colgroup>
            <col style={{ width: '25%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '30%' }} />
            <col style={{ width: '35%' }} />
          </colgroup>
          <TableHead className={classes.tableHeader}>
            <TableRow>
              <TableCell className={classes.tableCell}>Time/Date</TableCell>
              <TableCell className={classes.tableCell}>Type</TableCell>
              <TableCell className={classes.tableCell}>Data</TableCell>
              <TableCell className={classes.tableCell}>Memo</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              history.actions.map((p, id) => {
                //var event = new Date(p.block_time);
                var timeDate = new Date(p.block_time).toLocaleString('en-GB', { timeZone: 'UTC' });
                switch (p.action_trace.act.name) {
                  case 'transfer':
                    return (
                      <TableRow key={id} className={classes.tableRow}>
                        <TableCell className={classes.tableCell} >{timeDate}</TableCell>
                        <TableCell className={classes.tableCell}>
                          <Button size="small" variant="outlined" color="primary">Transfer</Button>
                        </TableCell>
                        <TableCell className={classes.tableCell}>{p.action_trace.act.data.from} → {p.action_trace.act.data.to} : {p.action_trace.act.data.quantity}</TableCell>
                        <TableCell className={classes.tableCell}>{p.action_trace.act.data.memo.substring(0, 50)}</TableCell>
                      </TableRow >
                    );
                  case 'buyrambytes':
                    return (
                      <TableRow key={id} className={classes.tableRow}>
                        <TableCell >{p.block_time}</TableCell>
                        <TableCell >
                          <Button size="small" variant="outlined" color="secondary">Buy RAM</Button>
                        </TableCell>
                        <TableCell> Buy {p.action_trace.act.data.bytes} bytes RAM</TableCell>
                        <TableCell >{""}</TableCell>
                      </TableRow>
                    );
                  case 'delegatebw':
                    return (
                      <TableRow key={id} className={classes.tableRow}>
                        <TableCell >{p.block_time}</TableCell>
                        <TableCell >
                          <Button size="small" variant="outlined" color="default">Delegate</Button>
                        </TableCell>
                        <TableCell> {p.action_trace.act.data.from}→{p.action_trace.act.data.receiver}: {p.action_trace.act.data.stake_cpu_quantity} stakeCpu and {p.action_trace.act.data.stake_net_quantity} stakeNet</TableCell>
                        <TableCell >{""}</TableCell>
                      </TableRow>
                    );
                  case 'claimrewards':
                    return (
                      <TableRow key={id} className={classes.tableRow}>
                        <TableCell >{p.block_time}</TableCell>
                        <TableCell >
                          <Button size="small" variant="outlined" color="inherit">ClaimRewards</Button>
                        </TableCell>
                        <TableCell> {p.action_trace.act.data.owner} Claimed block producer rewards</TableCell>
                        <TableCell >{""}</TableCell>
                      </TableRow>
                    );

                }

              })
            }
          </TableBody>
        </Table>

      }
    </div>
  )
}

export default withStyles(styles)(ShowAccountHistory);
