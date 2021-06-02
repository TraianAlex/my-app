import firebase from '../firebase';

export const uploadFile = async (url, formData) => {
  const user = firebase.auth().currentUser;

  if (!user) {
    console.log('Error: trying to make an authed request while not logged in');
    return [];
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_PHOTOS_SHARING}${url}`,
    {
      method: 'post',
      body: formData,
      headers: { AuthToken: await user.getIdToken() },
    },
  );

  return response;
};
