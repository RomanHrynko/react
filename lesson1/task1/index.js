const rootElement = document.querySelector('#root');

const greetingElem = React.createElement('div', { class: 'greeting' }, 'Hello, React!');

ReactDOM.render(greetingElem, rootElement);
