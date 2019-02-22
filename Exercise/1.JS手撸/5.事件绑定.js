let EventUtil = {
  addHandler(elm, type, fn) {
    if (elm.addEventListener) {
      elm.addEventListener(type, fn, false);
    } else if (elm.addEvent) {
      elm.addEvent('on' + type, fn);
    } else {
      elm['on' + type] = fn;
    }
  },
  removeHandler(elm, type, fn) {
    if (elm.removeEventListener) {
      // 第三个参数一样是 useCapture
      elm.removeEventListener(type, fn, false)
    } else if (elm.detachEvent) {
      elm.detachEvent('on' + type, fn);
    } else {
      elm['on' + type] = null;
    }
  },
  getEvent(event) {
    return event ? event : window.event;
  },
  getTarget(event) {
    return event.target || event.srcElement;
  },
  preventDefault() {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  stopPropagation() {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  }
}