// document.addEventListener("DOMContentLoaded", function () {
//     const formContainer = document.getElementById("form-container");
//     const saveBtn = document.getElementById("save-btn");

//     document.querySelectorAll(".sidebar button").forEach(button => {
//         button.addEventListener("click", function () {
//             addElement(this.dataset.type);
//         });
//     });

//     function addElement(type) {
//         const id = Date.now();
//         let elementHTML = "";

//         switch (type) {
//             case "input":
//                 elementHTML = `<div class="draggable" data-id="${id}">
//                     <label contenteditable="true">New Input</label>
//                     <input type="text" placeholder="Enter text">
//                     <button onclick="removeElement(${id})">Delete</button>
//                 </div>`;
//                 break;
//             case "select":
//                 elementHTML = `<div class="draggable" data-id="${id}">
//                     <label contenteditable="true">New Select</label>
//                     <select>
//                         <option>Option 1</option>
//                         <option>Option 2</option>
//                     </select>
//                     <button onclick="removeElement(${id})">Delete</button>
//                 </div>`;
//                 break;
//             case "textarea":
//                 elementHTML = `<div class="draggable" data-id="${id}">
//                     <label contenteditable="true">New Textarea</label>
//                     <textarea placeholder="Enter text"></textarea>
//                     <button onclick="removeElement(${id})">Delete</button>
//                 </div>`;
//                 break;
//             case "checkbox":
//                 elementHTML = `<div class="draggable" data-id="${id}">
//                     <label contenteditable="true">New Checkbox</label>
//                     <input type="checkbox">
//                     <button onclick="removeElement(${id})">Delete</button>
//                 </div>`;
//                 break;
//         }

//         formContainer.insertAdjacentHTML("beforeend", elementHTML);
//     }

//     window.removeElement = function (id) {
//         document.querySelector(`[data-id='${id}']`).remove();
//     };

//     saveBtn.addEventListener("click", function () {
//         const formData = [];
//         document.querySelectorAll(".draggable").forEach(element => {
//             const label = element.querySelector("label").innerText;
//             const type = element.querySelector("input, select, textarea")?.tagName.toLowerCase();
//             const placeholder = element.querySelector("input, textarea")?.placeholder || "";

//             const data = { id: element.dataset.id, type, label, placeholder };
//             if (type === "select") {
//                 data.options = [...element.querySelectorAll("option")].map(opt => opt.innerText);
//             }
//             formData.push(data);
//         });

//         console.log(JSON.stringify(formData, null, 2));
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.getElementById("form-container");
    const saveBtn = document.getElementById("save-btn");

    document.querySelectorAll(".add-btn").forEach(button => {
        button.addEventListener("click", function () {
            addElement(this.dataset.type);
        });
    });

    function addElement(type) {
        const id = Date.now();
        let elementHTML = "";

        switch (type) {
            case "input":
                elementHTML = `<div class="form-item" data-id="${id}" draggable="true">
                    <label contenteditable="true">Sample Label</label>
                    <input type="text" placeholder="Sample placeholder">
                    <button class="delete-btn" onclick="removeElement(${id})">🗑</button>
                </div>`;
                break;
            case "select":
                elementHTML = `<div class="form-item" data-id="${id}" draggable="true">
                    <label contenteditable="true">Select</label>
                    <select>
                        <option>Sample option</option>
                        <option>Sample option</option>
                    </select>
                    <button class="delete-btn" onclick="removeElement(${id})">🗑</button>
                </div>`;
                break;
            case "textarea":
                elementHTML = `<div class="form-item" data-id="${id}" draggable="true">
                    <label contenteditable="true">Text area</label>
                    <textarea placeholder="Sample placeholder"></textarea>
                    <button class="delete-btn" onclick="removeElement(${id})">🗑</button>
                </div>`;
                break;
        }

        formContainer.insertAdjacentHTML("beforeend", elementHTML);
    }

    window.removeElement = function (id) {
        document.querySelector(`[data-id='${id}']`).remove();
    };

    saveBtn.addEventListener("click", function () {
        const formData = [];
        document.querySelectorAll(".form-item").forEach(element => {
            const label = element.querySelector("label").innerText;
            const type = element.querySelector("input, select, textarea")?.tagName.toLowerCase();
            const placeholder = element.querySelector("input, textarea")?.placeholder || "";

            const data = { id: element.dataset.id, type, label, placeholder };
            if (type === "select") {
                data.options = [...element.querySelectorAll("option")].map(opt => opt.innerText);
            }
            formData.push(data);
        });

        console.log(JSON.stringify(formData, null, 2));
    });
});
