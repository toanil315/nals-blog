import { type ElementType } from 'react';

interface AuthRouteProps {
  element: ElementType;
  roles?: string[];
}

function AuthRoute({ element: Component }: AuthRouteProps) {
  return <Component />;
}

export default AuthRoute;
