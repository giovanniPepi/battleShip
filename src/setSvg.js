import mouseSvg from './img/mouse-move-vertical.svg';
const setSvg = () => {
  const svgContainers = document.querySelectorAll('.dragSvg');

  svgContainers.forEach((e) => {
    e.innerHTML = mouseSvg;
  });
};

export default setSvg;
