!function () {
  let a = document.createElement('a');
  let path = location.pathname;
  let param = {
    href: 'https://ziphan.github.io',
    target: '_blank',
    htmlContent: '<svg width="50" height="50" viewBox="0 0 100 100" style="fill:#ef5252;font-size:40px;position:fixed;top:0;border:0;left:0;"><path d="M0,0 L0,100 L100,0 Z"></path><text x="20" y="45" fill="#fff">Z</text></svg>',
  };
  a.setAttribute('href', param.href);
  a.setAttribute('target', param.target);
  a.innerHTML = param.htmlContent;
  document.body.appendChild(a);
}();