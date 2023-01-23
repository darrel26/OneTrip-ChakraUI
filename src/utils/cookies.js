const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const getUsernameUrl = () => {
  const usernameFromCookie = getCookie('username').split(' ');
  if (usernameFromCookie.length > 1) {
    return `https://bit.ly/${getCookie('username').split(' ').join('-')}`;
  }
  return `https://bit.ly/${getCookie('username')}`;
};

export { getCookie, getUsernameUrl };
