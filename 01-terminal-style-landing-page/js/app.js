const about = document.getElementById('about');
const contact = document.getElementById('contact');
const aboutContent = document.getElementById('about-content');
const contactContent = document.getElementById('contact-content');

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal:true,
    top: 24,
    right: 24,
    // bottom: 50,
    left: 24,
    // only takes value in pixels
    height: '500',
    width: '500',
    mount: aboutContent,
    onfocus() {
      this.setBackground('#00aa00');
    },
    onblur() {
      this.setBackground('#777');
    },
  });
});

contact.addEventListener('click', () => {
  const contacttBox = new WinBox({
    title: 'Contact Me',
    // modal: true,
    top: 90,
    right: 40,
    // bottom: 50,
    left: 70,
    // only takes value in pixels
    height: '500',
    width: '500',
    mount: contactContent,
    onfocus() {
      this.setBackground('#00aa00');
    },
    onblur() {
      this.setBackground('#777');
    },
  });
});
