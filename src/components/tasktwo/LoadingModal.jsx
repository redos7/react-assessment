import React from 'react';

import { Loader } from '@components/styled-components/Modal';
import Modal from './Modal';

const LoadingModal = () => (
  <Modal>
    <Loader />
  </Modal>
);


export default React.memo(LoadingModal);
