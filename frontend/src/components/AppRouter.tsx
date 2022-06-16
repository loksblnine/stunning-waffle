import React from 'react';
import {Route, Routes} from "react-router-dom";

import NotFound from "../http/components/404";

import {authAdminRoutes, guestRoutes} from "../utils/constants";
import {useAppSelector} from "../store/hooks";

const AppRouter = () => {
  const role = useAppSelector((state) => state.users.user);

  return (
    <Routes>
      {role === 1 && authAdminRoutes.map(({path, Component}) =>
        <Route path={path} element={Component} key={path}/>
      )}
      {guestRoutes.map(({path, Component}) =>
        <Route path={path} element={Component} key={path}/>
      )}
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};

export default AppRouter;