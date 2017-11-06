function submitData(){
  var nameData, sexData, emailData, numberData, ageData, pwdData, allData=[], dataString;
  nameData=$("#nameInput").val();
  sexData=$("#sexInput").val();
  emailData=$("#emailInput").val();
  numberData=$("#numberInput").val();
  ageData=$("#ageInput").val();
  pwdData=$("#pwdInput").val();
  allData={"name":nameData,"sex":sexData,"email":emailData,"number":numberData,"age":ageData,"pwd":pwdData};
  dataString=JSON.stringify(allData);
  localStorage.setItem("data", dataString);
}
