function calculateSalary() {
    var grossSalary = document.querySelector("form[name='Salary'] input[name='grossSalary']");
    var salaryType = document.querySelector("form[name='Salary'] input[name='salaryType']");
    var medicalAid = document.querySelector("form[name='Salary'] input[name='medicalAid']");
    var pensionFund = document.querySelector("form[name='Salary'] input[name='pensionFund']");
    console.log(grossSalary.value);
    console.log(salaryType.value);
    console.log(medicalAid.value);
    console.log(pensionFund.value);

}