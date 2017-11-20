// Global Styles
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-snapshot';
import registerServiceWorker from './services/service-worker';
import Routes from './routes';

render(<Routes />, document.getElementById('root'));
registerServiceWorker();
