import { observable } from 'mobx';
import mount from './mount';

const state = { @observable n: 0 };

const onclick = () => state.n++;

const view = (state) => <div>
  <h1>clicked {state.n} times</h1>
  <button onclick={onclick}>click me!</button>
</div>

mount(
  document.querySelector('#app'),
  view, state
);

