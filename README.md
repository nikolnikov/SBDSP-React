# Getting Started with Design System Consumer React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm scss`
After starting the application with `npm start` run `npm scss` one time to start live sass compiling.

### **Running the app**
This application compiles sass from files located within the DS-Consumer repo.<br>
To run the project you will also need to copy the DS-Consumer repo here and place it inside the same root folder <br>
that contains the DS Consumer React project.
[DS Consumer Repo](https://gitlab.com/questdiagnostics/medplus-git01/designsystem/designsystem-consumer)
<br>
Rename the root folder of the DS-Consumer repo over to DS-Consumer.


### **DS React Developer Notes**
Located within the src directory is a sass and css folder. <br>
The compiled DS React css file will be compiled and located in the css folder. <br>
This file is automatically compiled once the command `npm scss` is run. 
The compiler is set to watch for changes and recompiles automatically.<br>
<br>
When creating new components that will require it own custom css, create a partial .scss file<br>
and add it to the scss file. Import the new partial file in the  ds-consumer-react.scss file.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).






# QXD-SB-Pro
