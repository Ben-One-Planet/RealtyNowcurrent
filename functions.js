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


// Toggle active state for house and condo section
var header = document.getElementById("buttonDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


// Add active class to the current button (highlight it)
var headerBed = document.getElementById("bedDiv");
var btnsBed = headerBed.getElementsByClassName("bed-btn");
for (var i = 0; i < btnsBed.length; i++) {
  btnsBed[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activeBed");
  current[0].className = current[0].className.replace(" activeBed", "");
  this.className += " activeBed";
  });
}

// Add active class to the current button (highlight it)
var headerBath = document.getElementById("bathDiv");
var btnsBath = headerBath.getElementsByClassName("bath-btn");
for (var i = 0; i < btnsBath.length; i++) {
  btnsBath[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activeBath");
  current[0].className = current[0].className.replace(" activeBath", "");
  this.className += " activeBath";
  });
}

// Add active class to the current button (highlight it)
var headerFoundHome = document.getElementById("foundHomeDiv");
var btnsFoundHome = headerFoundHome.getElementsByClassName("pill-button-found-home");
for (var i = 0; i < btnsFoundHome.length; i++) {
  btnsFoundHome[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activeFoundHome");
  current[0].className = current[0].className.replace(" activeFoundHome", "");
  this.className += " activeFoundHome";
  });
}

// Add active class to the current button (highlight it)
var headerAgent = document.getElementById("agentDiv");
var btnsAgent = headerAgent.getElementsByClassName("pill-button-agent");
for (var i = 0; i < btnsAgent.length; i++) {
  btnsAgent[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activeAgent");
  current[0].className = current[0].className.replace(" activeAgent", "");
  this.className += " activeAgent";
  });
}






//Price Range Options

$(document).ready(function () {
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 1000000,
        hide_min_max: true,
        from: 150000,
        to: 850000,
        grid: false,
        skin: "big",
        step: 50000,
        force_edges: true
    });
});
