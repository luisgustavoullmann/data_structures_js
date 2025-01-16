import { data } from "./3_challenge_input.js"

class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

const print = (allRecords) => {
    for (let [key, _] of allRecords) {
        console.log(`${key}:`);
        let record = allRecords.get(key);
        record.forEach((r) => {
            console.log(` ${r.id}: ${r.name}, $ ${r.salary.toFixed(2)}`);
        });
    }
};

const convertRecords = (records) => {
    let allRecords = new Map();

    records.forEach(record => {
        const [dept_id, dept_name, employee_id, employee_name, salary, _] = record.split(",");
        let employee = new Employee(Number(employee_id),employee_name,Number(salary));
        
        if(allRecords.has(dept_name)) {
           let rcd = allRecords.get(dept_name);
           rcd.push(employee)
           allRecords.set(dept_name, rcd);
        } else {
            allRecords.set(dept_name, [employee]);
        }       
    });

    allRecords = new Map([...allRecords.entries()].sort());
    return allRecords
}

let allRecords = convertRecords(data);
print(allRecords);


