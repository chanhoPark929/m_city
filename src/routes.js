import Layout from './Hoc/Layout';
import { Switch } from 'react-router-dom';
import Home from './Components/home';
import SignIn from './Components/signin';
import Dashboard from './Components/admin/Dashboard';
import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';
import AdminMatches from './Components/admin/matches';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
      <PrivateRoute {...props} path='/admin_matches' exact component={AdminMatches}/>
        <PrivateRoute {...props} path='/dashboard' exact component={Dashboard}/>
        <PublicRoute {...props} restricted={true} path="/" exact component={Home} />
        <PublicRoute {...props} restricted={false} path='/sign_in' exact component={SignIn} />
      </Switch>
    </Layout>
  );
}

export default Routes;
