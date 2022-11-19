


// const form = {
//     submit: document.getElementById('fill'),
// };



// let Form = form.submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     var projectId = document.getElementById('projectId').value;
//     var docId = document.getElementById('docId').value;
//     var firstName = document.getElementById('name').value;
//     const fill = `https://dsp.ikyaa.com:3101/api/v1/admin/test110514112022/getCustDetails?projectId=${projectId}&docId=${docId}&name=${firstName}`;
//     fetch(fill, {
//         method: "GET",
//         headers: {
//             Accept: "application/json, text/plain, */*",
//             "Content-Type": "application/json",
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => {

//             console.log(data);
//         })
// })