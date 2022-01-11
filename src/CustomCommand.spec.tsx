import React from 'react';
import { mount } from '@cypress/react';

it('uses a custom command written in TypeScript', () => {
  const Comp: React.FC = () => {
    const onClick = cy.stub()
    return (
      <button onClick={onClick}>Button!</button>
    );
  }

  mount(<Comp />);

  for(let i = 0; i < 10; i++){
    cy.clickButtonWithText('Button!');
  }
})
