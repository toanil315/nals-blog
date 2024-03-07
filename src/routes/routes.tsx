import loadable from '@loadable/component';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { DefaultLayout } from '@/layouts';
import { ROUTES, prefixPath, prefixPathAdmin } from '@/constants';
import { NonAuthRoute } from '@/hocs';
// import { NotFound } from '@/pages';

const Home = loadable(() => import('@/pages/Home'));
const BlogDetail = loadable(() => import('@/pages/BlogDetail'));
const CreateBlog = loadable(() => import('@/pages/CreateBlog'));
const EditBlog = loadable(() => import('@/pages/EditBlog'));

const routeList: RouteObject[] = [
  {
    path: prefixPath,
    element: <DefaultLayout />,
    children: [
      // PUBLIC routes
      {
        path: ROUTES.HOME,
        element: <NonAuthRoute element={Home} />,
      },
      {
        path: ROUTES.BLOG_DETAIL,
        element: <NonAuthRoute element={BlogDetail} />,
      },
      {
        path: ROUTES.EDIT_BLOG,
        element: <NonAuthRoute element={EditBlog} />,
      },
      {
        path: ROUTES.CREATE_BLOG,
        element: <NonAuthRoute element={CreateBlog} />,
      },
    ],
  },

  {
    path: prefixPathAdmin,
    element: <DefaultLayout />,
    children: [
      // ADMIN routes
    ],
  },

  // {
  //   path: ROUTES.ERROR,
  //   element: <NotFound />,
  // },

  {
    path: '*',
    element: (
      <Navigate
        to={ROUTES.ERROR}
        replace
      />
    ),
  },
];

const Routes = () => {
  const element = useRoutes(routeList);
  return element;
};

export default Routes;
