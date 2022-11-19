const form = {
    name: document.getElementById('mbno').value,
    password: document.getElementById('password').value,
    submit: document.getElementById('fillForm'),
};

let button = form.submit.addEventListener("click", (e) => {
    e.preventDefault();
    var mobileNumber = document.getElementById('mbno').value;
    var pass = document.getElementById('password').value;

    const login = `https://dsp.ikyaa.com:3101/api/v1/admin/test110514112022/loginCheck?mobileNumber=${mobileNumber}&password=${pass}`;

    fetch(login, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            let projectId = "";
            for (let i = 0; i < data.length; i++) {
                projectId = data[i].projectId;
                sessionStorage.setItem("pId", JSON.stringify(data));
            }
            if (data.length != 0) {
                alert("login succesful");
                window.open("userprojects.html");
            }
            else {
                alert("Error Password or Username");
            }
        })
        .catch((err) => {
            console.log(err);
        });
});