// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import Detail from '../src/components/detail/Detail';
//import { configure, shallow } from 'enzyme';
//import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//import { Link } from 'react-router-dom';
import React from 'react';
import { screen, render } from '@testing-library/react';

//configure({ adapter: new Adapter() });

describe('<Detail />', () => {
   // it('Debe haber dos etiquetas <Link>. Uno que dirija a la ruta "/" y otro a la ruta "/futbolistas/create"', () => {
   //    expect(detail.find(Link).length).toBeGreaterThanOrEqual(1);
   //    expect(detail.find(Link).find({ to: '/home' }).length).toBe(1);
   // });

   // it('Debe haber una etiqueta <Link> con el texto "Home" que dirija a la ruta "/"', () => {
   //    expect(detail.find(Link).find({ to: '/home' }).text()).toBe('Back to home');
   // });

   it('Prueba', () => {
      render(<Detail/>)
      expect(screen.queryByText(/continent/i)).toBeInTheDocument();
   });
   
});