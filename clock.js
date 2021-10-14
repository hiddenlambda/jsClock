clock = ((refreshRate, options, size) => {
if (typeof clock !== 'undefined' && clock.hasOwnProperty('stop')) {clock.stop()}
return {
  setup: function() {
    clockElemHtml = '<div id = "clock" style="font-size: ' + size + 'px;"/>'
    if (!document.getElementById('clock')) {
      document.body.innerHTML = clockElemHtml;
    } else {
      document.getElementById('clock').outerHTML = clockElemHtml;
    }
  },
  stop: function() {clearInterval(this.t)},
  start: function(){this.stop(); this.setup(); this.t = setInterval(this.refresh.bind(this), refreshRate);},
  refresh: function() {document.getElementById('clock').innerText = this.getTime()},
  getTime: function() {return (new Date()).toLocaleString("en-US", options)}
}})(1000, { hour: 'numeric', minute: 'numeric', second: 'numeric'}, 100);

clock.start();
