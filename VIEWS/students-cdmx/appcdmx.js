var select = document.getElementById('generation');
generation.addEventListener("click", yearGeneration);
  function yearGeneration(e) {
    e.preventDefault();
    var infoIndex = (event.target.selectedIndex);
    var city = event.target[infoIndex].dataset.city;
    var classGeneration = event.target[infoIndex].dataset.classyear;
    //console.log(city, classGeneration);
    getInfo(city, classGeneration);
  }
  function getInfo(city, classGeneration){
    var studentsByGeneration = data[city][classGeneration]["students"];
    document.getElementById("students-info").innerHTML= "";
    //console.log(studentsByGeneration);
    for (var i = 0; i < 3; i++) {
      var photoStudent =
      var nameStudent = students[i]
      var
    }

  }
