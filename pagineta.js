function addWorker(){
    var baseURL = "https://localhost:44305/";

    var id = parseInt(document.getElementById("eId").value);
    var dni = document.getElementById("eDni").value;
    var nom = document.getElementById("eNom").value;
    var cognoms = document.getElementById("eCognoms").value;
    var carrec = document.getElementById("eCarrec").value;
    var correu = document.getElementById("eCorreu").value;
    var sou = parseInt(document.getElementById("eSou").value);

    var empleat = {Dni:dni, Nom:nom, Cognoms:cognoms, Carrec:carrec, Correu:correu, Sou:sou};

    $.ajax(
        {
            type: "POST",
            url: baseURL+"Empleats",
            data: JSON.stringify(empleat),
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
    var baseURL = "https://localhost:44305/";

    var id = parseInt(document.getElementById("eId").value);
    var label = document.getElementById("eDni");

    $.ajax(
        {
            type: "GET",
            url: baseURL+"Empleats/"+id,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:
            function(response){
                $("#eId").val(response.empleatId);
                $("#eDni").val(response.dni);
                $("#eNom").val(response.nom);
                $("#eCognoms").val(response.cognoms);
                $("#eCarrec").val(response.carrec);
                $("#eCorreu").val(response.correu);
                $("#eSou").val(response.sou);
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
    var baseURL = "https://localhost:44305/";

    var id = parseInt(document.getElementById("eId").value);

    $.ajax(
        {
            type: "DELETE",
            url: baseURL+"Empleats/"+id,
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
    var baseURL = "https://localhost:44305/";

    var id = parseInt(document.getElementById("eId").value);
    var dni = document.getElementById("eDni").value;
    var nom = document.getElementById("eNom").value;
    var cognoms = document.getElementById("eCognoms").value;
    var carrec = document.getElementById("eCarrec").value;
    var correu = document.getElementById("eCorreu").value;
    var sou = parseInt(document.getElementById("eSou").value);

    var empleat = {EmpleatId:id, Dni:dni, Nom:nom, Cognoms:cognoms, Carrec:carrec, Correu:correu, Sou:sou};

    $.ajax(
        {
            type: "PUT",
            url: baseURL+"Empleats/"+id,
            data: JSON.stringify(empleat),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:
            function(response){
                alert('Modificat OK');
                $("#eId").val(EmpleatId);
                $("#eDni").val(Dni);
                $("#eNom").val(Nom);
                $("#eCognoms").val(Cognoms);
                $("#eCarrec").val(Carrec);
                $("#eCorreu").val(Correu);
                $("#eSou").val(Sou);
            },
            error:
            function(error){
                alert('Ha habido un error');
                console.log(error);
            },
        }
    );
}