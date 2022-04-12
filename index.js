import React from 'react';
import ReactDOM from 'react-dom';

const color1 = React.createElement('li', {}, 'Purple');
const color2 = React.createElement('li', {}, 'Red');
const color3 = React.createElement('li', {}, 'Pink');

const artist1 = React.createElement('li', {}, 'J Cole');
const artist2 = React.createElement('li', {}, 'Kendrick Lamar');
const artist3 = React.createElement('li', {}, 'SZA');

const food1 = React.createElement('li', {}, 'Pizza');
const food2 = React.createElement('li', {}, 'Tacos');
const food3 = React.createElement('li', {}, 'Crab Cakes');

const website1 = React.createElement(
  'li',
  {},
  React.createElement('a', { href: 'https://www.sephora.com' }, 'www.sephora.com')
);
const website2 = React.createElement(
  'li',
  {},
  React.createElement(
    'a',
    { href: 'https://www.amazon.com' },
    'www.amazon.com'
  )
);
const website3 = React.createElement(
  'li',
  {},
  React.createElement(
    'a',
    { href: 'https://www.instagram.com' },
    'www.instagram.com'
  )
);

ReactDOM.render(
  React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'My Favorite Things'),
    React.createElement(
      'ul',
      {},
      React.createElement(
        'li',
        {},
        'Favorite Colors',
        React.createElement('ol', {}, color1, color2, color3)
      ),
      React.createElement(
        'li',
        {},
        'Favorite Music',
        React.createElement('ol', {}, artist1, artist2, artist3)
      ),
      React.createElement(
        'li',
        {},
        'Favorite Food',
        React.createElement('ol', {}, food1, food2, food3)
      ),
      React.createElement(
        'li',
        {},
        'Favorite Websites',
        React.createElement('ol', {}, website1, website2, website3)
      )
    )
  ),
  document.getElementById('root')
);