const LocalStorage = () => {

    const todoList = localStorage.getItem("Todo List");
    try {
        if(todoList){
            return JSON.parse(todoList);
        }
        
    } catch (error) {
        return [];
    }

  return [];
};

export default LocalStorage;
