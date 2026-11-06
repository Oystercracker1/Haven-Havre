// Use the French address as the primary site once both domains are connected.
if (window.location.hostname === 'havenmusic.eu') {
  const destination = new URL(window.location.href);
  destination.hostname = 'havenmusic.fr';
  destination.protocol = 'https:';
  destination.port = '';
  window.location.replace(destination.href);
}
