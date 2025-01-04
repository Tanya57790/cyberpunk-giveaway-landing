'use strict';

import './styles/minimized/reset-dist.css';
import './styles/minimized/main-dist.css';
import './styles/minimized/media-dist.css';

async function loadStyles() {
  console.log('DOMContentLoaded event fired. Loading web-font-start.css');
  try {
    await import('./styles/minimized/web-font-start-dist.css');
    console.log('web-font-start.css loaded successfully.');
  } catch (error) {
    console.error('Failed to load web-font-start.css:', error);
  }
}

loadStyles();

let footerStylesLoaded = false;
window.addEventListener('scroll', async () => {
  if (!footerStylesLoaded) {
    footerStylesLoaded = true; 
    console.log('Scroll event fired. Loading footer.css');
    try {
      await import('./styles/minimized/footer-dist.css');
      console.log('footer.css loaded successfully.');
    } catch (error) {
      console.error('Failed to load footer.css:', error);
    }
  }
});

async function loadScripts() {
  try {
    await import('./scripts/minimized/swiper-dist.js');
    await import('./scripts/minimized/popup-dist.js');
  } catch (error) {
    console.error('Ошибка, Скрипты динамически не импортированы', error);
  }
}

loadScripts();

