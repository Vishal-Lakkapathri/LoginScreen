import usersList from './data';


export const fetchUsers = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(usersList.user);
    }, 5000);
  })