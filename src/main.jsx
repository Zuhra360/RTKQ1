
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './index.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux';
import { store } from '../src/Redux/store.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <MantineProvider>
        <Notifications/>
        <Provider store={store}>
         <QueryClientProvider client={queryClient}>
                <App />
         </QueryClientProvider>
        </Provider>
    </MantineProvider>
);