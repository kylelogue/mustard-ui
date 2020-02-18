$(document).ready(function() {
    // Mobile Menu Toggle
    $('.mobile-menu-toggle').on('click', function(e) {
        e.preventDefault()
        e.stopPropagation()
        $('.mobile-menu').show()
    })
    $('body').on('click', function() {
        $('.mobile-menu').hide()
    })

    // Reset initial header height
    $('header').height(window.innerHeight - 60)

    // Home Page Scroll Buttons
    $('.scroll-down, .get-started').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate({ scrollTop: $('section:first-of-type').offset().top }, 300)
    })

    // Sidebar Accordian
    $('.sidebar-category').on('click', function() {
        $(this).toggleClass('active')
    })

    // Modal Display
    $('.show-modal').on('click', function() {
        $('.modal-mask, .modal').fadeIn(200)
    })
    $('.modal-mask, .modal-save').on('click', function() {
        $('.modal-mask, .modal').fadeOut(100)
    })

    // Tabs
    $('.tab').on('click', function(e) {
        e.preventDefault()
        $(this).closest('.tabs').find('.tab').removeClass('active')
        $(this).addClass('active')
    })
})
