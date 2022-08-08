export const saveToLocalStorage = (props) => {
    try {
      localStorage.setItem('persist:maestro-haryor', JSON.stringify(props));
    } catch (e) {
      console.error(e);
    }
  };