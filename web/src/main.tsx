import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';
import App from './components/App';
import './index.css';
import ConfigProvider from './providers/ConfigProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </VisibilityProvider>
  </React.StrictMode>,
);
