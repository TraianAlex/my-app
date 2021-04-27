import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useData } from '../common/hooks/Providers/DataProvider';
import { useLocalData } from '../common/hooks/Providers/LocalDataProvider';
import './ResultModal.scss';

// Modal.setAppElement('#root');

export const ResultModal = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [data] = useData();
  const [localData] = useLocalData();

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    if (Object.keys(data).length > 0 || Object.keys(localData).length > 0) {
      setModalIsOpen(true);
    }
  }, [data, localData]);

  return (
    <div className="modal">
      <button type="button" className="modal_button" onClick={openModal}>
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Demo Modal"
        style={customStyles}
      >
        <button type="button" className=".modal_button" onClick={closeModal}>
          Close
        </button>
        <h1>Modal Header</h1>
        <p>This is the modal content</p>
        <div>{data && data.timeLocation}</div>
        <div>{localData && localData.timeLocation}</div>
        <div>
          {localData &&
            (localData && localData.modelData && localData.modelData.length > 0
              ? localData.modelData.map((data, index) => (
                  <p key={index}>{data}</p>
                ))
              : localData.modelData)}
        </div>
        <div>
          {data &&
            (data && data.names
              ? data.names.map((value, index) => (
                  <p key={index}>{value.name}</p>
                ))
              : '')}
        </div>
        <div>
          {localData &&
            (localData && localData.names
              ? localData.names.map((value, index) => (
                  <p key={index}>{value.name}</p>
                ))
              : '')}
        </div>
        <div>
          {/* <pre>{data && JSON.stringify(data, null, 2)}</pre> */}
          {/* <pre>{localData && JSON.stringify(localData, null, 2)}</pre> */}
        </div>
      </Modal>
    </div>
  );
};

const customStyles = {
  content: {
    top: '10%',
    left: '30%',
  },
};
