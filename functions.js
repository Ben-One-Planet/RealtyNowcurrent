$(document).ready(function () {

    var MaxInputs = 2; //maximum extra input boxes allowed
    var InputsWrapper = $("#InputsWrapper"); //Input boxes wrapper ID
    var AddButton = $("#AddMoreFileBox"); //Add button ID

    var x = InputsWrapper.length; //initlal text box count
    var FieldCount = 1; //to keep track of text box added

    //on add input button click
    $(AddButton).click(function (e) {
        //max input box allowed
        if (x <= MaxInputs) {
            FieldCount++; //text box added ncrement
            //add input box
            $(InputsWrapper).append('<div><input type="text" name="mytext[]" class="input_style" id="field_' + FieldCount + '"/> <a href="#" class="removeclass"><img src="IMG/form-delete.png" /></a></div>');
            x++; //text box increment

            $("#AddMoreFileId").show();

            $('AddMoreFileBox').html("Add field");

            // Delete the "add"-link if there is 3 fields.
            if (x == 3) {
                $("#AddMoreFileId").hide();
                $("#lineBreak").html("<br>");
            }
        }
        return false;
    });

    $("body").on("click", ".removeclass", function (e) { //user click on remove text
        if (x > 1) {
            $(this).parent('div').remove(); //remove text box
            x--; //decarement textbox

            $("#AddMoreFileId").show();

            $("#lineBreak").html("");

            // Adds the "add" link again when a field is removed.
            $('AddMoreFileBox').html("Add field");
        }
        return false;
    })

});


// Add active class to the current button (highlight it)
var header = document.getElementById("buttonDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
