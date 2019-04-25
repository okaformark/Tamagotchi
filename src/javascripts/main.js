import '../styles/main.scss';
import eat from './components/quadrants/eat';
import play from './components/quadrants/play';
import fight from './components/quadrants/fight';

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
const initFight = () => {
  fight.domStringBuilder();
  fight.addEventListener();
  fight.getStengthValue();
};
const init = () => {
  initEat();
  initPlay();
  initFight();
};
init();
