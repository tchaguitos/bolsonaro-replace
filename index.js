const names = ['Bolsonaro','Bolsomito'],
      elements = [...document.getElementsByTagName('*')],
      nicknames = [
        '0', // I DONT HAVE IDEA WHAT, BUT THIS FIX UNDEFINED RETURN IN getRandomNicknames func :3
        'Bonoro',
        'Bozonaro',
        'Bozo',
        'Bolso',
        'Bolodemilho',
        'Jair bolar',
        'Bonobo',
        'Salnorabo',
        'Bonaro',
        'Boniro',
        'Bono',
        'Bonaldo',
        'Coiso',
        'Boçanaro',
        'Bosoro',
        'Bololó',
        'Bolnossauro',
        'Bolsomario',
        'Biroliro',
        'Trumpnaro',
        'Bostonaro',
        'Bololo',
        'Bolovo',
        'Birolito',
        'Bolonharo',
        'Bonossauro',
        'Biroliro',
        'Bingulinho',
        'Bonorinho',
        'Mijonauro',
        'Mijair',
        'Golden Shower',
        'Borsalino',
        'Bololiro',
        'Bolsonaro vagabundo',
        'Bananinha',
        'Cagair Bostanaro',
        'Rei do Gado',
        'Mijair Salnorabo',
        'Jair Genocida',
        'Mamador do véi da Havan'
      ],
      getRandomPosition = array => Math.floor(Math.random() * array.length) - 0 || 7,
      getRandomNickname = array => array[getRandomPosition(array)],
      main = () => elements.forEach((element) => { // code by @pauladiniz - https://github.com/pauladiniz/loremipsum4president <- this girl is awesome <3
        let validNodes = [...element.childNodes].filter(n => n.nodeType === 3)
        validNodes.forEach((node) => {
          let text = node.nodeValue,
              politicsSUX = text.replace(new RegExp(names.join('|'), 'ig'), getRandomNickname(nicknames)) // here i put my function to get random nicknames :p
          politicsSUX !== text ? node.nodeValue = politicsSUX : ''
        })
      })
      main()
