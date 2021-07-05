import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppStore} from '../store/types';

const PrivateRoute = ({component: RouteComponent, ...rest}: any) => {
  const {
    user: {data: user},
  } = useSelector((state: AppStore) => state);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        user.user?.id.length > 0 ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
  );
};

export default PrivateRoute;
