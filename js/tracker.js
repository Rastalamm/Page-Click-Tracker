window.onload = function(){


var totalClickList = {};

  var elementTracker = (function (event){
    window.addEventListener('click', function(event){
    var displayBox = document.createElement('div');
    displayBox.setAttribute('id', 'display-box');
    displayBox.style.background = 'blue';
    window.document.insertBefore(displayBox, window.document.body);
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
    })
  })();

  var displayClickedList = function(){
    var displayBox = document.createElement('div');
    displayBox.setAttribute('id', 'display-box');
    displayBox.style.background = 'blue';
    window.document.insertBefore(displayBox, window.document.body.header);
  }



}
