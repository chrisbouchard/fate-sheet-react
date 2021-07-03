import { createContext, useCallback, useContext, useReducer } from "react";

const defaultState = { items: [] };

export const BreadcrumbsContext = createContext({
    ...defaultState,
    addItem: () => {
        throw new Error("No active breadcrumbs context");
    },
    removeItem: () => {
        throw new Error("No active breadcrumbs context");
    },
});

function itemsReducer(state, action) {
    switch (action.type) {
        case "add":
            return {
                ...state,
                items: [...state.items, action.item],
            };
        case "remove":
            return {
                ...state,
                items: state.items.filter((item) => item !== action.item),
            };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

export function BreadcrumbsProvider({ children }) {
    // We use useReducer rather than useState so that the addItem and
    // removeItem callbacks will be stable. With useState, they would need to
    // depend on the item array, which changes every render.
    const [state, dispatch] = useReducer(itemsReducer, defaultState);

    const addItem = useCallback(
        (item) => dispatch({ type: "add", item }),
        [dispatch]
    );

    const removeItem = useCallback(
        (item) => dispatch({ type: "remove", item }),
        [dispatch]
    );

    const value = { ...state, addItem, removeItem };

    return (
        <BreadcrumbsContext.Provider value={value}>
            {children}
        </BreadcrumbsContext.Provider>
    );
}

export function useBreadcrumbs() {
    const { items } = useContext(BreadcrumbsContext);
    return items;
}
