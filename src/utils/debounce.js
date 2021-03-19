const debounce = (func, wait = 5000) => {
  let timeout = null;

  const cleanup = () => {
    if (timeout) clearTimeout(timeout);
  };

  return (...args) => {
    cleanup();

    timeout = setTimeout(func.bind(null, ...args), wait);
  };
};

export default debounce;
