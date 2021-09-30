
 var isAdd = true;
 $(document).ready(function () {
 
     loadData();
 
     $("#addnguoidung").click(function(){
         $(".modal").css({"display":"block","border": "1px red solid"});
         isAdd = true;
     });
 
     $(".close").click(function(){
         $(".modal").css({"display":"none",});
     });
 
     $("#bntSumit").click(function(){
       
         var dataFromUI = {};
         if(editten.value === ""){
            editten.style.border = "1px red solid";
             isAdd = false;
           
         } 
         else{
            editten.style.border = "2px ";
             isAdd = true;     
         }
         if(editcongviec.value === ""){
            editcongviec.style.border = "1px red solid";
             isAdd = false;
            
         } 
         else{
            editcongviec.style.border = "2px ";
             isAdd = true;     
         }
         if(editngaybd.value === ""){
            editngaybd.style.border = "1px red solid";
             isAdd = false;
             
         } 
         else{
            editngaybd.style.border = "2px ";
             isAdd = true;     
         }
         if(editngaykt.value === ""){
            editngaykt.style.border = "1px red solid";
             isAdd = false;
             
         } 
         else{
            editngaykt.style.border = "2px ";
             isAdd = true;     
         }
         if(edittgdk.value === ""){
            edittgdk.style.border = "1px red solid";
             isAdd = false;
             
         } 
         else{
            edittgdk.style.border = "2px ";
             isAdd = true;     
         }
         dataFromUI.ten = $("#editten").val();
         dataFromUI.congviec = $("#editcongviec").val();
         dataFromUI.ngaybd = $("#editngaybd").val();
         dataFromUI.ngaykt = $("#editngaykt").val();
       
         dataFromUI.tgdk = $("#edittgdk").val();
         dataFromUI.trangthai = $("#edittrangthai").val();
       
 
         if(isAdd){
        
         $.ajax({
             url: "https://609e931b33eed80017958d48.mockapi.io/sinhvien/api/congviec",
             type: "POST",
             data: dataFromUI,
             success: function(){
                loadData();
                closeModal();
             }
         })
         }else{
             $.ajax({
                 url: "https://609e931b33eed80017958d48.mockapi.io/sinhvien/api/congviec/"+$("#editId").val(),
                 type: "PUT",
                 data: dataFromUI,
                 success: function(){
                     loadData();
                     closeModal();
                 }
             })
         }
     
     });
 
 });
 

  
 function loadData() {
    
     $("#tblnguoidung tbody").empty();
     $.get("https://609e931b33eed80017958d48.mockapi.io/sinhvien/api/congviec", function (data, status) {
     
         console.log(data);
      
         for (var index = 0; index < data.length; index++) {
           
 
             var tr = '<tr>' +
                 '<td>' + data[index].id + '</td>' +
               
                 '<td>' + data[index].ten + '</td>' +
                 '<td>' + data[index].congviec + '</td>' +
                 '<td>' + data[index].ngaybd + '</td>' +
                 
                 '<td>' + data[index].ngaykt + '</td>' +
               
                 '<td>' + data[index].tgdk + '</td>' +
                 '<td>' + data[index].trangthai + '</td>' +
           
                 '<td>' + 
                     '<i onclick="edit('+ data[index].id+')" style="color: orange" class="far fa-edit"></i>'+
                     '<i onclick="deleteCrush('+ data[index].id+')" style="color: red; margin-left: 10px;" class="far fa-trash-alt"></i>'
 
                  
                  '<td>'
             '</tr>'
     
             $("#tblnguoidung tbody").append(tr);
          
 
         }
 
     })
 
 }
 
 

 function edit(id){
   
     $.ajax({
         url: "https://609e931b33eed80017958d48.mockapi.io/sinhvien/api/congviec/"+id,
         success: function(data,status){
             console.log(data);
             $("#editten").val(data.ten);
             $("#editcongviec").val(data.congviec);
            
             $("#editngaybd").val(data.ngaybd);
        
             $("#editngaykt").val(data.ngaykt);
             $("#edittgdk").val(data.tgdk);
             $("#edittrangthai").val(data.trangthai);
             $("#editId").val(data.id);
             showModal();
         }
     })
     isAdd = false;
   
 }
 
 
 
 function deleteCrush(id)
 {
     $.ajax({
         url: "https://609e931b33eed80017958d48.mockapi.io/sinhvien/api/congviec/" + id,
         type: "DELETE",
         success: function(){
             loadData();
         }
     })
 }
 
 function closeModal(){
     $(".modal").css({"display": "none"})
 }
 
 function showModal(){
     $(".modal").css("display","block");
 }
 