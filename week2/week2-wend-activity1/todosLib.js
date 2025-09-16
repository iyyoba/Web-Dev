

let todoList = [];
let nextId = 1;

function addOne(task, completed, dueDate) {
    // Check if any parameter is empty or undefined
    if (!task || !completed || !dueDate) {
        return false;
    }

    const newTask = {
        id: nextId++,  // Assigns a unique id and increments it
        task,
        completed,
        dueDate
    };

    todoList.push(newTask); // Adds the new activity to the array
    return newTask; // Returns the added activity object
}

function getAll() {
    return todoList;
}

function findById(id) {
    const numericId = Number(id); // Converts the ID to a number
    const activity = todoList.find(item => item.id === numericId); // Finds the acticity with the matching ID
    return activity || false; // Returns the activity or false if not found
}

function updateOneById(id, updatedData) {
    const activity = findById(id);
    if (activity) {
        // Update properties only if they are provided in updatedData
        if (updatedData.task) activity.task = updatedData.task;
        if (updatedData.completed) activity.completed = updatedData.completed;
        if (updatedData.dueDate) activity.dueDate = updatedData.dueDate;
        return activity; // Returns the updated activity object
    }
    return false; // Returns false if the activity with the provided ID is not found
}

function deleteOneById(id) {
    const activity = findById(id);
    if (activity) {
        const initialLength = todoList.length;
        todoList = todoList.filter(activity => activity.id !== Number(id)); // Filters out the car with the matching ID
        return todoList.length < initialLength; // Returns true if the array length decreased, indicating successful deletion
    }
    return false; // Returns false if the activity was not found
}


if (require.main === module) {
    // Add activity
    let result = addOne("running", "completed", "2025-9-30");
    console.log(result);
    result = addOne("Homework", "not completed", "2025-9-28");
    console.log(result);

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1, { task: "badmenton", completed: "yes" }));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}

const Activity = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Activity;