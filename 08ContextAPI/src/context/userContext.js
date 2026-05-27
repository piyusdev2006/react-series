/* 
contextAPI in react:

React Context API ek tarika hai jisse aap data ko bina "props drilling" (ek component se doosre component tak manual data bhejna) ke pure app mein share kar sakte hain.
Isko ek real-world example se samajhte hain.
Real-World Example:
 Dark Mode ThemeSochiye aapke app mein bohot saare components hain (Navbar, Header, Button, Footer). Agar user "Dark Mode" on karta hai, toh har component ko pata hona chahiye. Bina Context ke, aapko har ek component ko manually theme="dark" pass karna padega. Context API se aap ise ek hi jagah set kar dete hain aur koi bhi component ise access kar sakta hai.

 ex: context create karna:
 import { createContext } from 'react'
    const UserContext = createContext()
      {}
    export default UserContext

 context hume provider dega aur consumer dega
 provider se hum data provide karenge aur consumer se hum data consume karenge

 hum provider ko app ke root mein wrap karenge taki pure app mein data available ho jaye
 ex : 
    <userContext>
        <Login/>
        <Dashboard/>
    <userContext/>


hume provider bhi banana padega taki hum data provide kar sake
ex:
    <UserContext.Provider value={data}>
        <Login/>
        <Dashboard/>
    </UserContext.Provider>
*/

// 1st method to create context and provider in same file

import React, { createContext } from 'react'


const UserContext = createContext()

export  { UserContext };