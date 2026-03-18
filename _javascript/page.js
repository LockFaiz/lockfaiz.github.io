import { basic, initSidebar, initTopbar } from './modules/layouts';
import {
  loadImg,
  imgPopup,
  initClipboard,
  initToc,
  loadMermaid
} from './modules/components';

initSidebar();
initTopbar();
basic();
loadImg();
imgPopup();
initToc();
initClipboard();
loadMermaid();
