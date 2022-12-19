import 'regenerator-runtime';

import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// STYLING
import '../styles/root.css';
import '../styles/navbar.css';
import '../styles/hero.css';
import '../styles/main.css';
import '../styles/restaurant.css';
import '../styles/footer.css';
import '../styles/detail.css';
import '../styles/favorite.css';
import '../styles/spinner.css';
import '../styles/like.css';
import '../styles/responsive.css';

const app = new App({
  button: document.querySelector('.navbar-mobile__btn'),
  drawer: document.querySelector('.mobile-menu'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
