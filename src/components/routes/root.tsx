import Layout from 'components/layout/Layout';
import Index from 'components/pages/Index';
import Main from 'components/pages/Main';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const RootRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Index />} />
      <Route path='/rec' element={<Layout />}>
        <Route path='main' element={<Main />} />
      </Route>
    </>
  )
)

export default RootRoutes;
