import { type ElementType } from 'react';

interface NonAuthRouteProps {
  element: ElementType;
}

const NonAuthRoute = ({ element: Component }: NonAuthRouteProps) => {
  return <Component />;
};

export default NonAuthRoute;
