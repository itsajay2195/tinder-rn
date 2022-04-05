import { View, Text } from 'react-native'
import React,{useContext} from 'react'


const AuthContext =  React.createContext({})  /*This is the thing data layer */

export const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value = {{user:'Ajay'}}>
      {children}
    </AuthContext.Provider>
  )
}


//it feels like using the context is the best and easy pattern instead of using the context.consumer
export default function useAuth(){
    return useContext(AuthContext);
}