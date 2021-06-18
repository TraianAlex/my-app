import React from 'react';
import { Link } from 'react-router-dom';

export const PhotosListItem = ({ photo }) => {
  return (
    <Link to={`/photo-sharing/photos/${photo._id}`}>
      <div className="photos-list-item-wrap">
        <img
          className="photos-list-item"
          src={`${process.env.REACT_APP_API}/photo-sharing${photo.url}`}
          height="200"
          width="200"
          alt={photo.title}
        />
      </div>
    </Link>
  );
};
