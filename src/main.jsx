
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import '@mantine/core/styles.css';
import './index.css';
import { MantineProvider } from '@mantine/core';

import { Provider } from 'react-redux';
import { store } from '../src/Redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <MantineProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MantineProvider>
);