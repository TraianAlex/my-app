import React from 'react';
import { Link } from 'react-router-dom';

export const NewPhotoButton = () => (
  <Link to="/photo-sharing/upload-photo">
    <div className="new-photo-button">
      <p className="plus-sign">+</p>
    </div>
  </Link>
);
