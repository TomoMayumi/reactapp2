import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(title, categoly, level, accepted, submitted) {
  return { title: title, categoly: categoly, level: level, accepted: accepted, submitted: submitted };
}

const rows = [
  createData('Frozen yoghurt', <time>20/07/09 12:00</time>, <time>15:00</time>, 24, <DoneOutlineIcon />),
  createData('Ice cream sandwich', <time>20/07/09 15:00</time>, <time>18:00</time>, 0, <></>),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Contests() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Start</TableCell>
            <TableCell align="right">End</TableCell>
            <TableCell align="right">Participants</TableCell>
            <TableCell align="right">Registered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.categoly}</TableCell>
              <TableCell align="right">{row.level}</TableCell>
              <TableCell align="right">{row.accepted}</TableCell>
              <TableCell align="right">{row.submitted}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
