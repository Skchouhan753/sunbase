// document.addEventListener("DOMContentLoaded", function () {
//     const formContainer = document.getElementById("form-container");

//     formContainer.addEventListener("dragstart", function (event) {
//         event.target.classList.add("dragging");
//     });

//     formContainer.addEventListener("dragover", function (event) {
//         event.preventDefault();
//         const afterElement = getDragAfterElement(formContainer, event.clientY);
//         const draggable = document.querySelector(".dragging");
//         if (afterElement == null) {
//             formContainer.appendChild(draggable);
//         } else {
//             formContainer.insertBefore(draggable, afterElement);
//         }
//     });

//     formContainer.addEventListener("dragend", function (event) {
//         event.target.classList.remove("dragging");
//     });

//     function getDragAfterElement(container, y) {
//         const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];
//         return draggableElements.reduce((closest, child) => {
//             const box = child.getBoundingClientRect();
//             const offset = y - box.top - box.height / 2;
//             if (offset < 0 && offset > closest.offset) {
//                 return { offset, element: child };
//             } else {
//                 return closest;
//             }
//         }, { offset: Number.NEGATIVE_INFINITY }).element;
//     }
// });



document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.getElementById("form-container");

    formContainer.addEventListener("dragstart", function (event) {
        event.target.classList.add("dragging");
    });

    formContainer.addEventListener("dragover", function (event) {
        event.preventDefault();
        const afterElement = getDragAfterElement(formContainer, event.clientY);
        const draggable = document.querySelector(".dragging");
        if (afterElement == null) {
            formContainer.appendChild(draggable);
        } else {
            formContainer.insertBefore(draggable, afterElement);
        }
    });

    formContainer.addEventListener("dragend", function (event) {
        event.target.classList.remove("dragging");
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll(".form-item:not(.dragging)")];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            return offset < 0 && offset > closest.offset ? { offset, element: child } : closest;
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
});
