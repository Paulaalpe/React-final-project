import React, {useState} from 'react';

export const RequestContext = React.createContext(null);

export const RequestProvider = ({ children }) => {
    const [planItems, setPlanItems] = useState([]);

    const store = {
        planItems,
        setPlanItems
    }

  return <RequestContext.Provider value={store}>{children}</RequestContext.Provider>;
}

