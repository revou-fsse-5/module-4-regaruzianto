import React, { ReactNode, useState, createContext, useContext} from 'react'


interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
    // register: (email: string, password: string) => void; // Add register function
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider : React.FC<{ children : ReactNode}> = ({children,}) => {
  
  const [isAuthenticated, setisAuthenticated] = useState(() => {
    return !!localStorage.getItem('token');
  })

  const login = () => {
    setisAuthenticated(true);
  }

  const logout = () => {
    setisAuthenticated(false);
    localStorage.removeItem('token');
}


    return (
     <AuthContext.Provider value = {{ isAuthenticated, login,logout}}>
        {children}
     </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};