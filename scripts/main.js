
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Hey! Prottay here.");
  await delay(500);
  createText("In this termial you can type the commands below to view about me.");
  createText("Commands:");
  createCode("about","To know more about me");
  createCode("contact", "Contact me.");
  createCode("clear", "Clean the terminal.");
  createCode("help","See all commands.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "(base) ";
  span1.textContent = "human@planetearth:";
  span2.textContent = "~$ ";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    
    createCode("works", "List of my projects.");
    createCode("about", "About me.");
    createCode("contact", "Contact me.");
    createCode("edu", "Institues taught me.");
    createCode("skill", "What am I good at.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/human71' target='_blank'><i class='fab fa-github white'></i> github.com/heberleonard2</a>")
  }
  else if(value === "about"){
    trueValue(value);
    createText("This is Prottay Kumar Adhikary. I am exploring the fields of research on Computer science specifically the domain of NLP, I am now delving into the Machine translation, Summarization, Information retrival, Speech recognition and so on.")
  }
  else if(value === "contact"){
    trueValue(value);
    createText("<a href='https://github.com/human71' target='_blank'><i class='fab fa-github white'></i> GitHub</a>")
    createText("<a href='https://www.linkedin.com/in/prottay71/' target='_blank'><i class='fab fa-linkedin-in white'></i> LinkedIn</a>")
    createText("<a href='https://www.researchgate.net/profile/Prottay-Adhikary' target='_blank'><i class='fab fa-researchgate white'></i> ResearchGate</a>")
  }
  else if(value === "edu"){
    trueValue(value);
    createText("<a href='https://en.wikipedia.org/wiki/Magura_Government_High_School' target='_blank'><i class='fas fa-school'></i> 10th: MGHS</a>")
    createText("<a href='https://en.wikipedia.org/wiki/Notre_Dame_College,_Dhaka' target='_blank'><i class='fas fa-church'></i> 12th: NDC</a>")
    createText("<a href='https://en.wikipedia.org/wiki/National_Institute_of_Technology,_Silchar' target='_blank'><i class='fas fa-graduation-cap'></i> U.G.: NITS</a>")
  }

  else if(value === "skill"){
    trueValue(value);
    createText("<i class='fas fa-circle'></i> Programming: C, Java, Python.")
    createText("<i class='fas fa-circle'></i> Web services: HTML5, CSS, JS, WP.")
    createText("<i class='fas fa-circle'></i> Designing: Adobe Designing Suite, Figma, GIMP, Krita.")
    createText("<i class='fas fa-circle'></i> Documentation: Microsoft Office Suite, Libre Office Suite, Google Suite.")
    createText("<i class='fas fa-circle'></i> Language: Bangla (Native), English (Competent), Hindi (Conversational).")
  
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`${value}: command not found`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  p.innerHTML =text;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code}<span class='text'>${text}</span>`;
  app.appendChild(p);
}

open_terminal();