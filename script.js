var className = 'lifting'
var selectors = ['body', 'html']

selectors.forEach(function(selector) {
  document.querySelector(selector).classList.remove(className)
})
