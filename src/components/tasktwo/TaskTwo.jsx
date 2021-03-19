import React, { useEffect, useState } from 'react';
import {
  Task
} from '@components/styled-components/Task';
import Button from '@components/styled-components/Button';

import LoadingModal from './LoadingModal';
import DeleteModal from './DeleteModal';
import DeleteCustomModal from './DeleteCustomModal';


const TaskTwo = () => {
  const [activeLoadingModal, setActiveLoadingModal] = useState(false);
  const [activeDeleteModal, setActiveDeleteModal] = useState(false);
  const [activeDeleteCustomModal, setActiveDeleteCustomModal] = useState(false);

  const setModalActive = (setActiveModal) => () => setActiveModal(true);
  const setModalInactive = (setActiveModal) => () => setActiveModal(false);

  const historyToRemove = [
    { id: 'nov20', title: 'November 2020' },
    { id: 'dec20', title: 'December 2020' },
    { id: 'jan21', title: 'January 2021' },
    { id: 'feb21', title: 'February 2021' },
    { id: 'mar21', title: 'March 2021' },
  ];

  useEffect(() => {
    if (activeLoadingModal) {
      setTimeout(setModalInactive(setActiveLoadingModal), 2000);
    }
  }, [activeLoadingModal]);

  return (
    <Task>

      <Button onClick={setModalActive(setActiveLoadingModal)}>LoadingModal</Button>
      <Button onClick={setModalActive(setActiveDeleteModal)}>DeleteModal</Button>
      <Button onClick={setModalActive(setActiveDeleteCustomModal)}>DeleteCustomModal</Button>

      {activeLoadingModal && <LoadingModal onClose={setModalInactive(setActiveLoadingModal)} />}
      {activeDeleteModal && (
        <DeleteModal
          onClose={setModalInactive(setActiveDeleteModal)}
          onDelete={setModalInactive(setActiveDeleteModal)}
        />
      )}
      {activeDeleteCustomModal && (
        <DeleteCustomModal
          dataList={historyToRemove}
          onClose={setModalInactive(setActiveDeleteCustomModal)}
          onDelete={setModalInactive(setActiveDeleteCustomModal)}
        />
      )}
    </Task>
  );
};

export default TaskTwo;
