const wishList = ['idd007', 'idd008', 'idd015', 'idd023', 'idd034'];

const cartList = [{
    id: 'idd11',
    count: 3,
  },
  {
    id: 'idd22',
    count: 1,
  },
  {
    id: 'idd33',
    count: 2,
  },
];

export const loadData = () => {


  if (location.search) {
    const search = decodeURI(location.search);
    console.log('search');
    const prop = search.split('=')[0].substring(1);
    const value = search.split('=')[1];
  }
  if (location.hash) {
    console.log('hash');
  }
  if (location.pathname.includes('cart')) {
    console.log('cart');
  }
};