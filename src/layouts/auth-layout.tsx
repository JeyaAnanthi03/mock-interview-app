import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden relative">
      <img
        src="/assets/img/bg.png"
        className="absolute w-full h-full object-cover opacity-20"
      />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
