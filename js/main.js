function cutEmail() {
    var emailInput = document.getElementById('emailInput');
    var nameInput = document.getElementById('nameInput');
    var domainInput = document.getElementById('domainInput');

    if (emailInput.value.includes('@') && emailInput.value.includes('.')) {
        var indexAt = emailInput.value.indexOf('@');
        var Fname = emailInput.value.slice(0, indexAt);
        var domain = emailInput.value.slice(indexAt + 1);
        nameInput.value = Fname;
        domainInput.value = domain;
    }
    else
        alert("Enter valid email");
}
