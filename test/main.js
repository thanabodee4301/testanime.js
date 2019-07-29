var lineDrawing = anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutCubic',
    duration: 4000,
    begin: function(anim) {
      document.querySelector('path').setAttribute("stroke", "black");
      document.querySelector('path').setAttribute("fill", "none");
    },
    complete: function(anim) {
      document.querySelector('path').setAttribute("fill", "yellow");
    },
    autoplay: false
  });
  
  document.querySelector('.play-drawing').onclick = lineDrawing.restart;