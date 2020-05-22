// Function to be used as a callback to load the prompts
function processPrompts(prompts){
  Np = prompts.length;
  p = Math.floor(Math.random()*Np);
  console.log(p)

  //Get a random prompt
  prompt = prompts[p]["Prompts"];
  console.log(prompt);

  // Add a new HTML Magik element :)
  var par = document.createElement("p");
  par.innerHTML = prompt;
  par.setAttribute('id',"prompt")
  par.setAttribute('onclick',"changePrompt()")
  document.getElementById('Q').appendChild(par)
}

// Function to add the options
function processResposes(responses){
  Nr = responses.length;
  Nresponses = 8;
  resp = []
  for (i=0;i<Nresponses;i++){
    r = Math.floor(Math.random()*Nr)

    var response;

    do {
      response = responses[r]["Responses"];
    } while(resp.includes(response));

    resp.push(response)
  }

  console.log(resp)

  for (i=0;i<Nresponses;i++){
    var div = document.createElement("div");
    div.setAttribute('class','response');
    div.innerHTML = "<p>" + resp[i] + "</p>";
    document.getElementById('R').appendChild(div);
  }

}
// This will read form a file
function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}


function changeSize(){
  banner = document.getElementById('Q')
  if (banner.style.height == "100%"){
    banner.style.height = "450px";
  }
  else{
    banner.style.height = "100%";
  }
}

function changePrompt(){
  prompt = document.getElementById("prompt").remove();
  Papa.parse("Prompts.csv", {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function(results){
      processPrompts(results.data);
    }
  });
}
