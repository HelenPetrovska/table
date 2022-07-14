import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { CellsOfYear } from './CellsOfYear';

type Props = {
  region: regionType;
  regionName: string;
  toggleIsVisibleModal: () => void,
};

export const Row: React.FC<Props> = ({ region, regionName, toggleIsVisibleModal }) => {
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row" align="center">{regionName}</TableCell>
      <CellsOfYear
        year={region.G[2017]}
        toggleIsVisibleModal={toggleIsVisibleModal}
      />
      <CellsOfYear
        year={region.G[2018]}
        toggleIsVisibleModal={toggleIsVisibleModal}
      />
      <CellsOfYear
        year={region.G[2019]}
        toggleIsVisibleModal={toggleIsVisibleModal}
      />
    </TableRow>
  );
};
