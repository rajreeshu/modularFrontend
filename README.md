# Modular-Frontend Library

The Modular-Frontend Library is a JavaScript library designed to eliminate conflicts between CSS class names and ensure smooth integration of HTML elements into any web project. By appending a unique suffix to class names and modifying HTML and CSS accordingly, it provides a robust solution for incorporating multiple components without styling conflicts.

## Why to Use/ Use Case
- Suppose we want to generate a page UI and we are using components from open source places like codepen. There is a high chance of code conflict if you use 2 different codepen element.
- This project is also helpful if you want to have 2 components in a web page and one supports one library like Bootstrap and other component uses another library like Tailwind and classes of the libraries cnoflicts with each other.
*In the above 2 scenarios, we can use this library to remove the limitations *

- Suppose we have a webpage and we want to use 2 different card component which has different styles for different  sections of the page.
card1 : https://modularfrontend.projectgallery.online/uses/file1.html <br>
card2 : https://modularfrontend.projectgallery.online/uses/file2.html <br>
If we directly merge these 2 files there css may conflicts with each other <br>
Merged File : https://modularfrontend.projectgallery.online/uses/merged.html (Border of Card2 is affecting the Card1 if placed at a same place)<br>
We can use this Library in this place to keep everything seperated.
Merged using this Library: https://modularfrontend.projectgallery.online/uses/modularFile.html (Both the cards are seperated by adding different suffix to each other **abc** for card1 and  **123**  for card2.

**Source code can be seen using "View Source Page" option (ctrl + U) in the Browser**

## Features

- **Class Name Isolation**: Automatically appends a unique suffix to all class names to prevent styling conflicts.
- **External CSS Modification**: Modifies external CSS files to ensure compatibility and prevent conflicts with existing styles.
- **Dynamic Component Loading**: Loads and integrates HTML components dynamically, ensuring modular design principles are maintained.
- **CSS and HTML Modification**: Processes and modifies CSS and HTML content of components to ensure seamless integration.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- A modern web browser.

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/rajreeshu/modularFrontend
```
Include the library in your project:
```html
<script type="module">
        import { ModularLibrary } from 'https://rajreeshu.github.io/modularFrontend/ModularLibrary.js';
</script>
```
## Usage
To use the Modular-Frontend Library in your project, follow these steps:

* create a main file to load other components 
```html
<body>

    <div id="header-component"></div>
    <div id="body-component"></div>
    <div id="footer-component"></div>
```
* create component files like header.html, header.css, body.html, body.css etc.
* Include the library in your project:
```html
<script type="module">
        import { ModularLibrary } from 'https://rajreeshu.github.io/modularFrontend/ModularLibrary.js';
</script>
```
* Load the Modules
```js
const modularLibraryHeader = new ModularLibrary('abc', '#header-component');
modularLibraryHeader.loadComponentAndModify(BASE_URL_UI + '/header/header.html', afterLoadingHeader);        modularLibraryHeader.modifyExternalStylesheet('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'); // We are using Bootstrap for headers
modularLibraryHeader.modifyExternalStylesheet(BASE_URL_UI + '/header/header.css'); //custom CSS file
  ```
* Similary load other modules like body and footer as well
```js
const modularLibrary = new ModularLibrary('abc', '#body-component');
modularLibrary.loadComponentAndModify(BASE_URL_UI + '/home/body.html', afterLoadingBody);
modularLibrary.modifyExternalStylesheet(BASE_URL_UI + '/home/body.css');
```
* write the JS in main file itself (where component is loaded)
```js
var loginForm = document.querySelector(".front_abc"); -- add suffix while targeting the Class of the component because it already got modified using our Library
var signUpForm = document.querySelector(".back_abc");
```
## Sample Project
This Open source UI Application is build using our Library, check the code base on how to use the Library.
```
https://github.com/rajreeshu/revisorUI
```

## Contributing
We welcome contributions to the Modular-Frontend Library! Whether you're interested in fixing bugs, adding new features, or improving documentation, your help is appreciated.

## Support
If you encounter any issues or have questions, please file an issue on the GitHub issue tracker.
