var select = document.getElementById("filter");
filter.addEventListener("click", sede);
  function sede (e){
    e.preventDefault();
    var goToIndex = (event.target.selectedIndex);
    var city = event.target[goToIndex].dataset.city;
    var classGeneration = event.target[goToIndex].dataset.classyear;
    //console.log(city, classGeneration);
    var totalStudents= data[city][classGeneration]["students"];
    var totalStudentsLength= totalStudents.length;
    console.log(totalStudentsLength);
    var pTotalStudents = document.getElementById("text-total-students");
    var textPTotalStudents = document.createTextNode(totalStudentsLength);
    pTotalStudents.appendChild(textPTotalStudents);
    var newPTotalStudents = document.createElement('p');

    textPTotalStudents.removeChild(totalStudentsLength);
    }
  //  var s= data[city][classGeneration]["students"][0]["active.true"];







/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
