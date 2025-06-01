export const savePhoneToLocalStorage = (phone) => {
  localStorage.setItem('phone', phone);
};

export const getPhoneFromLocalStorage = () => {
  return localStorage.getItem('phone');
};
