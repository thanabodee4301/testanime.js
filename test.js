  var animation = anime({
    targets: ['.blue', '.green', '.red'],
    translateX: 250,
    delay: function(el, i) { return i * 100; },
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    autoplay:false
  });

  document.querySelector('.play').onclick = animation.play;
  document.querySelector('.pause').onclick = animation.pause;
  document.querySelector('.restart').onclick = animation.restart;
  document.querySelector('.reverse').onclick = animation.reverse;
