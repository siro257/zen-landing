const wrapper = document.getElementById('wrapper');

const uniqueRand = (min, max, prev) => {
  let next = prev;

  while (prev === next) next = rand(min, max);

  return next;
};

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let prev = 1;

const changer = () => {
  index = uniqueRand(1, 6, prev);
  wrapper.dataset.roundness = index;

  prev = index;
};

let myTimer = setInterval(changer, 3000);

for (let i = 0; i < wrapper.childNodes.length; i++) {
  let node = wrapper.childNodes[i];
  if (node.className === 'shape') {
    node.addEventListener('mouseover', () => {
      clearInterval(myTimer);
    });
    node.addEventListener('mouseout', () => {
      myTimer = setInterval(changer, 3000);
    });
  }
}
