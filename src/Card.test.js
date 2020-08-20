import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

describe('Card component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Card />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it('renders the UI as expected', () => {
      const tree = renderer.create(<Card title="First Card" content="Lorem ipsum"/>)
        .toJSON();
      expect(tree).toMatchSnapshot();  
    });

  });