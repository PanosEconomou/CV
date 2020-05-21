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
