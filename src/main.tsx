import ReactDOM from 'react-dom/client';
import {I18nProvider} from './i18n/context';
import {Provider} from 'react-redux';
import store from './store';
import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </I18nProvider>
)
