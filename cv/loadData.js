// Read from the .csv file "CMS"
function addData(db,id){
  var data;
  Papa.parse(db, {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function(results) {
      data = results.data;
      // console.log(data);
      for (var i=0;i<data.length;i++) {
        addDiv(id,data[i]['itemTitle'],data[i]['placeDate'],data[i]['description'],data[i]['link']);
      }
    }
  });
}

// Add the element
function addDiv(id,itemTitle,placeDate,description,link) {

  var ItemTitle = '<div class=\"ItemTitle\"><itemTitle><a href = \"'+link+'\">'+itemTitle+'</a></itemTitle><itemdate>'+placeDate+'</itemDate></div>';
  var Description = '<description>'+description+'</description>';

  var div = document.createElement("div");
  div.setAttribute('class','Item');
  div.innerHTML = ItemTitle+Description;
  document.getElementById(id).appendChild(div);
}


// Add a small gallery element
function addIconData(db){
  var data;
  Papa.parse(db, {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function(results) {
      data = results.data;
      // console.log(data);
      for (var i=0;i<data.length;i++) {
        addIcon(data[i]['class'],data[i]['src'],data[i]['alt'],data[i]['title'],data[i]['percent']);
      }
      addIconInteractivity();
    }
  });
}

function addIcon(id,src,alt,title,percent){
  icon = '<img class="Icon" src='+src+' alt='+alt+'>'
  slider = '<div class="meter"><span style="width: '+percent+'"></span></div>'
  description = '<div class="Content"><p>'+title+'</p>'+slider+'</div>'

  var div = document.createElement("div");
  div.setAttribute('class','IconDiv');
  div.innerHTML = icon + description;
  // console.log(div)
  document.getElementById(id).appendChild(div);
}

// Handle collapsible icons
function addIconInteractivity(){
  var icons = document.getElementsByClassName("Icon");

  for (var i=0; i < icons.length; i++){
    icons[i].addEventListener("click",toggleFunc);
  }
  // console.log('interactivity')
}

function toggleFunc(){
  this.classList.toggle("Icon--active")
  // var content = this.nextElementSibling;
  // content.classList.toggle("ContentActive")
  this.parentElement.classList.toggle("IconDiv--active")
}

// Set up the circles and relevant animations
function setUpCircles(){
  circles = document.getElementsByClassName("ring");
  skills = document.getElementsByClassName("skill");

  for (var i=0; i < circles.length;i++){
    circumference = circles[i].r.baseVal.valueInSpecifiedUnits*2*Math.PI;

    circles[i].style.strokeDasharray = String(circumference) + " " + String(1*circumference)
    circles[i].style.strokeDashoffset = circumference;

    skills[i].addEventListener("mouseenter",circleEntered);
    skills[i].addEventListener("mouseleave",circleExited);
    skills[i].addEventListener("click",circleClicked)

    setCircleProgress(circles[i],0);
  }
}

// Turns the circle appropriately to a percent
function setCircleProgress(circle,progress){
  // progress = (progress-50)*2
  progress*=2/3
  circumference = circle.r.baseVal.valueInSpecifiedUnits*2*Math.PI;

  const turn = circumference - progress/100 * circumference;
  circle.style.strokeDashoffset = turn;
}

// Hnadle icon interactivity
async function circleEntered(){
  circle = this.children[0].children[0];
  setCircleProgress(circle,circle.dataset.percent);

  text = this.children[1];
  text.classList.add('inner-text-hover')
}

function circleExited(){
  circle = this.children[0].children[0];
  setCircleProgress(circle,0);

  text = this.children[1];
  text.classList.remove('inner-text-hover')
}

function circleClicked(){
  this.classList.toggle('skill--clicked')
}

function addSkill(name,percent){
  ring = '<svg class="ring-svg"><circle class="ring" r="100%" data-percent="'+percent+'"/></svg>';
  text = '<p class="inner-text">'+name+'</p>';

  var div = document.createElement("div");
  div.setAttribute('class','skill');
  div.innerHTML = ring+text;
  // console.log(div)
  document.getElementById('Theoretical').appendChild(div);
}

function addSkillData(db){
  var data;
  Papa.parse(db, {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function(results) {
      data = results.data;
      // console.log(data);
      for (var i=0;i<data.length;i++) {
        addSkill(data[i]['name'],data[i]['percent']);
      }
      setUpCircles();
    }
  });
}