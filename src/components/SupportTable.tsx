import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { support } from '../api';

import './supportTable.scss';

function formatDate(date: any) {
  let dd = date.getDate();

  if (dd < 10) {
    dd = `0${dd}`;
  }

  let mm = date.getMonth() + 1;

  if (mm < 10) {
    mm = `0${mm}`;
  }

  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}

function formatDateReverse(date: string) {
  const arrDate = date.split('-');

  return (
    `${arrDate[2]}.${arrDate[1]}.${arrDate[0]}`
  );
}

type Props = {
  toggleIsVisibleModal: () => void;
};

export const SupportTable: React.FC<Props> = ({ toggleIsVisibleModal }) => {
  const [supportArr, setSupportArr] = useState<supportItem[]>(support);
  const [numberData, setNumberData] = useState<number | string>('');
  const [userData, setUserData] = useState('');
  const [commentData, setCommentData] = useState('');

  const today = new Date();
  const now = formatDate(today);

  const [dateData, setDateData] = useState(now);

  const handlerInputNumber = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNumberData(+event.target.value);
  };

  const handlerInputDate = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDateData(event.target.value);
  };

  const handlerInputUser = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData(event.target.value);
  };

  const handlerInputComment = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCommentData(event.target.value);
  };

  const addToData = () => {
    const date = formatDateReverse(dateData);

    const newSupport = {
      id: support[support.length - 1].id + 1,
      num: numberData || '',
      date,
      user: userData || 'Roman',
      comment: commentData || 'any',
    };

    setSupportArr(currentSupport => (
      [...currentSupport,
        newSupport,
      ]
    ));
    setNumberData('');
    setDateData(now);
    setUserData('');
    setCommentData('');
  };

  return (
    <>
      <div className="supportTable">
        <div className="supportTable__wrapper">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">value</TableCell>
                  <TableCell align="center">date</TableCell>
                  <TableCell align="center">user</TableCell>
                  <TableCell align="center">comment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {supportArr.map((item: supportItem) => (
                  <TableRow key={item.id}>
                    <TableCell align="center">{item.num}</TableCell>
                    <TableCell align="center">{item.date}</TableCell>
                    <TableCell align="center">{item.user}</TableCell>
                    <TableCell align="center">{item.comment}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell align="center">
                    <TextField
                      id="standard-number"
                      className="textField"
                      label=""
                      type="number"
                      variant="standard"
                      placeholder="enter number"
                      value={numberData}
                      onChange={handlerInputNumber}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      id="date"
                      label=""
                      type="date"
                      defaultValue={now}
                      value={dateData}
                      onChange={handlerInputDate}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      label=""
                      id="standard-size-normal"
                      variant="standard"
                      placeholder="enter user"
                      value={userData}
                      onChange={handlerInputUser}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      label=""
                      id="standard-size-normal"
                      placeholder="enter your comment"
                      variant="standard"
                      value={commentData}
                      onChange={handlerInputComment}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="buttons">
          <Button variant="contained" onClick={addToData}>
            Add
          </Button>
          <Button variant="contained" onClick={toggleIsVisibleModal}>
            Close
          </Button>
        </div>
      </div>
    </>
  );
};
