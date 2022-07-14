import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import data from '../api';

import { Row } from './Row';

type Props = {
  toggleIsVisibleModal: () => void;
};

export const MainTable: React.FC<Props> = ({ toggleIsVisibleModal }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell rowSpan={3}>regions</TableCell>
            <TableCell align="center" colSpan={3}>2017</TableCell>
            <TableCell align="center" colSpan={3}>2018</TableCell>
            <TableCell align="center" colSpan={3}>2019</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">xx</TableCell>
            <TableCell align="center">yy</TableCell>
            <TableCell align="center">zz</TableCell>
            <TableCell align="center">xx</TableCell>
            <TableCell align="center">yy</TableCell>
            <TableCell align="center">zz</TableCell>
            <TableCell align="center">xx</TableCell>
            <TableCell align="center">yy</TableCell>
            <TableCell align="center">zz</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((reg: dataType, i: number) => {
            return (
              <React.Fragment key={i}>
                <Row
                  region={reg.Kyivska}
                  regionName={Object.keys(reg)[0]}
                  toggleIsVisibleModal={toggleIsVisibleModal}
                />
                <Row
                  region={reg.Odeska}
                  regionName={Object.keys(reg)[1]}
                  toggleIsVisibleModal={toggleIsVisibleModal}
                />
                <Row
                  region={reg.Lvivska}
                  regionName={Object.keys(reg)[2]}
                  toggleIsVisibleModal={toggleIsVisibleModal}
                />
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
