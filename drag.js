// Get the task list, all tasks, and priority labels
const taskList = document.querySelector(".task-list");
const tasks = document.querySelectorAll(".task");


// Stores the task currently being dragged
let taskTrack = null;


// Add drag events to each task
tasks.forEach(function(task){

    // Store the task being dragged and add visual feedback
    task.addEventListener("dragstart" , function(){
        taskTrack = task;
        task.classList.add("dragging");
    })

    // Clear the tracked task and remove visual feedback
    task.addEventListener("dragend", function(){
        taskTrack = null;
        task.classList.remove("dragging");

        // Remove the drop indicator after dragging ends
        const currentDropTarget = document.querySelector(".drop-target");

        if(currentDropTarget !== null){
            currentDropTarget.classList.remove("drop-target");
        }

    })

})


// Finds the task that the dragged item should be placed before
function getDragAfterElement(list , y){

    // Get all tasks except the one currently being dragged
    const draggableElements = [...list.querySelectorAll(".task:not(.dragging)")]

    return draggableElements.reduce((closest,child)=>{

        // Get the position and dimensions of the current task
        const box = child.getBoundingClientRect();

        // Calculate the mouse's distance from the vertical center of the task
        const distanceFromMiddle = y - box.top - box.height / 2;

        // Keep the closest task that is below the mouse position
        if(distanceFromMiddle < 0 && distanceFromMiddle > closest.distanceFromMiddle){
            return {
                distanceFromMiddle: distanceFromMiddle,
                element: child
            };
        }else{
            return closest
        }

    }, {distanceFromMiddle: Number.NEGATIVE_INFINITY}).element;

}


// Handle the task while it is being dragged over the list
taskList.addEventListener("dragover" , function(event){

    // Allow the list to accept the drop
    event.preventDefault();

    // Find the task that the dragged item should be placed before
    const afterElement = getDragAfterElement(taskList, event.clientY);

    // Remove the previous drop indicator
    const currentDropTarget = document.querySelector(".drop-target");

    if(currentDropTarget !== null){
        currentDropTarget.classList.remove("drop-target");
    }

    // Move the dragged task to the correct position
    if(afterElement === null){
        // No task is below the cursor, so move it to the end
        taskList.appendChild(taskTrack);
    }else {
        // Insert the dragged task before the target task
        taskList.insertBefore(taskTrack,afterElement);

        // Show the drop indicator
        afterElement.classList.add("drop-target");
    }

})


// Finalize the reorder when the task is dropped
taskList.addEventListener("drop", function(event) {

    event.preventDefault();

    // Update the priority numbers based on the new task order
    updatePriorities();
});


// Updates the priority numbers to match the current DOM order
function updatePriorities(){

    // Get the tasks in their current order
    const currentTasks = taskList.querySelectorAll(".task");

    currentTasks.forEach(function(task, index){

        // Find the priority element inside the current task
        const priority = task.querySelector(".priority");

        // Convert the zero-based index into a priority number
        priority.textContent = `${index + 1}`;

    })
}

