// ============================================================
//  render.js  —  Shared renderer. DO NOT EDIT.
//  Reads THEME and PROFILE from data.js and applies them.
// ============================================================

(function () {

  // ── APPLY THEME ───────────────────────────────────────────
  // Injects Google Fonts and sets all CSS variables from THEME
  var root = document.documentElement.style;

  // Load Google Fonts dynamically based on THEME font choices
  var fonts = [...new Set([THEME.fontHeading, THEME.fontBody, THEME.fontMono])];
  var fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=' +
    fonts.map(function(f) {
      return f.replace(/ /g, '+') + ':wght@300;400;500;600;700;800';
    }).join('&family=') + '&display=swap';
  document.head.appendChild(fontLink);

  // Set CSS variables
  root.setProperty('--font-heading',    '"' + THEME.fontHeading + '", sans-serif');
  root.setProperty('--font-body',       '"' + THEME.fontBody    + '", sans-serif');
  root.setProperty('--font-mono',       '"' + THEME.fontMono    + '", monospace');
  root.setProperty('--bg-primary',      THEME.bgPrimary);
  root.setProperty('--bg-secondary',    THEME.bgSecondary);
  root.setProperty('--bg-card',         THEME.bgCard);
  root.setProperty('--bg-card-hover',   THEME.bgCardHover);
  root.setProperty('--text-primary',    THEME.textPrimary);
  root.setProperty('--text-secondary',  THEME.textSecondary);
  root.setProperty('--text-muted',      THEME.textMuted);
  root.setProperty('--accent-cyan',     THEME.accentPrimary);
  root.setProperty('--accent-green',    THEME.accentSecondary);
  root.setProperty('--accent-amber',    THEME.accentAmber);
  root.setProperty('--border-subtle',   THEME.borderSubtle);
  root.setProperty('--border-glow',     THEME.borderGlow);

  // ── NAVBAR ────────────────────────────────────────────────
  var navbar = document.getElementById('navbar');
  if (navbar) {
    var navLinks = PROFILE.nav
      .map(function(n) {
        var style = n.size ? ' style="font-size:' + n.size + '"' : ''; return '<li><a href="' + n.href + '"' + style + '>' + n.label + '</a></li>';
      }).join('');
    navbar.innerHTML =
      '<a href="index.html" class="nav-logo">' + PROFILE.name + '</a>' +
      '<ul class="nav-links">' + navLinks + '</ul>';
  }

  // ── FOOTER ────────────────────────────────────────────────
  var footer = document.getElementById('footer');
  if (footer) {
    var footerLinks = PROFILE.nav
      .map(function(n) {
        return '<a href="' + n.href + '">' + n.label + '</a>';
      }).join('');
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