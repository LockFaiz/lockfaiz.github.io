document.addEventListener('DOMContentLoaded', function () {
  var chars = ['宋', '键'];
  var container = document.getElementById('hanzi-writer');
  if (!container) return;

  chars.forEach(function (ch, idx) {
    var div = document.createElement('div');
    div.id = 'hanzi-char-' + idx;
    div.style.display = 'inline-block';
    div.style.cursor = 'pointer';
    div.title = 'Click to replay';
    container.appendChild(div);

    var writer = HanziWriter.create('hanzi-char-' + idx, ch, {
      width: 80,
      height: 80,
      padding: 4,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 80,
      strokeColor: '#333',
      radicalColor: '#168F16',
      showOutline: true,
      drawingWidth: 2
    });

    // Auto-animate with stagger
    setTimeout(function () {
      writer.animateCharacter();
    }, idx * 1200);

    // Click to replay
    div.addEventListener('click', function () {
      writer.animateCharacter();
    });
  });

  // Dark mode support
  var observer = new MutationObserver(function () {
    var isDark = document.documentElement.getAttribute('data-mode') === 'dark' ||
      (!document.documentElement.getAttribute('data-mode') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    container.querySelectorAll('svg path[stroke]').forEach(function (p) {
      if (p.getAttribute('stroke') === '#333' || p.getAttribute('stroke') === '#eee') {
        p.setAttribute('stroke', isDark ? '#eee' : '#333');
      }
    });
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-mode'] });

  // Pronunciation button
  var btn = document.getElementById('pinyin-play');
  if (btn) {
    btn.addEventListener('click', function () {
      var utterance = new SpeechSynthesisUtterance('宋键');
      utterance.lang = 'zh-CN';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    });
  }
});
