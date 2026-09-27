import "./styles/tokens.css";
import "./styles/main.css";

import { initSeam } from "./js/seam.js";
import { initInspect } from "./js/inspect.js";
import { initRulers } from "./js/rulers.js";
import { initTuner } from "./js/tuner.js";
import { initTimeline } from "./js/timeline.js";
import { initComments } from "./js/comments.js";
import { initContact } from "./js/contact.js";
import { initDims, initActiveFrame, initReveal, initTheme, initMenu, initArchivePreview } from "./js/page.js";

initTheme();
initMenu();
initTuner();
initSeam();
initDims();
initActiveFrame();
initReveal();
initTimeline();
initComments();
initContact();
initArchivePreview();

const rulers = initRulers();
initInspect({ onHighlight: (rect) => rulers.highlight(rect) });

// Deep links like /#work: land below the fixed nav once layout settles
if (location.hash) {
  const target = document.querySelector(location.hash);
  if (target) requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
}
