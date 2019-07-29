var progressLogEl = document.querySelector('.progress-log');
var beginLogEl = document.querySelector('.begin-log');
var completeLogEl = document.querySelector('.complete-log');
var begin = anime({
    targets: '.red',
    translateX: 240,
    delay: 1000,
    autoplay:false,
    easing: 'easeInOutCirc',
    update: function(anim) {
      progressLogEl.value = 'progress : ' + Math.round(anim.progress) + '%';
      beginLogEl.value = 'began : ' + anim.began;
      completeLogEl.value = 'completed : ' + anim.completed;
    },
    begin: function(anim) {
      beginLogEl.value = 'began : ' + anim.began;
    },
    complete: function(anim) {
      completeLogEl.value = 'completed : ' + anim.completed;
    }
  });
  document.querySelector('.play').onclick = begin.play;


///////////////
var loopBegan = 0;
var loopCompleted = 0;

var anime2 = anime({
  targets: '.loopBegin-loopComplete-demo .el',
  translateX: 240,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutCirc',
  loopBegin: function(anim) {
    loopBegan++;
    beginLogEl.value = 'loop began : ' + loopBegan;
  },
  loopComplete: function(anim) {
    loopCompleted++;
    completeLogEl.value = 'loop completed : ' + loopCompleted;
  }
});