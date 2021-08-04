$(function(){
  $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.menu').toggleClass('is-active');
  });

  $('.menu__item').click(function(){
    $('.burger-btn').toggleClass('close');
    $('.menu').toggleClass('is-active');
    var id = $(this).attr('name');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position 
    }, 500);
  });

  $('#image-btn').on('click',function(){
    $('.enlarge-container').toggleClass('is-active');
  });

  $('.enlarge-container').click(function(){
    $('.enlarge-container').toggleClass('is-active');
  });

  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      $answer.slideUp();
      
      $(this).find('span').text('+');
      
    } else {
      $answer.addClass('open'); 
      $answer.slideDown();
      
      $(this).find('span').text('-');
    }
  });

  $('header a').click(function(){
    var id = $(this).attr('name');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position 
    }, 500);
  });

  $('footer img').click(function(){
    $('html, body').animate({ 
      'scrollTop': 0 
    }, 500);
  });

  $('.learn-more').click(function(){
    var position = $(About).offset().top
    $('html, body').animate({ 
      'scrollTop': position
    }, 500);
  });

  $('form').submit(function() {
    var nameItem = $('.contact-name').val();
    var emailItem = $('.contact-email').val();
    var messageItem = $('.message').val();
    if (nameItem == '') {
      $('#error-message').text('write your name!');
    } else {
      $('#error-message').text('');
    }

    if (emailItem == '') {
      $('#error-message1').text('write your email!');
    } else {
      $('#error-message1').text('');
    }

    if (messageItem == '') {
      $('#error-message2').text('write the message!');
    } else {
      $('#error-message2').text('');
    }
    
    return false;
  });

  var fadeIn = $('.fade-in');
  $(window).on('scroll', function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
  
});
  