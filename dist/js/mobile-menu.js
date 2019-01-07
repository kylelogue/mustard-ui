// toggle mobile menu
$('.mobile-menu-toggle').on('click', function(e) {
    e.preventDefault()
    e.stopPropagation()
    $('.mobile-menu').show()
})

$('body').on('click', function() {
    $('.mobile-menu').hide()
})