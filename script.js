function submitForm(){
    var xhr = new XMLHttpRequest() ;
    xhr.open("POST", "/");
    xhr.onreadystatechange = function() {
         if(xhr.readyState==4) {
         alert(xhr.status);
     }
}
        var formData = new FormData(document.getElementById("form")); 
        xhr.send(formData);
}
