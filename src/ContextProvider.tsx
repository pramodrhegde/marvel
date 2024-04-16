import React, {ReactNode, useState} from 'react';


export const AppStateContext = React.createContext<{
    selectedCharacters: number[];
    setSelectedCharacters: React.Dispatch<React.SetStateAction<number[]>>;
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}>({
    selectedCharacters: [],
    setSelectedCharacters: () => {},
    searchQuery: '',
    setSearchQuery: () => {}
});

type ContextProps = {
    children: ReactNode;
}

const ContextProvider = ({ children }: ContextProps) => {
    const [selectedCharacters, setSelectedCharacters] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
  
    return (
      <AppStateContext.Provider value={{ selectedCharacters, setSelectedCharacters, searchQuery, setSearchQuery }}>
        {children}
      </AppStateContext.Provider>
    );
  };
  
  export default ContextProvider;