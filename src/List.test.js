import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

describe('List component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<List />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(<List header="First List" cards={{key: value}}/>)
        .toJSON();
      expect(tree).toMatchSnapshot();  
    });

  });