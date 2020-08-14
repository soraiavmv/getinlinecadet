$(document).ready(() => {
   setButton();
})


const setButton = () => {
    $("#name").text("Human");
    $("#lineBtn").click(() => {
        $("#line").append("<div></div>")
    });
}