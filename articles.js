//Read from the .csv file "CMS"
var data;

Papa.parse('/Webpages/What_we_Offer/CMS.csv', {
  header: true,
  download: true,
  dynamicTyping: true,
  complete: function(results) {
    // console.log(results);
    data = results.data;
    console.log(data[0]);
    for (var i=0;i<data.length;i++) {
      addDiv(data[i]['Machine name'],data[i]['Machine risk'],data[i]['Risk assesment'],data[i]['S.O.P.'],data[i]['Training'],data[i]['Exam'],data[i]['Status'],data[i]['Model'],data[i]['Website text'],data[i]['Picture URL'])
    }
  }
});

//Add the element
function addDiv(mName,risk,riskAssessment,sop,training,exam,status,model,text,pic) {
  // Set defaults
  imglnk = "/Webpages/What_we_Offer/machine_placeholder.png";
  if(pic!=null){
    imglnk = "/Webpages/What_we_Offer"+pic;
    imglnk = imglnk.replace(/ /g,"%20");
  }
  console.log(imglnk)
  var img = "<div class=\"pic\" style=\"background-image: url("+imglnk+")\"></div>\n";
  // console.log(status);
  if(status=='Operational'){
    var h2 = "<h2><active>"+mName+" // "+model+"</active></h2>\n";
  }
  else {
    var h2 = "<h2>"+mName+" // "+model+"</h2>\n";
  }
  var p = "<p>"+text+"</p>";
  var properties = "<p><strong>Machine Risk: </strong>"+risk+"</p><p>"
    +"<strong>Risk Assessment: </strong>"+riskAssessment+"</p><p>"
    +"<strong>S.O.P.:  </strong>"+sop+"</p><p>"
    +"<strong>Training: </strong>"+training+"</p><p>"
    +"<strong>Exam: </strong>"+exam+"</p>";

  var div = document.createElement("div");
  div.setAttribute('class','machine');
  div.innerHTML = img+h2+"<div id=\"properties\">"+properties+"</div>"+p;
  document.getElementById('MachineList').appendChild(div);
}
