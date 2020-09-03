$(document).ready(() => {
   setButton();
})


const setButton = () => {
    let counter = 0;

    $("#name").text(sessionStorage.getItem("username"));
    $("#lineBtn").click(() => {
        const id = "cadet" + (++counter);
        $("#line").append("<div id="+id+"></div>");
        $("#"+id).click(() => {
            $("#"+id).remove()
        });
    });
}