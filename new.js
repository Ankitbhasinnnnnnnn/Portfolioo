document.getElementById("curr").innerHTML = curringEffect("Ankit")("Bhasin");
       
       
function curringEffect(fname) {
        return function(lname) {
 
            return fname + " " + lname ;
        }
      }

      function alertMessage() {
        var message = 'ok'; 
        function showName() { 
                      alert(message); 
     
        }
        showName();
      }


      var obj={
        num : 20
     }
     var add = function(){
        return (age.innerHTML=(this.num ));
     }
  
    add.call(obj); 

const overlay=document.querySelector("#overlay");
document.querySelector("#show-modal-btn").addEventListener("click",()=>{
    overlay.style.display="block";
})
document.querySelector("#close-modal-btn").addEventListener("click",()=>{
    overlay.style.display="none";
})
