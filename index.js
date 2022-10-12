const wrapper = document.getElementById('wrapper');

const uniqueRand = (min, max, prev) => {
  let next = prev;

  while (prev === next) next = rand(min, max);

  return next;
};

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let prev = 0;

setInterval(() => {
  index = uniqueRand(1, 6, prev);
  console.log(index);
  wrapper.dataset.roundness = index;

  prev = index;
}, 3000);
