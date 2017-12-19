/**
 * 系统提示窗口
 * @param param:{
 *
 * ---必选---
 *  obj: object                 窗口容器，容器标签需设置 id
 *
 * ---可选---
 *  position: {x:'', y:''}      窗口位置，x(left, right) 为横向，y(top, bottom) 为纵向，默认 {x: 'right', y: 'bottom'}
 *  width: num                  窗口放大时宽度，默认 650，
 *  height: num                 窗口放大时宽度，默认 180，
 *  originSize: 'max' OR 'min'  初始窗口尺寸，默认 'min'
 *  header: string              窗口标题，默认 '消息提醒'
 *  columns: array              表头，一维数组
 *  data: array                 内容体，二维数组
 *  fun:回调函数
 *
 * ---方法---
 *  setTbody(data)              可以在回掉函数中使用这个方法更新内容体数据
 * }
 *
 */

function SystemAlert(param) {
  var _this = this
  this.position = param.position || {x: 'right', y: 'bottom'}
  this.position.x = this.position.x || 'right'
  this.position.y = this.position.y || 'bottom'
  this.pos = this.position.x + '-' + this.position.y
  this.width = param.width || '650'
  this.height = param.height || '180'
  this.originSize = param.originSize || 'min'
  this.header = param.header || '消息提醒'
  this.data = param.data
  this.sizeBtn = null
  this.table = null

  this.init = function () {
    this.styleReset()

    // 右上角缩放按钮，控制自身及 wrap 的 class 属性
    this.sizeBtn = param.obj.querySelector('.size')
    this.sizeBtn.onclick = function () {
      var thisClassName = this.className
      var systemAlertClassName = param.obj.className
      if (this.classList.contains('max')) {
        this.className = thisClassName.replace('max', 'min')
        param.obj.className = systemAlertClassName.replace('min', 'max')
      } else {
        this.className = thisClassName.replace('min', 'max')
        param.obj.className = systemAlertClassName.replace('max', 'min')
      }
      _this.objectsPosition()
    }

    this.objectsPosition()
    if (param.fun) param.fun()
  }

  this.styleReset = function () {
    var style = document.querySelector('style')
    // 窗口位置
    style.innerHTML += '#' + param.obj.id + '.system-alert{' + this.position.x + ':0;}'
    // 针对每个窗口 id 来设置独立的尺寸大小
    style.innerHTML += '#' + param.obj.id + '.system-alert.max{width:' + this.width + 'px;height:' + this.height + 'px;}'
    document.head.appendChild(style)
    param.obj.className += 'system-alert ' + this.originSize + ' ' + this.pos
    this.headerReset()
    this.mainReset()
  }

  this.headerReset = function () {
    var sizeBtnClass = this.originSize == 'min' ? 'max' : 'min'
    var _html = '<div class="header">' + this.header + '<a class="size ' + sizeBtnClass + '"></a></div>'
    param.obj.innerHTML += _html
  }

  this.mainReset = function () {
    this.setTable()
    this.setThead()
    this.setTbody(this.data)
  }

  this.setTable = function () {
    var _html = '<div class="main"><table><thead></thead><tbody></tbody></table></div>'
    param.obj.innerHTML += _html
    this.table = param.obj.querySelector('table')
  }

  this.setThead = function () {
    if (param.columns) {
      var _html = '<tr>'
      param.columns.forEach(function (value) {
        _html += '<th>' + value + '</th>'
      })
      _html += '</tr>'
      this.table.querySelector('thead').innerHTML += _html
    }
    return
  }

  this.setTbody = function (data) {
    var _html = ''
    if (!data || data.length < 1) {
      _html += '<tr><td colspan="6" style="text-align: center;border-bottom: none;color:red;">暂无数据</td></tr>'
    } else {
      data.forEach(function (value) {
        _html += '<tr>'
        value.forEach(function (tdval) {
          _html += '<td>' + tdval + '</td>'
        })
        _html += '</tr>'
      })
    }
    this.table.querySelector('tbody').innerHTML = _html
  }

  // 窗口位置，当窗口为多个时，按创建顺序堆叠
  this.objectsPosition = function () {
    var objects = document.getElementsByClassName(this.pos)
    var y = 0
    for (var i = 0; i < objects.length; i++) {
      objects[i].style[this.position.y] = y + 'px'
      y += objects[i].clientHeight + 1
    }
  }

  this.init()
}

// 插入 SystemAlert 样式表
(function () {
  var style = document.createElement('style')
  style.innerHTML = '.system-alert *{margin:0;padding:0}.system-alert{position:absolute;line-height:25px;background:#fff;border:1px solid #ccc;overflow:hidden;font-size:15px;z-index:1465798305}.system-alert .header{padding:0 30px 0 5px;height:25px;line-height:25px;font-weight:bold;background:#efefef}.system-alert .header input[type="checkbox"]{vertical-align:text-top;width:16px;height:16px;margin-left:10px}.system-alert .header .size{position:absolute;top:7px;right:7px;width:12px;height:12px;background-repeat:no-repeat;cursor:pointer}.system-alert .header .size{background-image:url(data:image/gif;base64,R0lGODlhDAAMAJEAAAAAAP///2Jh2P///yH5BAEAAAMALAAAAAAMAAwAAAIdnI5pwe3HEgqQSmHjwxU32G0ZJXbX6IjpY1zIUAAAOw==)}.system-alert .header .size.min{background-image:url(data:image/gif;base64,R0lGODlhDAAMAJEAAAAAAP///2Jh2P///yH5BAEAAAMALAAAAAAMAAwAAAIbnI5pwe3nYoCy0ToFZrfClGQZqHWSGQkGiQwFADs=)}.system-alert .main{overflow-x:hidden;overflow-y:auto;position:absolute;top:25px;bottom:0;left:0;right:0;border-top:1px solid #ccc}.system-alert table{width:101%;background:#fff;border-collapse:collapse}.system-alert table thead tr{background:#f7f7f7}.system-alert table th,.system-alert table td{height:25px;line-height:25px;padding:0 7px;text-align:left;border-bottom:1px solid #BBB;border-right:1px solid #BBB}.system-alert table th{font-weight:bold;background-color:#f9f9f9}.system-alert table td{background-color:#fff}'
  document.head.appendChild(style)
})()