import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Loading from './components/Loading';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
                <BrowserRouter>
                    <MainRoutes />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
