function addWorker(){
    var baseURL = "https://localhost:44305/";

    var id = document.getElementById("eId").Value;
    var dni = document.getElementById("eDni").Value;
    var nom = document.getElementById("eNom").Value;
    var cognoms = document.getElementById("eCognoms").Value;
    var carrec = document.getElementById("eCarrec").Value;
    var correu = document.getElementById("eCorreu").Value;
    var sou = document.getElementById("eSou").Value;

    var data = {EmpleatId:id, Dni:dni, Nom:nom, Cognoms:cognoms, Carrec:carrec, Correu:correu, Sou:sou};

    $.ajax({
        type: "POST",
        url: baseURL+"Empleats",
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            label.innerHTML = JSON.stringify(response)
        },
        error: function(error) {
            console.log(error);
        },
    });
}

function getWorker(){
    var baseURL = "https://localhost:44305/";

    var id = document.getElementById("eId").Value;

    $.ajax({
        type: "GET",
        url: baseURL+"Empleats/"+id,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            label.innerHTML = JSON.stringify(response)
        },
        error: function(error) {
            console.log(error);
        },
    });
}

function delWorker(){
    var baseURL = "https://localhost:44305/";

    var id = document.getElementById("eId").Value;

    $.ajax({
        type: "DELETE",
        url: baseURL+"Empleats/"+id,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            label.innerHTML = JSON.stringify(response)
        },
        error: function(error) {
            console.log(error);
        },
    });
}