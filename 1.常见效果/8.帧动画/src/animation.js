'use strict';

// 初始化状态
const STATE_INITIAL = 0;
// 开始状态
const STATE_START = 1;
// 结束状态
const STATE_STOP = 2;

class Animation {
  constructor() {
    this.taskQuene = [];
    this.index = 0;
    this.state = STATE_INITIAL;
  }
  /**
   * 预加载图片
   * @param {[String]} imglist 
   */
  loadImage(imglist) {
    
  }
  /**
   * 添加一个异步定时任务，通过定时改变图片背景位置，实现帧动画
   * @param {DOMElement} ele 
   * @param {[String]} positions 
   * @param {String} imgUrl 
   */
  changePosition(ele, positions, imgUrl) {

  }
  /**
   * 添加一个异步定时任务，通过定时改变 image 标签的 src 属性，实现帧动画
   * @param {DOMElement} ele 
   * @param {[String]} imglist 
   */
  changeSrc(ele, imglist) {

  }
  /**
   * 高级用法，添加一个异步定时执行任务，该任务自定义动画每帧执行的任务函数
   * @param {function} taskFn 
   */
  enterFrame(taskFn) {

  }
  /**
   * 添加一个同步任务，可以在上一任务完成后执行回调函数
   * @param {function} callback 
   */
  then(callback) {

  }
  /**
   * 开始执行任务 interval 是异步定时任务的执行间隔
   * @param {Number} interval 
   */
  start(interval) {

  }
  /**
   * 添加一个同步任务，该任务是回退到上一任务
   * 实现重复上一任务的效果
   * 可以定义重复次数
   * @param {Number} times 
   */
  repeat(times) {

  }
  /**
   * 添加一个同步任务，相当于 repeat(), 无限循环上一次任务
   */
  repeatForever() {

  }
  /**
   * 当前任务执行结束后到下一任务开始前的等待时间
   * @param {Number} time 
   */
  wait(time) {

  }
  /**
   * 暂停当前的异步定时任务
   */
  pause() {

  }
  /**
   * 重新执行上一次暂停的异步任务
   */
  restart() {

  }
  /**
   * 释放资源，比如定时器
   */
  dispose() {

  }
}