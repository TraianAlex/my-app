import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '../../../common/auth';
import {
  useProtectedResource,
  postWithCredentials,
} from '../../../common/hooks/data';
import { SharedEmailsList } from './SharedEmailsList';

export const PhotoDetailPage = () => {
  const history = useHistory();
  // @ts-ignore
  const { id } = useParams();
  const [errorShare, setErrorShare] = useState('');
  const {
    error,
    isLoading,
    data: photo,
    setData: setPhoto,
  } = useProtectedResource(`/photo-sharing/photos/${id}`, {});
  const { user } = useUser();
  const userIsOwner = user.uid === photo?.ownerId?.id;

  const shareWithEmail = async (email) => {
    if (!email) {
      toast('Please insert an email!');
      return;
    }
    const response = await postWithCredentials(
      `/photo-sharing/photos/${id}/shared-with`,
      {
        email,
      },
    );
    // @ts-ignore
    const updatedPhoto = await response.json();
    // @ts-ignore
    response.ok ? setPhoto(updatedPhoto) : setErrorShare(updatedPhoto.message);
  };

  useEffect(() => {
    if (error || errorShare) {
      toast(error || errorShare);
      history.push('/photo-sharing');
    }
  }, [error, errorShare, history]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div
      className="photo-sharing justify-content-center m-auto py-3"
      style={{ minHeight: '75vh' }}
    >
      <h3>{photo.title}</h3>
      <img
        src={`${process.env.REACT_APP_API}/photo-sharing${photo.url}`}
        className="img-fluid mb-4"
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
