$(function () {
    // BURGER MENU & OVERLAY
    $('.burger__menu').on('click', function (e) {
        e.preventDefault()
      })
      setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__toprow').hasClass('header__toprow--open') === false) {
          $('.burger__menu').addClass('burger__menu--follow')
        } else {
          $('.burger__menu').removeClass('burger__menu--follow')
        }
      }, 0)
      $('.burger__menu, .overlay, .header__toprow a').on('click', function (e) {
        $('.header__toprow').toggleClass('header__toprow--open')
        $('.overlay').toggleClass('overlay--show')
        $('.burger__menu').toggleClass('burger__menu--close')
      })

      // FOOTER SLIDE
    $('.footer__top-block_title--slide').on('click', function () {
      $(this).next().slideToggle()
      $(this).toggleClass('footer__top-block_title--slide_open')
    })
})