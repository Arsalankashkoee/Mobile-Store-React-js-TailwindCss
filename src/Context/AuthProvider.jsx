import { useContext, useState, createContext, useEffect } from "react";

export const AuthProviderContext = createContext();
export const AuthProviderContextDispatcher = createContext();

const LOCAL_STORAGE_AUTH_KEY = "authState";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false);

  //   useEffect(() => {
  //     const userData =
  //       JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
  //       setAuth(userData);
  //   }, []);

  useEffect(() => {
    const data = JSON.stringify(auth);
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, data);
  }, [auth]);

  return (
    <AuthProviderContext.Provider value={auth}>
      <AuthProviderContextDispatcher.Provider value={setAuth}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext);
export const useAuthActions = () => useContext(AuthProviderContextDispatcher);
