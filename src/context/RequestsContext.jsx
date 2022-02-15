import React, {useState} from 'react';

export const RContext = React.createContext(null);

export const RProvider = ({ children }) => {
    const [planItems, setPlanItems] = useState([]);

    const store = {
        planItems,
        setPlanItems
    }

  return <RContext.Provider value={store}>{children}</RContext.Provider>;
}

