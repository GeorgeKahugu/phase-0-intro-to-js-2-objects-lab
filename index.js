// Write your solution in this file!

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, 
        [key]: value
    };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Modify the original employee object
    return employee; // Return the modified employee object
}


function deleteFromEmployeeByKey(employee, key) {
    const clonedEmployee = { ...employee }; 
    delete clonedEmployee[key]; 
    return clonedEmployee; 
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee; 
}


const employee = {
    name: 'Sam',
    age: 30
};


const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'department', 'IT');
console.log(updatedEmployee); 


destructivelyUpdateEmployeeWithKeyAndValue(employee, 'role', 'Manager');
console.log(employee);


const newEmployee = deleteFromEmployeeByKey(employee, 'age');
console.log(newEmployee); 

destructivelyDeleteFromEmployeeByKey(employee, 'role');
console.log(employee); 
