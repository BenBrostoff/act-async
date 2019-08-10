import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

let el;
beforeEach(() => {
  el = document.createElement("div");  
})

it("should render", async () => {
  act(() => {
    ReactDOM.render(<App/>, el);
  })
  expect(el.innerHTML).toContain('unloaded value'); 

  await act(async () => {
    // Works as this will just return a promise anyways
    // await new Promise(res => res());
  });

  expect(el.innerHTML).toContain('fetched value another');
});
