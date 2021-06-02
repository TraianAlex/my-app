import React from 'react';
import { useParams } from 'react-router-dom';
import { useProtectedResource, postWithCredentials } from '../data';
import { useUserPhotos } from '../auth';
import { SharedEmailsList } from './SharedEmailsList';

export const PhotoDetailPage = () => {
  // @ts-ignore
  const { id } = useParams();
  const {
    isLoading,
    data: photo,
    setData: setPhoto,
  } = useProtectedResource(`/photos/${id}`, {});
  const { user } = useUserPhotos();
  const userIsOwner = user.uid === photo?.ownerId?.id;
  console.log(photo);

  const shareWithEmail = async (email) => {
    const response = await postWithCredentials(`/photos/${id}/shared-with`, {
      email,
    });
    // @ts-ignore
    const updatedPhoto = await response.json();
    setPhoto(updatedPhoto);
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div
      className="photo-sharing justify-content-center m-auto"
      style={{ minHeight: '75vh' }}
    >
      <h2>{photo.title}</h2>
      <img
        src={`${process.env.REACT_APP_API_PHOTOS_SHARING}${photo.url}`}
        className="img-fluid mb-2"
        width="750"
        alt={photo.title}
      />
      <div>
        {userIsOwner ? (
          <SharedEmailsList
            emails={photo.sharedWith}
            onShare={shareWithEmail}
          />
        ) : null}
      </div>
    </div>
  );
};
