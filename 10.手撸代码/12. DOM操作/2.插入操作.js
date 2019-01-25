// 1. 页面上有一个无序列表，<ul id="list"></ul>，要往列表中插入 3 个 li 元素，列表项的文本内容是列表项的插入顺序，取值 1 2 3，在点击后，需要 alert 其中的内容，怎么用JS实现


(() => {
  let container = document.getElementById('list');
  if (!container) {
    return;
  }

  // 1. 不重复进行DOM操作
  let fragment = document.createDocumentFragment();
  // 2. 使用 let 绑定作用域
  for (let i = 0; i < 3; i++) {
    let item = document.createElement('li');
    item.innerHTML = i + 1;
    fragment.appendChild(item);
  }
  container.appendChild(fragment);

  container.addEventListener('click', (event) => {
    if (event.srcElement.nodeName.toLowerCase() === 'li') {
      alert(event.srcElement.innerHTML)
    }
  })
})()

// 2. 数据量变大之后怎么办，比如 30000 个
// 按需加载，使用 requestAnimationFrame

(() => {
  let container = document.getElementById('list');
  if (!container) {
    return;
  }

  container.addEventListener('click', (event) => {
    if (event.srcElement.nodeName === 'LI') {
      alert(event.srcElement.innerHTML)
    }
  })

  let total = 30000;
  let batchSize = 10;
  let start = 0;

  function appendItems() {
    let fragment = document.createDocumentFragment();
    let end = Math.min(start + batchSize, total);
    for (let i = start; i < end; i++) {
      let item = document.createElement('li');
      item.innerHTML = i + 1;
      fragment.appendChild(item);
    }
    container.appendChild(fragment);

    start += batchSize;
    doBatchAppend();
  }

  function doBatchAppend() {
    if (start < total) {
      window.requestAnimationFrame(appendItems)
    }
  }

})()