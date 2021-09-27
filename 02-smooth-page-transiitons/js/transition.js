// import libraries
import Highway from '@dogstudio/highway';
import Tween from 'gsap';

// create class
class Fade extends Highway.Transition {
  // things to do before
  in({ from, to, done }) {
    // create a timeline
    const t1 = Tween.timeline();

    //- first animation [moving from off screen to full screeb from left]
    t1.fromTo(to, 0.5, { left: '-100%', top: '50%' }, { left: '0' })

      //- second animation [expanding the page from 1vh to full height]
      .fromTo(
        to,
        0.5,
        { height: '1vh' },
        {
          height: '90vh',
          top: '10%',
          onComplete: () => {
            from.remove();
            done();
          },
        }
      )

      //- third animation [hiding the contents of the page during animation]
      .fromTo(to.children, 2, { opacity: '0' }, { opacity: '1' });
  }

  // things to do after
  out({ from, done }) {
    done();
  }
}

export default Fade;
