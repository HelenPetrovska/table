import React, { useState } from 'react';

import './App.scss';
import { MainTable } from './components/MainTable';
import { BasicModal } from './components/BasicModal';

export const App: React.FC = () => {
  const [isVisibleModal, setIsVisibleSupprot] = useState(false);

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
          />
        )}
    </div>
  );
};
