$(document).ready(function(){
  $('#slider1').anythingSlider({
    width: 600,
    heigth: 350,
    startStopped: true,
    resizeContent: false,
    theme: 'metallic',
    themeDirectory: 'css/theme-metallic.css',
  }).anythingSliderFx({
     '.fade' : [ 'fade' ],
    inFx: {
      '.textSlide h3'  : { opacity: 1, top  : 0, time: 400, easing : 'easeOutBounce' },
      '.textSlide li'  : { opacity: 1, left : 0, time: 400 },
      '.textSlide img' : { opacity: 1, time: 400 },
      '.quoteSlide'    : { top : 0, time: 400, easing : 'easeOutElastic' },
      '.expand'        : { width: '100%', top: '0%', left: '0%', time: 400, easing : 'easeOutBounce' }
    },
    outFx: {
      '.textSlide h3'      : { opacity: 0, top  : '-100px', time: 350 },
      '.textSlide li:odd'  : { opacity: 0, left : '-200px', time: 350 },
      '.textSlide li:even' : { opacity: 0, left : '200px',  time: 350 },
      '.textSlide img'     : { opacity: 0, time: 350 },
      '.quoteSlide:first'  : { top : '-500px', time: 350 },
      '.quoteSlide:last'   : { top : '500px', time: 350 },
      '.expand'            : { width: '10%', top: '50%', left: '50%', time: 350 }
    }
  });

 $(".menu").submit(function(e){
            e.preventDefault();
            //alert(this.href);
            $.post(this.action, $(".menu").serialize(), function(data){
                $("#info").html(data);
            });
            //$("#mitte").load(this.action);
        });
});

