const LOCALSTORAGE_KEY = "items";



export const saveData = (item) => {
    const localArray = getDataLocalStorage();
    localArray.push(item)
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(localArray))
    
}

function getDataLocalStorage() {
    try{
    const data = localStorage.getItem(LOCALSTORAGE_KEY);
    return data ? JSON.parse(data) : [] 
    }
    catch (error) {
        console.log(error);
    }
}