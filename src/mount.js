import { diff, patch } from 'virtual-dom';
import { autorun } from 'mobx';

export default function mount(element, view, state) {
  var tree = <noop/>;
  function render() {
    var newTree = view(state);
    var patches = diff(tree, newTree);
    element = patch(element, patches);
    tree = newTree;
  }
  autorun(() => render());
}
