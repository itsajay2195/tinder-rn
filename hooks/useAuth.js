import { View, Text } from 'react-native'
import React from 'react'

const AuthContext =  React.createContext({
    //This is the initial state

})  /*This is the thing data layer */

export const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value = {null}>
      {children}
    </AuthContext.Provider>
  )
}

