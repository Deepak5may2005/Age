function calculateAge() {
    let birthdate = document.getElementById("birthdate").value;
    if (birthdate === "") {
        document.getElementById("ageResult").innerText = "Please select a birthdate!";
        return;
    }

    let birthDate = new Date(birthdate);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust for negative values
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("ageResult").innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
}
