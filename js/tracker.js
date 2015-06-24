window.onload = function(){


var totalClickList = {};

  var elementTracker = (function (event){
    window.addEventListener('click', function(event){



      var elementClicked = event.target.nodeName;
      var classNameClicked = event.target.className;
      var idNameClicked = event.target.id;
      var fullElementSelction = elementClicked;

      if(classNameClicked){
        fullElementSelction = fullElementSelction + ' .' + classNameClicked;
      }

      if(idNameClicked){
        fullElementSelction = fullElementSelction + ' .' + idNameClicked;
      }



      if(totalClickList.hasOwnProperty(fullElementSelction)){
        totalClickList[fullElementSelction]++;
      }else{
        totalClickList[fullElementSelction] = 1;
      }
      console.log(event);
      console.log(totalClickList);
      displayBox.innerHTML += 32423;

    })
  })();

  var displayBox = document.createElement('div');

  var displayClickedList = (function(){

    displayBox.setAttribute('id', 'display-box');
    window.document.body.appendChild(displayBox);

  })();



}
