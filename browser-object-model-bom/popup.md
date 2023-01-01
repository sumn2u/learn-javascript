# Popup

Popups are an additional way to show information, take user confirmation, or take user input from additional documents. A popup can navigate to a new URL and send information to the opener window. **Alert box**, **Confirmation box**,  and **Prompt box** are the global functions where we can show the popup information.

1.  **alert()**: It displays information to the user and has an  "**OK**" button to proceed.

    ```javascript
    alert("Alert message example");
    ```
2.  **confirm()**: Use as a dialog box to confirm or accept something. It has "**Ok**" and "**Cancel**" to proceed. If the user clicks "**Ok**" then it returns `true`, if click "**Cancel**" it returns  `false`.&#x20;

    ```javascript
    let txt;
    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    ```
3.  **prompt()**: Takes user input value with "**Ok"** and "**Cancel"** buttons. It returns `null` if the user does not provide any input value.

    ```javascript
    //syntax 
    //window.prompt("sometext","defaultText");

    let person = prompt("Please enter your name", "Harry Potter");

    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hello " + person + "! How are you today?";
    }
    ```









