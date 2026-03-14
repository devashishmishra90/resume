// ============================================================
//  render.js  —  Shared renderer. DO NOT EDIT.
//  Dynamically loads data.js with a cache-busting timestamp
//  so any change in data.js is ALWAYS reflected immediately.
// ============================================================

(function () {

  function init() {
    // ── NAVBAR ────────────────────────────────────────────────
    var navbar = document.getElementById('navbar');
    if (navbar) {
      var navLinks = PROFILE.nav
        .map(function (n) {
          return '<li><a href="' + n.href + '">' + n.label + '</a></li>';
        })
        .join('');
      navbar.innerHTML =
        '<a href="index.html" class="nav-logo">DM<span>.portfolio()</span></a>' +
        '<ul class="nav-links">' + navLinks + '</ul>';
    }

    // ── FOOTER ────────────────────────────────────────────────
    var footer = document.getElementById('footer');
    if (footer) {
      var footerLinks = PROFILE.nav
        .map(function (n) {
          return '<a href="' + n.href + '">' + n.label + '</a>';
        })
        .join('');
      footer.innerHTML =
        '<div class="footer-left">© ' + new Date().getFullYear() + ' ' +
          PROFILE.name + ' — ' + PROFILE.email + ' — ' + PROFILE.phone +
        '</div>' +
        '<div class="footer-links">' +
          '<a href="index.html">home</a>' +
          footerLinks +
          '<a href="' + PROFILE.linkedin + '" target="_blank">linkedin ↗</a>' +
        '</div>';
    }
  }

  // Load data.js fresh every time (cache-busted with timestamp)
  // Then load render logic after it's ready
  var dataScript = document.createElement('script');
  dataScript.src = 'data.js?v=' + Date.now();
  dataScript.onload = function () {
    init();
    // Fire a custom event so each page's own script can run after data is ready
    document.dispatchEvent(new Event('dataReady'));
  };
  document.head.appendChild(dataScript);

})();
