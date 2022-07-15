import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { SupportTable } from './SupportTable';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  toggleIsVisibleModal: () => void;
  isVisibleModal: boolean;
  supportArr: supportItem[];
  setSupportArr: React.Dispatch<React.SetStateAction<supportItem[]>>;
};

export const BasicModal: React.FC<Props> = ({
  toggleIsVisibleModal,
  isVisibleModal,
  supportArr,
  setSupportArr,
}) => {
  return (
    <div>
      <Modal
        open={isVisibleModal}
        onClose={toggleIsVisibleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SupportTable
            toggleIsVisibleModal={toggleIsVisibleModal}
            supportArr={supportArr}
            setSupportArr={setSupportArr}
          />
        </Box>
      </Modal>
    </div>
  );
};
