function addWorker(){
    var baseURL = "https://localhost:44345/";

    var idEmployee = parseInt(document.getElementById("eId").value);
    var dni = document.getElementById("eDni").value;
    var name = document.getElementById("eNom").value;
    var surnames = document.getElementById("eCognoms").value;
    var job = document.getElementById("eCarrec").value;
    var email = document.getElementById("eCorreu").value;
    var salary = parseInt(document.getElementById("eSou").value);

    var employee = {Dni:dni, Name:name, Surnames:surnames, Job:job, Email:email, Salary:salary};

    $.ajax(
        {
            type: "POST",
            url: baseURL+"Employees",
            data: JSON.stringify(employee),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:
            function(response){
                document.getElementById("eId").value = "";
                document.getElementById("eDni").value = "";
                document.getElementById("eNom").value = "";
                document.getElementById("eCognoms").value = "";
                document.getElementById("eCarrec").value = "";
                document.getElementById("eCorreu").value = "";
                document.getElementById("eSou").value = "",
                alert('Alta OK');
            },
            error:
            function(error){
                alert('Ha habido un error');
                console.log(error);
            },
        }
    );
}

function getWorker(){
    var baseURL = "https://localhost:44345/";

    var idEmployee = parseInt(document.getElementById("eId").value);
    var label = document.getElementById("eDni");

    $.ajax(
        {
            type: "GET",
            url: baseURL+"Employees/"+idEmployee,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:
            function(response){
                $("#eId").val(response.idEmployee);
                $("#eDni").val(response.dni);
                $("#eNom").val(response.name);
                $("#eCognoms").val(response.surnames);
                $("#eCarrec").val(response.job);
                $("#eCorreu").val(response.email);
                $("#eSou").val(response.salary);
            },
            error:
            function(error){
                alert('Ha habido un error');
                console.log(error);
            },
        }
    );
}

function delWorker(){
    var baseURL = "https://localhost:44345/";

    var idEmployee = parseInt(document.getElementById("eId").value);

    $.ajax(
        {
            type: "DELETE",
            url: baseURL+"Employees/"+idEmployee,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:
            function(response){
                $("#eId").val("");
                $("#eDni").val("");
                $("#eNom").val("");
                $("#eCognoms").val("");
                $("#eCarrec").val("");
                $("#eCorreu").val("");
                $("#eSou").val("");
                alert('Eliminat OK');
            },
            error:
            function(error){
                alert('Ha habido un error');
                console.log(error);
            },
        }
    );
}

function modWorker(){
    var baseURL = "https://localhost:44345/";

    var idEmployee = parseInt(document.getElementById("eId").value);
    var dni = document.getElementById("eDni").value;
    var name = document.getElementById("eNom").value;
    var surnames = document.getElementById("eCognoms").value;
    var job = document.getElementById("eCarrec").value;
    var email = document.getElementById("eCorreu").value;
    var salary = parseInt(document.getElementById("eSou").value);

    var employee = {IdEmployee:idEmployee, Dni:dni, Name:name, Surnames:surnames, Job:job, Email:email, Salary:salary};

    $.ajax(
        {
            type: "PUT",
            url: baseURL+"Employees/"+idEmployee,
            data: JSON.stringify(employee),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:
            function(response){
                alert('Modificat OK');
                $("#eId").val(IdEmployee);
                $("#eDni").val(Dni);
                $("#eNom").val(Name);
                $("#eCognoms").val(Surnames);
                $("#eCarrec").val(Job);
                $("#eCorreu").val(Email);
                $("#eSou").val(Salary);
            },
            error:
            function(error){
                alert('Ha habido un error');
                console.log(error);
            },
        }
    );
}