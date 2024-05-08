import Error from "../Pages/Error";
import Dashboard from "../Pages/Dashboard";
import Product from "../Pages/Product";
import urlpath from "./Constant";
import { Route, Routes } from "react-router-dom";
const RoutePath = () => {
  const paths = [
    {
      path: urlpath.DASHBOARD,
      element: <Dashboard />,
    },
    {
      path: urlpath.ERROR,
      element: <Error />,
    },
    {
      path: urlpath.PRODUCT,
      element: <Product />,
    },
  ];
  return (
    <>
      <Routes>
        {paths.map((link, index) => (
          <Route key={index} element={link.element} path={link.path} />
        ))}
      </Routes>
    </>
  );
};

export default RoutePath;
