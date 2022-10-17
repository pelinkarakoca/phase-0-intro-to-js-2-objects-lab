// Write your solution in this file!
const employee = {
    name : "Pelin",
    streetAdress: "Istanbul"
}
//Nondestructive updating 
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee};
    newObject[key] = value;
    return newObject;
}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam");
updateEmployeeWithKeyAndValue(updatedEmployee, "streetAdress", "11 Broadway");


//Destructive updating 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam");
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAdress", "11 Broadway");


//Nondestructive removing 
function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
}

//Destructive removing

function  destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}




