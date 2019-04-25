import '../styles/main.scss';
import eat from './components/quadrants/eat';
import play from './components/quadrants/play';

const initEat = () => {
  eat.domStringBuilder();
  eat.addEventListener();
  eat.getFullValue();
};

const initPlay = () => {
  play.domStringBuilder();
  play.addEventListener();
  play.getFunValue();
};
const init = () => {
  initEat();
  initPlay();
};
init();
