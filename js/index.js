//calculateTip function to display in total tip amount

function calculateTip (val){
    var mealCost = $("#mealCost");
    var totalTip = parseFloat(mealCost.val()) * val;
    console.log(val);
    return $("#totalTip").val(totalTip);
}

//jQuery
$(document).ready(function(){
    const input = $("#totalTip");
    const mealCost = $("#mealCost");
    
    //Clear Button Function
    $("#clear").click(function(){
        $("#mealCost").val("");
        input.val("");
        $("#total").val("");
        $("#customTip").val("");
    })
    

    //custom tip section
    $("#addTip").click(function(){
        var customTip = parseFloat($("#customTip").val());
        if ($("#dollars").prop("checked")){
            input.val(customTip);
        }
        if ($("#percentage").is(":checked")){
            if (mealCost.val() == ""){
                alert("Please tell us how much your meal costs!");
            }
            input.val(((customTip/100) * mealCost.val()).toFixed(2));  
        }
        if (!(($("#dollars").prop("checked")) || ($("#percentage").is(":checked")))) {
            alert("Please select if you'd like to add tip in dollars or as a percentage of your meal")
        }
        console.log(customTip);
        console.log(typeof(customTip))
    })

    //Meal Total (Cost of meal + Tip Amount)
    $("#enter").click(function(){
        var mealTotal = (parseFloat(mealCost.val()) + parseFloat(input.val())).toFixed(2);
        $("#total").val(mealTotal);
        if(input.val() == ""){
            $("#total").val(mealCost.val());
        }
    })
    
})


//input numbers only with decimal
$(function(){
    $("input[name='numonly']").on('input', function(e){
        $(this).val($(this).val().replace(/[^0-9],'.'/g, ''))
    })
})

