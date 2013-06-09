/* ********************************************************************
 * The Mighty ScrollObject
 *   - Don't edit this if you know what's good for ya!
 *
 */
function scrollObject(main, width, height, direct, pause, speed) {
  var self = this;
  this.main = main;
  this.width = width;
  this.height = height;
  this.direct = direct;
  this.pause = pause;
  this.speed = Math.max(1.001, Math.min((direct == "up" || direct == "down") ? height : width, speed));
  this.slope = (direct == "up" || direct == "left") ? 1 : -1;
  this.prev = this.offset = 0;
  this.curr = 1;
  this.mouse = false;
  this.scroll = function() {
    this.main = document.getElementById(this.main);
    this.main.style.overflow = "hidden";
    this.main.style.position = "relative";
    this.main.style.width = this.width + "px";
    this.main.style.height = this.height + "px";
    var b = [], c;
    while (this.main.firstChild) if ((c = this.main.removeChild(this.main.firstChild)).nodeName == "DIV") b.push(c);
    for (var x = 0; x < b.length; x++) {
      var table = document.createElement('table');
          table.cellPadding = table.cellSpacing = table.border = "0";
          table.style.position = "absolute";
          table.style.left = table.style.top = "0px";
          table.style.width = table.style.height = "100%";
          table.style.overflow = table.style.visibility = "hidden";
        var tbody = document.createElement('tbody');
          var tr = document.createElement('tr');
            var td = document.createElement('td');
              while (b[x].firstChild)
                  td.appendChild(b[x].removeChild(b[x].firstChild));
              tr.appendChild(td);
            tbody.appendChild(tr);
          table.appendChild(tbody);
      this.main.appendChild(table);
    } b = c = null;
    if (this.main.childNodes.length > 1) {
      this.main.onmouseover = function() { self.mouse = true; };
      this.main.onmouseout = function() { self.mouse = false; };
      setInterval(function() {
        if (!self.offset && self.scrollLoop()) self.main.childNodes[self.curr].style.visibility = "visible";
      }, this.pause);
    } this.main.childNodes[this.prev].style.visibility = "visible";
  };
  this.scrollLoop = function() {
    if (!this.offset) {
      if (this.mouse) return false;
      this.offset = (this.direct == "up" || this.direct == "down") ? this.height : this.width;
    } else this.offset = Math.floor(this.offset / this.speed);
    if (this.direct == "up" || this.direct == "down") {
      this.main.childNodes[this.curr].style.top = (this.offset * this.slope) + "px";
      this.main.childNodes[this.prev].style.top = ((this.offset - this.height) * this.slope) + "px";
    } else {
      this.main.childNodes[this.curr].style.left = (this.offset * this.slope) + "px";
      this.main.childNodes[this.prev].style.left = ((this.offset - this.width) * this.slope) + "px";
    }
    if (!this.offset) {
      this.main.childNodes[this.prev].style.visibility = "hidden";
      this.prev = this.curr;
      if (++this.curr >= this.main.childNodes.length) this.curr = 0;
    } else setTimeout(function() { self.scrollLoop(); }, 30);
    return true;
  };
  if (window.addEventListener) {
    window.addEventListener('load', function() { self.scroll(); }, false); 
  } else if (window.attachEvent)
    window.attachEvent('onload', function() { self.scroll(); });
}