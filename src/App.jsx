import React from 'react';
import Heart from './component/Heart';
import Loader from './component/Loader.jsx';

const Page1 = React.lazy(() => import('./pages/page1.jsx'));

// map configuration so the JSX is small; keeps gradients declarative
const hearts = [
  { key: 1, width: 150, height: 150, fill: '#3726f5' },
  {
    key: 2,
    width: 80,
    height: 80,
    gradient: {
      id: 'heartGradient1',
      stops: [
        { offset: '0%', color: '#ff3cac' },
        { offset: '50%', color: '#a0a04b' },
        { offset: '100%', color: '#2b86c5' },
      ],
    },
  },
  {
    key: 3,
    width: 40,
    height: 40,
    gradient: {
      id: 'heartGradient2',
      stops: [
        { offset: '50%', color: '#a73cff' },
        { offset: '75%', color: '#cfcf29' },
        { offset: '100%', color: '#0795fa' },
      ],
    },
  },
  { key: 4, width: 150, height: 150, fill: '#ff3cac' },
  {
    key: 5,
    width: 80,
    height: 80,
    gradient: {
      id: 'heartGradient3',
      stops: [
        { offset: '0%', color: '#ff3cac' },
        { offset: '50%', color: '#784ba0' },
        { offset: '100%', color: '#2b86c5' },
      ],
    },
  },
  {
    key: 6,
    width: 100,
    height: 100,
    gradient: {
      id: 'heartGradient4',
      stops: [
        { offset: '50%', color: '#ffff00' },
        { offset: '100%', color: '#1046f9' },
      ],
    },
  },
  {
    key: 7,
    width: 100,
    height: 100,
    gradient: {
      id: 'heartGradient5',
      stops: [
        { offset: '50%', color: '#ff00c3' },
        { offset: '100%', color: '#e7a9dacf' },
      ],
    },
  },
  { key: 8, width: 150, height: 150, fill: '#f8fa53' },
  { key: 9, width: 150, height: 150, fill: '#ce3cff' },
  {
    key: 10,
    width: 100,
    height: 100,
    gradient: {
      id: 'heartGradient6',
      stops: [
        { offset: '50%', color: '#ffe100' },
        { offset: '100%', color: '#373ef5cf' },
      ],
    },
  },
  { key: 11, width: 150, height: 150, fill: '#6153fa' },
];

const App = () => {
  return (
    <div style={{ position: 'relative' }}>
      <React.Suspense fallback={<Loader />}>
        <Page1 />
      </React.Suspense>
      <ul className="circles">
        {hearts.map(h => (
          <li key={h.key}>
            <Heart {...h} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;