$(document).ready(function() {
  $('.parallax').parallax();
  $(".button-collapse").sideNav();
  var options = [{
    selector: '.animar1',
    offset: 0,
    callback: function() {
      $('.animar1').animate({
        left: '20px',
        height: '200px',
        width: '200px'
      });
    }},
  {selector: '.animar2',
    offset: 0,
    callback: function() {
      $('.animar2').animate({right: 40});
    }},
  ];
  Materialize.scrollFire(options);
});





$(document).ready(function() {
  $('.slider').slider({ height: 700 });

  $('#typed').typed({
    strings: ['VANESSA MENDOZA INOÑAN'],
    typeSpeed: 30,
    backDelay: 500,
    loop: false,
    loopCount: false,
    callback: function() {
      foo();
    }
  });
  function foo() {
    console.log('Callback');
  }


  $("#Arriba").hide(); //ocultamos el boton para el primer ejemplo
        $('#Abajo').fadeIn();
        $('#Arriba1').fadeOut();

		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 50) {
					$('#Arriba1').fadeIn();
				} else {
					$('#Arriba1').fadeOut();
				}
			});
			$('#Arriba1').click(function () {
				$('body,html').animate({scrollTop: 0}, 1500);
				return false;
			});

			$('#Abajo').click(function () {
				$('body,html').animate({scrollTop: $(document).height()}, 1500); //obtenemos el alto del documento
				return false;
			});
		});
});

$('.parallax').parallax();
  var options = [
  {selector: '.animar', offset: 0, callback: function() {
    $('.animar').animate({right: 30});
  } },
  ];
  Materialize.scrollFire(options);






  var options = [
    {selector: '.contenido1', offset: 0, callback: function() {
      $('.contenido1').addClase('animated jello');
    } },
    ];
    Materialize.scrollFire(options);