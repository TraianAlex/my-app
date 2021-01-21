import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useData } from "../Providers/DataProvider";
import { useLocalData } from "../Providers/LocalDataProvider";
// @ts-ignore
import modal from "./Modal.module.css";

Modal.setAppElement("#root");

export const ResultModal = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // @ts-ignore
  const [data] = useData();
  // @ts-ignore
  const [localData] = useLocalData();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (Object.keys(data).length > 0 || Object.keys(localData).length > 0) {
      setModalIsOpen(true);
    }
  }, [data, localData]);

  const customStyles = {
    content: {
      top: "10%",
      left: "30%",
    },
  };

  return (
    <div className={modal.modal}>
      <button type="button" className={modal.modal_button} onClick={openModal}>
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Demo Modal"
        style={customStyles}
      >
        <button
          type="button"
          className={modal.modal_button}
          onClick={closeModal}
        >
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
              : "")}
        </div>
        <div>
          {localData &&
            (localData && localData.names
              ? localData.names.map((value, index) => (
                  <p key={index}>{value.name}</p>
                ))
              : "")}
        </div>
        <div>
          {/* <pre>{data && JSON.stringify(data, null, 2)}</pre> */}
          {/* <pre>{localData && JSON.stringify(localData, null, 2)}</pre> */}
        </div>
      </Modal>
    </div>
  );
};

// https://medium.com/javascript-in-plain-english/easiest-way-to-work-with-modals-in-react-1ece66c92ad1