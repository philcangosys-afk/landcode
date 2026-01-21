import { createRoot, type Root } from 'react-dom/client';
import App from './App';

let root: Root | null = null;

const rootElement = document.getElementById('root');
if (rootElement) {
  root = createRoot(rootElement);
  root.render(<App />);
}

// Handle HMR
if (import.meta.hot) {
  import.meta.hot.accept('./App', (newModule) => {
    if (root) {
      root.render(<App />);
    }
  });
}
