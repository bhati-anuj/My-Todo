const userLocalStorage = () => {
  const user = localStorage.getItem("User");
  try {
    if (user) {
      return JSON.parse(user);
    }
  } catch (error) {
    return [];
  }
  return [];
};

export default userLocalStorage;
