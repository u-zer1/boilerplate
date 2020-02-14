export const loadStore = () => {
  try {
    const serializedStore = localStorage.getItem('store');
    if (serializedStore === null) {
      return undefined;
    }
    return JSON.parse(serializedStore);
  } catch (err) {
    return undefined;
  }
};

export const saveState = store => {
  try {
    const serializedStore = JSON.stringify(store);
    localStorage.setItem('store', serializedStore);
  } catch (err) {
    new Error();
  }
};
