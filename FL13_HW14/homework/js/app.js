// Your code goes here
let studentsList, objGet, student;
studentsList.forEach(el => {
    const resultByEmail = objGet.results.find(elem => elem.email === el.email);

    objGet.results.forEach((el) => {
        if (resultByEmail.email === el.email) {
            student.addHomeworkResult(objGet.topic, resultByEmail.success);
        }
    });

});

let resultByEmail, homeworkResults;
this.addHomeworkResults = function(objGet) {
    objGet.results.forEach(el => {
        resultByEmail = studentsList.find(elem => elem.email === el.email);
        student.addHomeworkResult(objGet.topic, el.success);
    });
}
let resultArr, _studentsList, Student;
_studentsList.forEach((item) => {
    //console.log(item);

    let student = new Student(item.name, item.email);
    let directSuccess;
    //student.addHomeworkResult('HTML', 'true');

    //console.log(resultArr);
    //console.log(resultArr[0].results);
    resultArr[0].results.forEach((el) => {
        if (student.getEmail() === el.email) {
            directSuccess = el.success;

        }
    });
    //directSuccess = resultArr[0].results.find((el) => el === student.getEmail());
    //console.log(directSuccess);

    student.addHomeworkResult(resultArr[0].topic, directSuccess);
    console.log();
    console.log(`name: ${student.getName()}, email: ${student.getEmail()} 
    ${student.getHomeworkResult()}`);

});
let email, failedHomeworksLimit;
this.addHomeworkResult = function(topic, success) {
    const result = {
        topic: topic,
        success: success
    };
    homeworkResults.push(result);
}
Student.call(this, name, email)

 this.failedLimit = function() {
    return failedHomeworksLimit;

 }