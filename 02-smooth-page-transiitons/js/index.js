import Highway from '@dogstudio/highway';
import Fade from './transition';

// required to run the animations
const run = new Highway.Core({
  transitions: {
    default: Fade,
  },
});
