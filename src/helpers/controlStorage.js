export const loadFromLocalStorage = () => { 
    try {
        const persistedState = localStorage.getItem('olmpustasks') 
                            ? JSON.parse(localStorage.getItem('olmpustasks'))
                            : []
        return persistedState
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

export const saveTasksToLocalStorage = (tasks) => {
    
    try {
        const serialisedState = JSON.stringify(tasks);
        localStorage.setItem("olmpustasks", serialisedState);
    } catch (e) {
        console.warn(e);
    }
    
}