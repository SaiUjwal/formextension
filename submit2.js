
window.addEventListener('load', () => {

    const name = JSON.parse(sessionStorage.getItem('pId'));
    console.log(name);
    var elm = document.getElementById('projectId'),
        df = document.createDocumentFragment();
    for (let i = 0; i < name.length; i++) {
        var option = document.createElement('option');
        option.value = name[i].projectId;
        option.appendChild(document.createTextNode(JSON.stringify(name[i].projectId)));
        df.appendChild(option);
        console.log("hi");
    }
    elm.appendChild(df);



    const form = {
        projectId: document.getElementById('projectId').value,
        submit: document.getElementById('trdraft'),
    };

    form.submit.addEventListener("click", (e) => {
        e.preventDefault();

        var projectId = document.getElementById('projectId').value;
        // const login = "http://localhost:3000/projectId";

        // fetch(login, {
        //     method: "GET",
            const login = `https://dsp.ikyaa.com:3101/api/v1/admin/test110514112022/getRtaList?statusId=30,23,28&projectId=${projectId}`;

            fetch(login, {
                method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const tBody = document.querySelector('tbody');
                const tableRows = tBody.getElementsByTagName('tr');

                function updateTable() {

                    const tableData = data
                        .map((item) => {
                            return `
                            
                    <tr>
                    <td id="docId">${item.docId}</td>
                    <td id="firstName">${item.firstName}</td>
                    <td ><button id="fill" class="fillclass">fill</button>
                    <button>Confirm</button>
                    <button>Skip</button></td>
                    </tr>
                    `;
                        })
                        .join('');

                    tBody.innerHTML = tableData;

                    $(".fillclass").click(function () {
                        var id = $(this).closest("tr").find("#docId").text();
                        var firstname = $(this).closest("tr").find("#firstName").text();
                        console.log(id,firstname);

                        
                      })
                   
                }
                updateTable();
                // const element = document.getElementById("fill");
                
                    


                sessionStorage.setItem("details", JSON.stringify(data));

                if (data.error) {
                    alert("Error no data found");
                } else {


                    alert("success");
                }
            })
            .catch((err) => {
                console.log(err);
            });

    });
})



