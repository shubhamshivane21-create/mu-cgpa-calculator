function showSection(sectionId, btn) {

    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.style.display = "none");

    document.getElementById(sectionId).style.display = "block";

    let buttons = document.querySelectorAll(".tabs button");
    buttons.forEach(button => button.classList.remove("active"));

    btn.classList.add("active");
}

window.onload = function() {
    let firstButton = document.querySelector(".tabs button");
    showSection("basic", firstButton);
};


function calculateCGPA() {
    let percentage = document.getElementById("percentage").value;

    if (percentage === "" || percentage < 0 || percentage > 100) {
        document.getElementById("result").innerHTML = "Enter valid percentage!";
        return;
    }

    let cgpa = percentage / 9.5;
    document.getElementById("result").innerHTML = "CGPA: " + cgpa.toFixed(2);
}

function calculatePercentage() {
    let cgpa = document.getElementById("cgpaInput").value;

    if (cgpa === "" || cgpa < 0 || cgpa > 10) {
        document.getElementById("result2").innerHTML = "Enter valid CGPA!";
        return;
    }

    let percentage = cgpa * 9.5;
    document.getElementById("result2").innerHTML =
        "Percentage: " + percentage.toFixed(2) + "%";
}

function calculateOverall() {

    let subjects = [
        Number(document.getElementById("sub1").value),
        Number(document.getElementById("sub2").value),
        Number(document.getElementById("sub3").value),
        Number(document.getElementById("sub4").value),
        Number(document.getElementById("sub5").value)
    ];

    let total = 0;
    let ktCount = 0;

    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i] < 0 || subjects[i] > 100 || isNaN(subjects[i])) {
            document.getElementById("overallResult").innerHTML =
                "Enter valid marks (0-100)";
            return;
        }

        if (subjects[i] < 40) ktCount++;
        total += subjects[i];
    }

    let percentage = total / 5;
    let cgpa = percentage / 9.5;

    let resultText =
        "Percentage: " + percentage.toFixed(2) +
        "<br>CGPA: " + cgpa.toFixed(2);

    if (ktCount > 0) {
        resultText += "<br><span style='color:red;'>KT in " + ktCount + " subject(s)</span>";
    } else {
        resultText += "<br><span style='color:lightgreen;'>No KT 🎉</span>";
    }

    document.getElementById("overallResult").innerHTML = resultText;
}

function getGradePoint(marks) {
    if (marks >= 75) return 10;
    else if (marks >= 60) return 9;
    else if (marks >= 50) return 8;
    else if (marks >= 45) return 7;
    else if (marks >= 40) return 6;
    else return 0;
}

function calculateCreditCGPA() {

    let marks = [
        Number(document.getElementById("m1").value),
        Number(document.getElementById("m2").value),
        Number(document.getElementById("m3").value)
    ];

    let credits = [
        Number(document.getElementById("c1").value),
        Number(document.getElementById("c2").value),
        Number(document.getElementById("c3").value)
    ];

    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < marks.length; i++) {

        if (isNaN(marks[i]) || isNaN(credits[i])) {
            document.getElementById("creditResult").innerHTML =
                "Enter all marks and credits properly!";
            return;
        }

        let gradePoint = getGradePoint(marks[i]);
        totalPoints += gradePoint * credits[i];
        totalCredits += credits[i];
    }

    let cgpa = totalPoints / totalCredits;
    document.getElementById("creditResult").innerHTML =
        "Credit-Based CGPA: " + cgpa.toFixed(2);
}