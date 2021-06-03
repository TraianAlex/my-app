import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { uploadFile } from '../data';

export const UploadPhotoPage = () => {
  const [titleValue, setTitleValue] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const history = useHistory();

  const beginUpload = async () => {
    if (!titleValue || !selectedFile) {
      toast('Please introduce a title and select a picture to upload!');
      return;
    }
    const formData = new FormData();
    formData.append('title', titleValue);
    formData.append('file', selectedFile);
    await uploadFile('/upload', formData);
    alert('Successfully uploaded photo!');
    history.push('/photo-sharing');
  };

  return (
    <div
      className="photo-sharing justify-content-center m-auto w-50 pt-5"
      style={{ minHeight: '70vh' }}
    >
      <h3>Upload A New Photo</h3>
      <input
        type="text"
        placeholder="Enter a title for the new photo"
        className="w-100 mt-5 mb-2"
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <Form.File
        label="Choose File"
        className="w-100 mb-3"
        accept="image/png, image/jpeg, image/jpg"
        onChange={(e) => {
          const file = e.target.files[0];
          setSelectedFile(file);
        }}
        custom
      ></Form.File>
      <button className="w-100" onClick={beginUpload}>
        Upload
      </button>
    </div>
  );
};
