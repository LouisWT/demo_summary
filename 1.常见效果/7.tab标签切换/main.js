window.onload = function () {
  let tabList = document.getElementById('tab-list');
  const tabs = tabList.children;
  // 循环播放的第一个
  const firstTab = tabs[0];
  // 当前选择的tab
  let currentTab = tabs[0];
  // 循环播放的下一个
  let nextTab;
  // 延迟切换
  let timer;
  // 防止在选择 tab 时，还在自动切换
  let mouseInTab = false;

  tabList.addEventListener('mouseenter', function () {
    mouseInTab = true;
  });

  tabList.addEventListener('mouseleave', function () {
    mouseInTab = false;
  })

  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    tab.addEventListener('mouseenter', function () {

      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        currentTab.classList.remove('select');
        tab.classList.add('select');
        const prevContent = document.getElementById(currentTab.dataset.id);
        prevContent.classList.add('none');
        const content = document.getElementById(tab.dataset.id);
        content.classList.remove('none');
  
        currentTab = tab;
      }, 300);
    });
  }

  setInterval(() => {
    if (mouseInTab) {
      return;
    }
    currentTab.classList.remove('select');
    if (currentTab.nextElementSibling) {
      nextTab = currentTab.nextElementSibling;
    } else {
      nextTab = firstTab;
    }
    nextTab.classList.add('select');
    const prevContent = document.getElementById(currentTab.dataset.id);
    prevContent.classList.add('none');
    const content = document.getElementById(nextTab.dataset.id);
    content.classList.remove('none');

    currentTab = nextTab;
  }, 2000);
}