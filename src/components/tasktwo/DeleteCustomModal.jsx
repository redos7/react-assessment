import React, { useState } from 'react';

import Button, { ActiveButton } from '@components/styled-components/Button';
import { DataListContainer } from '@components/styled-components/Modal';
import Modal from './Modal';

const DeleteCustomModal = ({ dataList, onClose, onDelete }) => {
  const [isReadyToDelete, setIsReadyToDelete] = useState(false);

  const buttons = [
    { id: 'buttonDelete', Component: () => <ActiveButton disabled={!isReadyToDelete} onClick={onDelete}>Delete all</ActiveButton> },
    { id: 'buttonClose', Component: () => <Button onClick={onClose}>Cancel</Button> },
  ];

  return (
    <Modal
      title="Are sure you want to delete?"
      buttons={buttons}
    >
      <p>
        If you delete the
        &nbsp;
        <b>Executive metrics</b>
        &nbsp;
        you will delete the history below:
      </p>
      <DataListContainer>
        {dataList
          .map(({ id, title }) => <div key={id}>{title}</div>)}
      </DataListContainer>
      <p>Type DELETE below</p>
      <input onChange={({ target: { value } }) => setIsReadyToDelete(value === 'DELETE')} />
    </Modal>
  );
};

export default React.memo(DeleteCustomModal);
