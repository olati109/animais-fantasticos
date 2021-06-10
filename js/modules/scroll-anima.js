export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);

    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  // pega a distância de cada item em relação ao top do site
  getDistace() {
    this.distace = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // verifica a distância em cade objeto em relação ao scroll do site
  checkDistance() {
    this.distace.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }


  init() {
    if (this.sections.length) {
      this.getDistace();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // remove o event de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
