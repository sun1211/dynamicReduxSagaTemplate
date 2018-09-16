import React from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';
// import { lighten } from '@material-ui/core/styles/colorManipulator';
import GridContainer from '../GridContainer';
// import Button from '../CustomButtons/Button';
import Button from '@material-ui/core/Button';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  tableCell: {
    backgroundColor: "#E0E0E0",
    color: "black",
    fontSize: 14,
  },

});

const theme = createMuiTheme({
  palette: {
    default: { main: '#ffc107' },
    inherit: { main: '#4caf50' },
    primary: { main: "#2196f3" },
    secondary: { main: '#9c27b0' },
  },
});


const TransferForm = props => {
  const { id, time, from, to, quantity, memo } = props;
  return (
    <TableRow key={id}>
      <TableCell >{time}</TableCell>
      <TableCell >
        <MuiThemeProvider theme={theme}>
          <Button size="small" variant="outlined" color="primary">Transfer</Button>
        </MuiThemeProvider>
      </TableCell>
      <TableCell >{from} → {to} : {quantity}</TableCell>
      <TableCell >{memo}</TableCell>
    </TableRow >
  )
}

const BuyRamByte = props => {
  const { id, time, bytes } = props;
  return (
    <TableRow key={id}>
      <TableCell >{time}</TableCell>
      <TableCell >
        <MuiThemeProvider theme={theme}>
          <Button size="small" variant="outlined" color="secondary">Buy RAM</Button>
        </MuiThemeProvider>
      </TableCell>
      <TableCell> Buy {bytes} bytes RAM</TableCell>
      <TableCell >{""}</TableCell>
    </TableRow>
  )
}


const DelegatebwForm = props => {
  const { id, time, from, receiver, stakeCpuQuantity, stakeNetQuantity } = props;
  return (
    <TableRow key={id}>
      <TableCell >{time}</TableCell>
      <TableCell >
        <MuiThemeProvider theme={theme}>
          <Button size="small" variant="outlined" color="default">Delegate</Button>
        </MuiThemeProvider>
      </TableCell>
      <TableCell> {from}→{receiver}: {stakeCpuQuantity} stakeCpu and {stakeNetQuantity} stakeNet</TableCell>
      <TableCell >{""}</TableCell>
    </TableRow>

  )
}
const ClaimRewardsForm = props => {
  const { id, time, owner } = props;
  return (
    <TableRow key={id}>
      <TableCell >{time}</TableCell>
      <TableCell >
        <MuiThemeProvider theme={theme}>
          <Button size="small" variant="outlined" color="inherit">ClaimRewards</Button>
        </MuiThemeProvider>
      </TableCell>
      <TableCell> {owner} Claimed block producer rewards</TableCell>
      <TableCell >{""}</TableCell>
    </TableRow>
  )
}

const ShowAccountHistory = props => {
  const { classes, history } = props;

  return (
    <div>
      <GridContainer>
        {
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell}>Date</TableCell>
                <TableCell className={classes.tableCell}>Name</TableCell>
                <TableCell className={classes.tableCell}>Data</TableCell>
                <TableCell className={classes.tableCell}>Memo</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {
                history.actions.map((p, id) => {
                  return (
                    p.action_trace.act.name === 'transfer' ? <TransferForm
                      id={id}
                      time={p.block_time}
                      from={p.action_trace.act.data.from}
                      to={p.action_trace.act.data.to}
                      quantity={p.action_trace.act.data.quantity}
                      memo={p.action_trace.act.data.memo}
                    /> : ''
                  );
                })
              }
              {
                history.actions.map((p, id) => {
                  return (
                    p.action_trace.act.name === 'buyrambytes' ? <BuyRamByte
                      id={id}
                      time={p.block_time}
                      payer={p.action_trace.act.data.payer}
                      receiver={p.action_trace.act.data.receiver}
                      bytes={p.action_trace.act.data.bytes}
                    /> : ''
                  );
                })
              }
              {
                history.actions.map((p, id) => {
                  return (
                    p.action_trace.act.name === 'delegatebw' ? <DelegatebwForm
                      id={id}
                      time={p.block_time}
                      from={p.action_trace.act.data.from}
                      receiver={p.action_trace.act.data.receiver}
                      stakeCpuQuantity={p.action_trace.act.data.stake_cpu_quantity}
                      stakeNetQuantity={p.action_trace.act.data.stake_net_quantity}
                    /> : ''
                  );
                })
              }
              {
                history.actions.map((p, id) => {
                  return (
                    p.action_trace.act.name === 'claimrewards' ? <ClaimRewardsForm
                      id={id}
                      time={p.block_time}
                      owner={p.action_trace.act.data.owner}
                    /> : ''
                  );
                })
              }
            </TableBody>
          </Table>

        }

      </GridContainer>

    </div>
  )
}

export default withStyles(styles)(ShowAccountHistory);
