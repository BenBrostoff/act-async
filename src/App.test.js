import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

let el;
beforeEach(() => {
  el = document.createElement('div');  
})

it("should render", async () => {
  act(() => {
    ReactDOM.render(<App/>, el);
  })
  expect(el.innerHTML).toContain('unloaded value'); 

  await act(async () => {
    await new Promise(res => {
      setTimeout(res, 3000);
    });
  });

  expect(el.innerHTML).toContain('fetched value another');
});
