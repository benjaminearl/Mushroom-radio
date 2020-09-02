
// S C H E D U L E
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    
    var j;
    for (j = 0; j < coll.length; j++) {
      if(coll[j].style.display === "grid") {
        coll[j].style.display === "none"
      }
    }

    var content = this.nextElementSibling;
    if (content.style.display === "grid") {
      content.style.display = "none";
    } else {
      content.style.display = "grid";
    }
  });
}

// M U S H R O O M S

var timeout;
document.onmousemove = function(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){
    setInterval(function() {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      
      var widthLocation = Math.floor(Math.random() * Math.floor(vw));

      var heightLocation = Math.floor(Math.random() * Math.floor(vh));

      var mushroom = document.createElement("img");
      mushroom.src = "img/mushroom-emoji.png";    
      mushroom.setAttribute('class', 'mushroom-img');
      mushroom.setAttribute('style', `position: fixed; top: ${heightLocation}px; right: ${widthLocation}px;`);

      document.body.appendChild(mushroom);
    }, 1000);
  }, 10000);

    
    document.querySelectorAll('.mushroom-img').forEach(function(a){
      a.remove()
      })
}


  