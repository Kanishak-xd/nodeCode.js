// Using a normal function
function printMsg() {
    console.log("text by a normal func");
};

printMsg();

// Using a callback function
function printMsgCallback(message, callback) {
    callback(message);
};
function displayMessage(msg) {
    console.log(msg);
};

printMsgCallback("Printed using a callback function.", displayMessage);