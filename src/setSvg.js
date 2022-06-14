import mouseSvg from './img/gesture-tap.svg';

const setSvg = () => {
  const svgContainers = document.querySelectorAll('.dragSvg');

  svgContainers.forEach((e) => {
    e.innerHTML = mouseSvg;
  });
};

export default setSvg;
