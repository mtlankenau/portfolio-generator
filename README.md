# Portfolio Generator

![screenshot for README](https://user-images.githubusercontent.com/85750642/138948253-a1e2243c-2b63-4a69-9243-274f9744a332.jpg)

## Background
For part of our coding bootcamp's coursework for introducing Node.js, we were tasked with creating an application that creates a portfolio page based on user input in the terminal.

## Functionality
When the user enters "node app.js" into the command line of their terminal (within the root directory of the project), they are prompted by a series of questions and commands:
1. 'What is your name? (Required)'
2. 'What is your github account name? (Required)'
3. 'Would you like to enter some information about yourself for an "About" section?'
4. 'Provide some information about yourself:' (If previous question is answered as 'Yes' or 'Y')

They are then prompted by a series of questions and commands pertaining to specific projects of the user:
1. 'What is the name of your project? (Required)'
2. 'Provide a description of the project (Required)'
3. 'What did you build this project with? (Check all that apply)'
4. 'Enter the GitHub link to your project. (Required)'
5. 'Would you like to feature this project?'
6. 'Would you like to enter another project?' (If answered 'Yes' or 'Y', these series of project prompts will repeat for each successive project).

After completing all the prompts, the user will find that a stylized 'index.html' file will have been created under the 'dist' folder within the root directory of the project

## Using the application
In order to use this application, the user must clone the code within the GitHub repository and run app.js within the project's root directory within their terminal (type 'node app.js').