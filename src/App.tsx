import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './appRoutes';
import Layout from './Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <AppRoutes />
    </Layout>
  </BrowserRouter>
);

export default App;
