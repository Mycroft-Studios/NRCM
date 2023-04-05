import React, {Context, createContext, useContext, useState} from "react";

export interface SearchContextValue {
    searchText: string;
    setSearchText: (text: string) => void;
}

const SearchCtx = createContext<SearchContextValue | null>(null);

const SearchProvider = ({children}: { children: React.ReactNode }) => {

    const [searchText, setSearchText] = useState<string>('');

    return (
        <SearchCtx.Provider value={{searchText, setSearchText}}>
            {children}
        </SearchCtx.Provider>
    );
};

export default SearchProvider;

export const useSearch = () => { return useContext<SearchContextValue>(SearchCtx as Context<SearchContextValue>)};