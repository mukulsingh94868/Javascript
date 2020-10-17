function billingFunction() {
      var check = document.getElementById('same');

 	 		if ( check.checked==true) {
 	 			var shipname=document.getElementById("shippingName")
      var shipzip=document.getElementById("shippingZip")
      document.getElementById("billingName").value=shipname.value
      document.getElementById("billingZip").value=shipzip.value
  		}
    else{
      document.getElementById("billingName").value=""
      document.getElementById("billingZip").value=""


    }
}