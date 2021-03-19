import React from 'react';

import Button, { ActiveButton } from '@components/styled-components/Button';
import Modal from './Modal';


const DeleteModal = ({ onDelete, onClose }) => {
  const buttons = [
    { id: 'buttonDelete', Component: () => <ActiveButton onClick={onDelete}>Yes</ActiveButton> },
    { id: 'buttonClose', Component: () => <Button onClick={onClose}>No</Button> },
  ];

  console.log(buttons);
  return (
    <Modal
      title="Are sure you want to delete?"
      buttons={buttons}
    >
      This action cannot be undone
    </Modal>
  );
};


export default React.memo(DeleteModal);
