import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Star, StarBorder, StarHalf} from '@material-ui/icons';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(title, categoly, level, accepted, submitted) {
  return { title: title, categoly: categoly, level: level, accepted: accepted, submitted: submitted };
}

const rows = [
  createData('Frozen yoghurt', 'array', <><Star /><Star /><Star /></>, 24, 80),
  createData('Ice cream sandwich', 'dp', <><Star /><StarHalf /><StarBorder /></>, 2, 17),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Problems() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Categoly</TableCell>
            <TableCell align="right">Level</TableCell>
            <TableCell align="right">Accepted</TableCell>
            <TableCell align="right">Submitted</TableCell>
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
