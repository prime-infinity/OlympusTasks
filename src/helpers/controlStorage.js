export const loadFromLocal = () => { 
    try {
        const tasksInLocal = localStorage.getItem('olmpustaskstasks') 
                            ? JSON.parse(localStorage.getItem('olmpustaskstasks'))
                            : []
        return tasksInLocal
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

export const saveTasksToLocal = (tasks) => {
    
    try {
        const serialisedState = JSON.stringify(tasks);
        localStorage.setItem("olmpustaskstasks", serialisedState);
    } catch (e) {
        console.warn(e);
    }
    
}

export const getStateFromLocal = () => { 
    try {
        const appState = localStorage.getItem('olmpustasksappstate') 
                            ? JSON.parse(localStorage.getItem('olmpustasksappstate'))
                            : 0
        return appState
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

export const saveStateToLocal = (state) => {
    
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("olmpustasksappstate", serialisedState);
    } catch (e) {
        console.warn(e);
    }
    
}