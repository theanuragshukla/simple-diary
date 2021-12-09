function submitForm(){
var a= document.getElementById('msg').value;
var b= document.getElementById('remark').value;
  $.ajax({
            url:"/",
            type: "post",
            dataType: 'json',
            data:{msg: a,remark:b},
            success:function(result){
			document.getElementById('msg').value='';
			document.getElementById('remark').value='';
         },
         error:function(result){
        	 alert('error');

                    }
     });
}
