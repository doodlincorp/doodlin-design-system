const debounce = (fn: Function, delay: number) => {
  let id: number | undefined;
  return () => {
    const later = () => {
      id = undefined;
      fn();
    };
    window.clearTimeout(id);
    id = window.setTimeout(later, delay);
  };
};

export { debounce };
