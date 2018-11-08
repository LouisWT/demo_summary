'use strict';

/**
 * 预加载图片
 * 图片数组
 * 回调函数
 * 超时时长
 * @param {[String]} images 
 * @param {function} callback 
 * @param {Number} timeout 
 */
function loadImage(images, callback, timeout) {
  // 加载完成的图片的计数器
  let count = 0;
  // 全部图片加载成功的标志位
  let success = true;
  // 超时 timer 的 id
  let timeoutId = 0;
  // 是否加载超时
  let isTimeout = false;

  // 对图片数组进行遍历
  for (let key in images) {
    // 过滤 prototype 属性
    if (!images.hasOwnProperty(key)) {
      continue;
    }
    // 获取每个图片元素
    // 期望格式 object:{ src:xxx }
    let item = images[key];
    if (!item || !item.src) {
      continue;
    }
    if (typeof item === 'string') {
      item = images[key] = {
        src: item
      };
    }
    // 计数
    count += 1;
    // 设置图片元素 id
    item.id = '__img__' + key + getId();
    // 设置图片元素 img ，是一个 Image 对象
    item.img = window[item.id] = new Image();
    doLoad(item);
  }

  // 如果计数为0，调用回调函数
  if (!count) {
    callback(success);
  }
  
  if (timeout) {
    timeoutId = setTimeout(ontimeout, timeout);
  }

  /**
   * 进行图片加载
   * @param {Object} item 
   */
  function doLoad(item) {
    item.status = 'loading';
    const img = item.img;

    // 加载成功
    img.onload = function () {
      success = success & true;
      item.status = 'loaded';
      done();
    }
    // 加载失败
    img.onerror = function () {
      success = false;
      item.status = 'error';
      done();
    }

    // 加载图片
    img.src = item.src;
  }

  /**
   * 每张图片加载完成的回调函数
   */
  function done() {
    img.onload = img.onerror = null;
    try {
      delete window[item.id];
    } catch (e) {}

    // 图片加载完成，计数器减一
    // 所有图片加载完成，并且没有超时
    // 清除超时计数器，执行回调函数
    if (!--count && !isTimeout) {
      clearTimeout(timeoutId);
      callback(success);
    }
  }

  function ontimeout() {
    isTimeout = true;
    callback(false)
  }
}

let __id = 0;

function getId() {
  return ++__id;
}


export default loadImage;