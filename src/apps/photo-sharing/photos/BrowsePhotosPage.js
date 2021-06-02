import React from 'react';
import '../photo-sharing.scss';
import { useProtectedResource } from '../data';
import { MyPhotosList } from './MyPhotosList';
import { SharedPhotosList } from './SharedPhotosList';

export const BrowsePhotosPage = () => {
  const { isLoading: isLoadingMyPhotos, data: myPhotos } = useProtectedResource(
    `/my-photos`,
    [],
  );
  const { isLoading: isLoadingSharedPhotos, data: sharedPhotos } =
    useProtectedResource(`/shared`, []);

  return (
    <div className="photo-sharing" style={{ minHeight: '70vh' }}>
      <h3 className="border border-dark border-top-0 border-right-0 border-left-0 mb-2 p-3">
        My Photos
      </h3>
      <MyPhotosList isLoading={isLoadingMyPhotos} photos={myPhotos} />
      <h3 className="border border-dark border-top-0 border-right-0 border-left-0 mb-2 p-3">
        Shared With Me
      </h3>
      <SharedPhotosList
        isLoading={isLoadingSharedPhotos}
        photos={sharedPhotos}
      />
    </div>
  );
};
