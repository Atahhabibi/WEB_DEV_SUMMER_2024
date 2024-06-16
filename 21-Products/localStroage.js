const setToStorage = (list) => {
  localStorage.setItem("list", JSON.stringify(list));
};

const getFromStorage = () => {
  return JSON.parse(localStorage.getItem("list")) || [];
};

export { setToStorage, getFromStorage };
