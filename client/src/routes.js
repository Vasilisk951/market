import * as ROUTES from './utils/consts';

import { Admin } from './pages/Admin';
import { Basket } from './pages/Basket';

import { Shop } from './pages/Shop';
import { DevicePage } from './pages/DevicePage';
import { Auth } from './pages/Auth';

export const authRoutes = [
  {
    path: ROUTES.ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: ROUTES.BASKET_ROUTE,
    Component: Basket
  }
];

export const publicRoutes = [
  {
    path: ROUTES.SHOP_ROUTE,
    Component: Shop
  },
  {
    path: ROUTES.DEVICE_ROUTE,
    Component: DevicePage
  },
  {
    path: ROUTES.LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: ROUTES.REGISTRATION_ROUTE + '/:id',
    Component: Auth
  }
];