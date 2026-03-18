import { basic, initTopbar, initSidebar } from './modules/layouts';

import {
  loadImg,
  imgPopup,
  initLocaleDatetime,
  initClipboard,
  initToc,
  loadMermaid
} from './modules/components';

initSidebar();
initTopbar();
basic();
loadImg();
initToc();
imgPopup();
initLocaleDatetime();
initClipboard();
loadMermaid();
