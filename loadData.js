//Read from the .csv file "CMS"
function addData(db,id){
  var data;
  Papa.parse(db, {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function(results) {
      data = results.data;
      // console.log(data[0]);
      for (var i=0;i<data.length;i++) {
        addDiv(id,data[i]['itemTitle'],data[i]['placeDate'],data[i]['description'],data[i]['link']);
      }
    }
  });
}

//Add the element
function addDiv(id,itemTitle,placeDate,description,link) {

  var ItemTitle = '<div class=\"ItemTitle\"><itemTitle><a href = \"'+link+'\">'+itemTitle+'</a></itemTitle><itemdate>'+placeDate+'</itemDate></div>';
  var Description = '<description>'+description+'</description>';

  var div = document.createElement("div");
  div.setAttribute('class','Item');
  div.innerHTML = ItemTitle+Description;
  document.getElementById(id).appendChild(div);
}
