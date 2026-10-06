(function () {
  var form = document.getElementById('q8n4-find')
  var input = document.getElementById('q8n4-q')
  var empty = document.getElementById('q8n4-empty')
  if (!form || !input) return

  var nodes = document.querySelectorAll('[data-q8n4-block]')

  form.addEventListener('submit', function (event) {
    event.preventDefault()
  })

  function apply() {
    var query = input.value.trim().toLowerCase()
    var shown = 0
    nodes.forEach(function (node) {
      var hit = !query || node.textContent.toLowerCase().indexOf(query) !== -1
      node.classList.toggle('q8n4-off', !hit)
      if (hit) shown += 1
    })
    if (empty) empty.hidden = !query || shown > 0
  }

  input.addEventListener('input', apply)

  var tags = document.querySelectorAll('.q8n4-tags a')
  tags.forEach(function (link) {
    link.addEventListener('click', function () {
      input.value = ''
      apply()
    })
  })
})()
