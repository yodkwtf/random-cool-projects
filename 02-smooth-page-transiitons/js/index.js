import Highway from '@dogstudio/highway';
import Fade from './transition';

const H = new Highway.Core({
  // hero: Fade,
  // about:Slide
  transitions: {
    default: Fade,
  },
});
