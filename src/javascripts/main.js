import '../styles/main.scss';
import eat from './components/quadrants/eat';
import play from './components/quadrants/play';
import fight from './components/quadrants/fight';
import sleep from './components/quadrants/sleep';

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
  fight.getStrengthValue();
};
const initSleep = () => {
  sleep.domStringBuilder();
  sleep.addEventListener();
  sleep.getSleepValue();
};
const init = () => {
  initEat();
  initPlay();
  initFight();
  initSleep();
};
init();
