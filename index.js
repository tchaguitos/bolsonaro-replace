const names = ['Bolsonaro', 'Bolsomito'];
const elements = [...document.getElementsByTagName('*')];
const nicknames = [
  'Bonoro', 'Bozonaro', 'Bolso', 'Bolodemilho', 'Jair bolar', 'Bonobo', 'Salnorabo',
  'Bonaro', 'Boniro', 'Bono', 'Bonaldo', 'Coiso', 'Boçanaro', 'Bosoro', 'Bololó',
  'Bolnossauro', 'Bolsomario'
];

const getRandomPosition = array => Math.floor(Math.random() * array.length) - 1 || 6;
const getRandomNickname = array => array[getRandomPosition(array)];

// code by @pauladiniz - https://github.com/pauladiniz/loremipsum4president
const main = () => elements.forEach((element) => {
  const validNodes = [...element.childNodes].filter(n => n.nodeType === 3);

  validNodes.forEach((node) => {
    const text = node.nodeValue;
    // here i put my function to get random nicknames ;p
    const politicsSUX = text.replace(new RegExp(names.join('|'), 'ig'), getRandomNickname(nicknames));

    if (politicsSUX !== text) {
      node.nodeValue = politicsSUX;
    }
  });
});

main();