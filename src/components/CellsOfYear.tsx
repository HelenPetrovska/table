import React from 'react';

import TableCell from '@mui/material/TableCell';

type Props = {
  year: yearType | undefined;
  toggleIsVisibleModal: () => void;
};

export const CellsOfYear: React.FC<Props> = ({ year, toggleIsVisibleModal }) => {
  return (
    <>
      <TableCell component="th" scope="row" align="center" onClick={toggleIsVisibleModal}>
        {year && year.XX.value}
      </TableCell>
      <TableCell component="th" scope="row" align="center" onClick={toggleIsVisibleModal}>
        {year && year.YY.value}
      </TableCell>
      <TableCell component="th" scope="row" align="center" onClick={toggleIsVisibleModal}>
        {year && year.ZZ.value}
      </TableCell>
    </>
  );
};
