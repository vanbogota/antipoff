"use client"
import { store } from "../store/store";
import { Provider } from "react-redux";
import React from "react";
import { SessionProvider } from "next-auth/react";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>
}

export function MySessionProvider({ children }: { children: React.ReactNode }) {
    return <SessionProvider>{children}</SessionProvider>
}

