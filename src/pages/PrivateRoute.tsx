// PrivateRoute.tsx
import React from 'react';
import { Navigate, PathRouteProps } from 'react-router-dom';
let isUserLoggedIn :any;
interface PrivateRouteProps extends PathRouteProps {
  element: React.ReactNode;
  isLoggedIn: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, isLoggedIn, ...props }) => {
  const storedLoginStatus = localStorage.getItem('isLoggedIn') || 'false';
  isUserLoggedIn =storedLoginStatus

  // Assuming you want to check if the user is logged in based on userInDatabase

  return isUserLoggedIn==='true' ? (
    <>{element}</> // Return the element directly
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
