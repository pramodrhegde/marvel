import React from 'react';
import { createRoot } from "react-dom/client";
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query';
import ContextProvider from './ContextProvider';
import App from "./App";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
            <App />
        </ContextProvider>
      </QueryClientProvider>
  </React.StrictMode>
);
