# sunbase
# Visual Form Designer

## Overview
This project is a **Visual Form Designer** built with **HTML, CSS, and Vanilla JavaScript/jQuery**. It allows users to dynamically create and manage form elements using a simple drag-and-drop interface.

## Features
- **Add Form Elements**: Users can add Inputs, Selects, and Textareas.
- **Edit Elements**: Modify labels and placeholders for inputs and textareas.
- **Manage Select Options**: Add and remove options in dropdowns.
- **Reorder Elements**: Drag-and-drop support for reordering elements.
- **Delete Elements**: Remove unwanted form elements.
- **Save Form Data**: Logs the generated JSON form structure to the console.
- **Dark Mode (Bonus)**: A toggle switch for light/dark themes.
- **Preview Page (Bonus)**: Generate and copy the HTML code for the designed form.

## Technologies Used
- **HTML** for structure
- **CSS** for styling
- **JavaScript (Vanilla & jQuery)** for interactivity

## Installation & Setup
### 1. Clone the repository
```sh
git clone https://github.com/your-username/visual-form-designer.git
cd visual-form-designer
```

### 2. Open in a Browser
Simply open `index.html` in a browser.

### 3. (Optional) Host Online
Upload to **GitHub Pages** or **Netlify** for live access.

## File Structure
```
📂 visual-form-designer
 ├── 📁 css/
 │   └── styles.css  # UI Styling
 ├── 📁 js/
 │   ├── script.js   # Handles form logic
 │   ├── dragdrop.js # Handles drag-and-drop
 ├── index.html      # Main Designer Page
 ├── preview.html    # Preview Page
 ├── README.md       # Documentation
```

## How to Use
1. **Add Elements**: Click on the buttons in the sidebar.
2. **Edit Labels & Placeholders**: Click on text to edit.
3. **Reorder Elements**: Drag and drop elements within the form area.
4. **Delete Elements**: Click the trash icon on a form item.
5. **Save Form**: Click "Save" to log the JSON data in the console.
6. **Preview Form (Bonus)**: Open `preview.html` to view and copy the final form HTML.

## JSON Structure Example
```json
[
  {
    "id": "c0ac49c5-871e-4c72-a878-251de465e6b4",
    "type": "input",
    "label": "Sample Input",
    "placeholder": "Sample placeholder"
  },
  {
    "id": "146e69c2-1630-4a27-9d0b-f09e463a66e4",
    "type": "select",
    "label": "Sample Select",
    "options": ["Option 1", "Option 2"]
  }
]
```

## Hosting
The project can be hosted on:
- **GitHub Pages**
- **Netlify**


## Contributing
Feel free to fork and contribute via pull requests.

## License
MIT License - Free to use and modify.

---
🚀 **Enjoy building forms with the Visual Form Designer!**

