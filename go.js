<script>
    function welcomeMsg(msg){
      alert(msg);
      var name = prompt("what is your name?");
      return name;
    }
    var firstName = welcomeMsg("hi");
    document.write(firstName);

    var x = prompt("hello world");
    document.write(x);

    <div onclick = "message()">Clicking on this Div will invoke a JavaScript function</div>

    var d = new Date();
    document.getElementById("demo").innerHTML = d.getTime();





  </script>