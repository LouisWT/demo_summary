// 使用 JS 对象模拟 DOM 对象

class Element {
  /**
   * 
   * @param {String} tag 标签名 如 div 
   * @param {Object} props 传入的attribute
   * @param {Array} children 子元素 [Element1, 'text' ] 可以是 Element 的实例或者是文字
   * @param {String} key 用于区分同级元素的 Key
   */
  constructor(tag, props, children, key) {
    this.tag = tag;
    this.props = props;
    if (Array.isArray(children)) {
      this.children = children;
    } else if (typeof children === 'string') {
      this.key = children
      this.children = null;
    }
    if (key) {
      this.key = key;
    }
  }

  render() {
    let root = this._createElement(
      this.tag,
      this.props,
      this.children,
      this.key,
    )
    document.body.appendChild(root)
    return root;
  }

  _createElement(tag, props, children, key) {
    let el = document.createElement(tag);
    Object.keys(props).forEach((key) => {
      el.setAttribute(key, props[key]);
    })
    if (key) {
      el.setAttribute('key', key);
    }
    if (children) {
      children.forEach(element => {
        let child;
        if (element instanceof Element) {
          child = this._createElement(
            element.tag,
            element.props,
            element.children,
            element.key,
          )
        } else {
          child = document.createTextNode(element);
        }
        el.appendChild(child);
      })
    }
    return el;
  }
}

module.exports = Element;