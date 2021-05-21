import { createContext } from 'react';

export interface Context {
    iconDir?: string;
}

export const ConfigContext = createContext<Context | null>(null);
