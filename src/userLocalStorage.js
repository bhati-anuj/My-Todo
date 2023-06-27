const userLocalStorage = () => {
  const user = localStorage.setItem("User");
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
