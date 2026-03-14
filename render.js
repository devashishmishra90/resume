// ============================================================
//  render.js  —  Shared renderer. DO NOT EDIT.
//  data.js is loaded before this via <script> tag in each HTML.
// ============================================================

(function () {

  // ── NAVBAR ────────────────────────────────────────────────
  var navbar = document.getElementById('navbar');
  if (navbar) {
    var navLinks = PROFILE.nav
      .map(function (n) {
        return '<li><a href="' + n.href + '">' + n.label + '</a></li>';
      })
      .join('');
    navbar.innerHTML =
      '<a href="index.html" class="nav-logo">' + PROFILE.name + '</a>' +
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

})();
