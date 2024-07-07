import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="font-medium text-white bg-orange-400 py-2 px-8 rounded"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginPage;
