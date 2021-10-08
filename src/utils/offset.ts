const getOffset = (el: HTMLElement) => {
  let _el = el;
  let _x = 0;
  let _y = 0;
  while (_el && !isNaN(_el.offsetLeft) && !isNaN(_el.offsetTop)) {
    _x += _el.offsetLeft - _el.scrollLeft;
    _y += _el.offsetTop - _el.scrollTop;
    _el = _el.offsetParent as HTMLElement;
  }
  return { top: _y, left: _x };
};

export { getOffset };
