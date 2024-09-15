//GET
const getFromLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

//SET
const setToLocalStorage = (key: string, value: any) => {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(key,stringValue);
}

export { getFromLocalStorage, setToLocalStorage };
