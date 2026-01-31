"use client";
import { createContext } from "react";
export const TabsContext=createContext({activeTab:0,setActiveTab:null});
export default function TabsProvider({children,value}) {
    return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
}