import React from 'react';
import { Provider, atom } from 'jotai';

interface QuestionData {
  options: string[];
  question: string;
  categoryId: string;
}

interface AuthContextType {
  user: string | null; // User information (you can expand this as needed)
  defaultLanguage: string; // Default language for conversation
  setUser: (user: string | null) => void; // Function to set user
  setDefaultLanguage: (language: string) => void; // Function to set default language
}

export const questionAtom = atom<QuestionData[]>([]);
export const languageAtom = atom('');

export const AuthContext = React.createContext();

const AuthProvider = ({ children }: {children : any}) => {
  return (
    <Provider>
      <AuthContext.Provider value = {{}}>
        {children}
      </AuthContext.Provider>
    </Provider>
  );
};

// export default AuthProvider;

// import React, { createContext, ReactNode } from 'react';
// import { Provider, atom } from 'jotai';

// // Define the types for the atoms
// export const questionareAtom = atom<any[]>([]); // Adjust the type as needed
// export const languageAtom = atom<string>('');

// // Define the shape of the AuthContext
// interface AuthContextType {
//   // Define the properties you want to include in the AuthContext
//   user?: any; // Adjust the type based on your user object
//   // Add more properties as needed
// }

// // Create the AuthContext with a default value
// export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // Define the props for the AuthProvider
// interface AuthProviderProps {
//   children: ReactNode;
// }

// const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const authContextValue: AuthContextType = {
//     // Add your authentication logic here
//     user: null, // Example: replace with actual user data
//   };

//   return (
//     <Provider>
//       <AuthContext.Provider value={authContextValue}>
//         {children}
//       </AuthContext.Provider>
//     </Provider>
//   );
// };

// export default AuthProvider;
