export const PENTAMINOS = {
  0: { shape: [[0]], color: '0, 0, 0'},
  I: {
    shape: [
            [0, 'I', 0, 0, 0],
            [0, 'I', 0, 0, 0],
            [0, 'I', 0, 0, 0],
            [0, 'I', 0, 0, 0],
            [0, 'I', 0, 0, 0],
           ],
    color: '0, 241, 239',
  },

  T: {
    shape: [
            ['T', 'T', 'T',],
            [0,   'T',  0, ],
            [0,   'T',  0, ],
            
           ],
    color: '250, 173, 57',
  },

  P: {
    shape: [
            [0,   'P', 0],
            ['P', 'P', 0],
            ['P', 'P', 0],
           
           ],
    color: '1, 236, 25',
  },

  Q: {
    shape: [
            ['Q',  0,  0],
            ['Q', 'Q', 0],
            ['Q', 'Q', 0],
           
           ],
    color: '255, 1, 1',
  },

  L: {
    shape: [
            [0, 'L',  0,  0 ],
            [0, 'L',  0,  0 ],
            [0, 'L',  0,  0 ],
            [0, 'L', 'L', 0 ],
           ],
    color: '1, 44, 255',
  },

  J: {
    shape: [
            [ 0,   'J', 0, 0 ],
            [ 0,   'J', 0, 0 ],
            [ 0,   'J', 0, 0 ],
            [ 'J', 'J', 0, 0 ],
           ],
    color: '248, 255, 1',
  },

  S: {
    shape: [
            [ 0, 'S', 0,   0 ],
            [ 0, 'S', 0,   0 ],
            [ 0, 'S', 'S', 0 ],
            [ 0,  0,  'S', 0 ],
           ],
    color: '171, 1, 255',
  },

  Z: {
    shape: [
            [  0,  'Z', 0, 0 ],
            [  0,  'Z', 0, 0 ],
            [ 'Z', 'Z', 0, 0 ],
            [ 'Z',  0,  0, 0 ],
           ],
    color: '248, 1, 255',
  },

  U: {
    shape: [
            [ 0,    0,   0 ],
            [ 'U',  0,  'U'],
            [ 'U', 'U', 'U'],
           ],
    color: '124, 124, 124',
  },

  X: {
    shape: [
            [  0,  'X',  0 ],
            [ 'X', 'X', 'X'],
            [  0,  'X',  0 ],
           ],
    color: '255, 255, 255',
  },

  N: {
    shape: [
            [  'N',  'N',  0 ],
            [   0,   'N',  0 ],
            [   0,   'N', 'N'],
           ],
    color: '64, 62, 62',
  },

  Y: {
    shape: [
            [  0, 'Y','Y'],
            [  0, 'Y', 0 ],
            [ 'Y','Y', 0 ],
           ],
    color: '134, 134, 134',
  },
}

export const randomPentamino = () => {
  const pentaminos = 'ITPQLJSZUXNY';
  const random = pentaminos[Math.floor(Math.random() * pentaminos.length)];
  return PENTAMINOS[random];
}