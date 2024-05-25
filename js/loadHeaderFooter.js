$(document).ready(function() {
    loadHTML("./includes/navbar.html", "#navbar-header");
    loadHTML("./includes/header.html", "#header");
    loadHTML("./includes/footer.html", "#footer");
});

function loadHTML(url, elementSelector) {
    $.get(url, function(data) {
        $(elementSelector).html(data);
    }).fail(function() {
        console.error('Error al cargar el archivo:', url);
    });
}
