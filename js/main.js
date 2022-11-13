$(document).ready(function() {

	//Модальное окно
	$(".popup-form").magnificPopup({
		type: 'inline',
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
	});

	//Валидация
	jQuery.validator.addMethod("checkMask", function(value, element) {
	     return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
	});
	$('.phone-mask').mask("+7(999)999-9999", {autoclear: false});



	$('#form-call-back').validate({
	  rules: {
	    phone: {
	      checkMask: true
	    }
	  },
	  messages: {
	    phone: {
	      checkMask: "Введите полный номер телефона"
	    }
	  },
	  submitHandler: function() {
	  	var phone = $("#form-call-back .tele").val();
	  	var name = $("#form-call-back .name").val();
	    var type = $("#form-call-back .type-form").val();
	    if (name == "")
	    {
	      $('#form-call-back .name').css('borderColor','#FF5252').fadeIn(200);
	        send_comment = '0';
	    }
	    else{
	      $('#form-call-back .name').css('borderColor','#DEDEDE').fadeIn(200);
	      send_comment = '1';
	    
			$.ajax({
			  type: 'POST',
			  url: '../call/call.php',
			  data: "phone=" + phone + "&name=" + name + "&type=" + type,
			  dataType: "html",
			  success: function(data) {
			    $('#call-back .form-hidd').fadeOut(200, function() {  
			      $('#call-back .form-success').fadeIn(200);
			    });
			    setTimeout(function() {
			      $.magnificPopup.close();
			      $('#call-back .reset').val('');
			      $('#call-back .form-success').fadeOut(200, function() {  
				      $('#call-back .form-hidd').fadeIn(200);
				    });
			    }, 10000);
				}
			});
			}
	  }
	});



	$('#form-modal-home').validate({
	  rules: {
	    phone: {
	      checkMask: true
	    }
	  },
	  messages: {
	    phone: {
	      checkMask: "Введите полный номер телефона"
	    }
	  },
	  submitHandler: function() {
	  	var phone = $("#form-modal-home .tele").val();
	  	var name = $("#form-modal-home .name").val();
	    var type = $("#form-modal-home .type-form").val();
	    if (name == "")
	    {
	      $('#form-modal-home .name').css('borderColor','#FF5252').fadeIn(200);
	        send_comment = '0';
	    }
	    else{
	      $('#form-modal-home .name').css('borderColor','#DEDEDE').fadeIn(200);
	      send_comment = '1';
	    
			$.ajax({
			  type: 'POST',
			  url: '../call/call.php',
			  data: "phone=" + phone + "&name=" + name + "&type=" + type,
			  dataType: "html",
			  success: function(data) {
			    $('#modal-home .form-hidd').fadeOut(200, function() {  
			      $('#modal-home .form-success').fadeIn(200);
			    });
			    setTimeout(function() {
			      $.magnificPopup.close();
			      $('#modal-home .reset').val('');
			      $('#modal-home .form-success').fadeOut(200, function() {  
				      $('#modal-home .form-hidd').fadeIn(200);
				    });
			    }, 10000);
				}
			});
			}
	  }
	});




	$('#form-modal-services').validate({
	  rules: {
	    phone: {
	      checkMask: true
	    }
	  },
	  messages: {
	    phone: {
	      checkMask: "Введите полный номер телефона"
	    }
	  },
	  submitHandler: function() {
	  	var name = $("#form-modal-services .name").val();
	  	var phone = $("#form-modal-services .tele").val();
	  	var auto = $("#form-modal-services .auto").val();
	    var type = $("#form-modal-services .type-form").val();

	    if (name == "")
	    {
	      $('#form-modal-services .name').css('borderColor','#FF5252').fadeIn(200);
	      send_name = '0';
	    }
	    else{
	      $('#form-modal-services .name').css('borderColor','#DEDEDE').fadeIn(200);
	      send_name = '1';
	    }

	    if (auto == "")
	    {
	      $('#form-modal-services .auto').css('borderColor','#FF5252').fadeIn(200);
	      send_auto = '0';
	    }
	    else{
	      $('#form-modal-services .auto').css('borderColor','#DEDEDE').fadeIn(200);
	      send_auto = '1';
	    }

	    if (send_name == '1' && send_auto == '1'){
			$.ajax({
			  type: 'POST',
			  url: '../call/call-work.php',
			  data: "name=" + name + "&auto=" + auto + "&phone=" + phone + "&type=" + type,
			  dataType: "html",
			  success: function(data) {
			    $('#modal-services .form-hidd').fadeOut(200, function() {  
			      $('#modal-services .form-success').fadeIn(200);
			    });
			    setTimeout(function() {
			      $.magnificPopup.close();
			      $('#modal-services .reset').val('');
			      $('#modal-services .form-success').fadeOut(200, function() {  
				      $('#modal-services .form-hidd').fadeIn(200);
				    });
			    }, 10000);
				}
			});
		}
	  }
	});

	var popup = $('#wrap-form-work');
	$('.btn-click').on('click', function(){
		var item = $(this).closest('.work-item'),
				title = item.find('h3');
		popup.find('#title').text(title.text());
		popup.find('[name="type-form"]').val(title.text());		
	});

	$('.btn-click-slide').on('click', function(){
		var item2 = $(this).closest('.head-content'),
				title2 = item2.find('h1');
		popup.find('#title').text(title2.text());
		popup.find('[name="type-form"]').val(title2.text());		
	});


	//Меню при скролле
	$(window).scroll(function() {
	var w = $(window).width();
	var scrollTop = $(window).scrollTop();

	if(w > 767) {
    if (scrollTop > 1) {
      $(".header").addClass("menu-fixed");
    } else {
      $(".header").removeClass("menu-fixed");
    }
  }
  else{
  	$(".header").removeClass("menu-fixed");
  }
  });


 //Плавный скролл до якоря
	$("a.ancLinks").click(function () { 
	  var elementClick = $(this).attr("href");
	  var destination = $(elementClick).offset().top;
	  $('html,body').animate( { scrollTop: destination }, 1100 );
	  return false;
	});


	//Вверх
	$('.toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});



	if($(window).width() > 768) {
	    	var height = $(window).height() + 5;
	      var unitHeight = parseInt(height) + 'px';
	      $('.slided').css('height',unitHeight);

	      

	      $(window).on('resize', function() {
	        var height = $(window).height() + 5;
	        var unitHeight = parseInt(height) + 'px';
	        $('.slided').css('height',unitHeight);
	      });
			}


	if($(window).width() > 768) {
	    	var height = $(window).height() + 5;
	      var unitHeight = parseInt(height) + 'px';
	      $('.homepage-hero-module').css('height',unitHeight);

	      var videobackground = new $.backgroundVideo($('.homepage-hero-module'), {
	        "align": "centerXY",
	        "width": 1920,
	        "height": 1080,
	        "path": "img/video/",
	        "filename": "video-bg",
	        "types": ["mp4","ogg","webm"],
	        "preload": true,
	        "autoplay": true,
	        "loop": true
	      });

	      $(window).on('resize', function() {
	        var height = $(window).height() + 5;
	        var unitHeight = parseInt(height) + 'px';
	        $('.homepage-hero-module').css('height',unitHeight);
	      });
			}

});