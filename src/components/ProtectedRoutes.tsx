import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/userStore";
import useGeneralStore from "../stores/generalStore";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const user = useUserStore((state) => state);
  const navigate = useNavigate();

  const setLoginIsOpen = useGeneralStore((state) => state.setLoginIsOpen);
  useEffect(() => {
    if (!user) {
      navigate("/");
      setLoginIsOpen(true);
    }
  }, [user.id, navigate, setLoginIsOpen]);

  if (!user.id) {
    return (
      <>
        <h1> No Access</h1>
      </>
    )
  };
  return (
    <>
      {children}
    </>
  )
};


export default ProtectedRoutes;