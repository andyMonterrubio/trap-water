function onlyNumberKey(evt) {
    // Only ASCII charactar in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
        return false; 
    return true; 
}

$(document).ready(function(){
    $("#form").submit(function(e){
        e.preventDefault();
        
        let data = $('#data').val();
        if(data != ""){
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

            $( "div.result" ).html("<p>The amount of water trapped is: <span class='total'>"+ total +"</span></p>");
        } else {
            alert("Please enter an input")
        }
    });
  
  });
  