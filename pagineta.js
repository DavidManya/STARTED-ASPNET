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

    $.ajax({
        type: "POST",
        url: baseURL+"Empleats",
        data: JSON.stringify(empleat),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success:
        function(response){
            label.innerHTML = JSON.stringify(response)
        },
        error:
        function(error){
            console.log(error);
        },
    });
}

function getWorker(){
    var baseURL = "https://localhost:44305/";

    var id = parseInt(document.getElementById("eId").value);
    var label = document.getElementById("eDni");

    $.ajax({
        type: "GET",
        url: baseURL+"Empleats/"+id,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success:
        function(response){
            label.innerHTML = JSON.stringify(response)
        },
        error:
        function(error){
            console.log(error);
        },
    });
}

function delWorker(){
    var baseURL = "https://localhost:44305/";

    var id = parseInt(document.getElementById("eId").value);

    $.ajax({
        type: "DELETE",
        url: baseURL+"Empleats/"+id,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success:
        function(response){
            label.innerHTML = JSON.stringify(response)
        },
        error:
        function(error){
            console.log(error);
        },
    });
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

    $.ajax({
        type: "PUT",
        url: baseURL+"Empleats/"+id,
        data: JSON.stringify(empleat),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success:
        function(response){
            label.innerHTML = JSON.stringify(response)
        },
        error:
        function(error){
            console.log(error);
        },
    });
}