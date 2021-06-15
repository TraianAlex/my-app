import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import { useData } from '../common/hooks/Providers/DataProvider';
import { useLocalData } from '../common/hooks/Providers/LocalDataProvider';
import './ResultModal.scss';

Modal.setAppElement('#root');

export const ResultModal = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [data] = useData();
  const [localData] = useLocalData();

  // const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    if (Object.keys(data).length > 0 || Object.keys(localData).length > 0) {
      setModalIsOpen(props.open);
    }
  }, [data, localData, props.open]);

  return (
    <div>
      {/* <button type="button" className="modal_button" onClick={openModal}>
        Open Modal
      </button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Demo Modal"
        className="Modal"
        overlayClassName="Overlay"
        style={customStyles}
      >
        <Button className="modal_button" onClick={closeModal}>
          X
        </Button>
        <h3 className="mt-3">RxJS results</h3>
        <p>The click info from the Fetch Data button and an api call to the json-generator.com</p>
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
    //top: '15%',
    //left: '15%',
    color: 'black', //'lightsteelblue',
    minWidth: '200px'
  },
  color: 'lightsteelblue',
};
