function onlyNumberKey(evt) {
    // Only ASCII charactar in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
        return false; 
    return true; 
}

$(document).ready(function(){
    $(".loader").hide();
    $(".cont-graph").hide();
    
    $("#form").submit(function(e){
        e.preventDefault();
        let data = $('#data').val();
        if(data != ""){
            $(".loader").show();

            let arr = data.split("").map(Number);
            let total = 0;
            let left_max = 0, right_max = 0
            let left = 0, right = arr.length - 1
            
            while (left <= right) {
                left_max = arr[left] > left_max ? arr[left] : left_max
                right_max = arr[right] > right_max ? arr[right] : right_max
                
                if (left_max > right_max) {
                    total += right_max - arr[right]
                    right--;
                } else {
                    total += left_max - arr[left]
                    left++
                }
            }

            //Create table
            let rows = Math.max.apply(null, arr);
            let columns = arr.length;
            let table = $("#graph");

            for(let x=0; x<rows; x++){
                var row = $('<tr>').addClass('row');
                table.append(row);
            }

            for(let y=0; y<columns; y++){
                var column = $('<td>');
                $('.row').append(column);
            }

            for(let j=0; j<columns; j++){
            let num = arr[j];
                for(let a = 0; a<num; a++){
                $('.row:eq('+a+') td:eq('+j+')').addClass('color')
                }
            }

            setTimeout(function(){ 
                $(".loader").hide();
                $(".cont-graph").show();
                $( "div.result" ).html("<p>The amount of water trapped is: <span class='total'>"+ total +"</span></p>");

            }, 1000);

            

            
        } else {
            alert("Please enter an input")
        }
    });
  
  });
  