// 进入全屏
const requestFullScreen = obj => {
  const requestMethod =
    obj.requestFullScreen ||
    obj.webkitRequestFullScreen ||
    obj.mozRequestFullScreen ||
    obj.msRequestFullScreen;
  if (requestMethod) {
    requestMethod.call(obj);
  } else if (typeof window.ActiveXObject !== "undefined") {
    // 低版本IE兼容，不推荐
    const wscript = new ActiveXObject("WScript.Shell");
    if (wscript !== null) wscript.SendKeys("{F11}");
  }
};

// 退出全屏
const exitFullScreen = () => {
  const exitMethod =
    document.exitFullscreen ||
    document.webkitExitFullscreen ||
    document.mozCancelFullScreen ||
    document.msExitFullscreen;
  if (exitMethod) {
    exitMethod.call(document);
  } else if (typeof window.ActiveXObject !== "undefined") {
    const wscript = new ActiveXObject("WScript.Shell");
    if (wscript !== null) wscript.SendKeys("{F11}");
  }
};
