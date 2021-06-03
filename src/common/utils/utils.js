export const handleResponse = (response) => {
  return response.json().then((json) => {
    if (response.ok) {
      return json;
    } else {
      let error = Object.assign({}, json, {
        status: response.status,
        statusText: response.statusText,
      });
      return Promise.reject(error);
    }
  });
};
