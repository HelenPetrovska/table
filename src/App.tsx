import React, { useState } from 'react';
import { MainTable } from './components/MainTable';
import { BasicModal } from './components/BasicModal';

import './App.scss';

import { support } from './api';

export const App: React.FC = () => {
  const [isVisibleModal, setIsVisibleSupprot] = useState(false);
  const [supportArr, setSupportArr] = useState<supportItem[]>(support);

  const toggleIsVisibleModal = () => {
    setIsVisibleSupprot(!isVisibleModal);
  };

  return (
    <div className="container">
      <MainTable
        toggleIsVisibleModal={toggleIsVisibleModal}
      />
      {isVisibleModal
        && (
          <BasicModal
            toggleIsVisibleModal={toggleIsVisibleModal}
            isVisibleModal={isVisibleModal}
            supportArr={supportArr}
            setSupportArr={setSupportArr}
          />
        )}
    </div>
  );
};
