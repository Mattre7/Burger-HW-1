$(document).ready(function() {
    $(".eatbtn").on("click", function (e) {
        e.preventDefault();
        var id = $(this).data("data-id");
        console.log("Updating burger with id: " + id);
        $.ajax("burgers/update/" + id, {
            type: "PUT",
            data: true
        })
        .then(function() {
            location.reload();
        });
    })
});