function send() {
  let input = document.getElementById("input");
  let text = input.value.toLowerCase().trim();

  if (text === "") return;

  addMessage("You: " + text);

  let reply = "I don't understand 🤖";

  if (text.includes("hello")) {
    reply = "Hello! I am NovaX AI 👋";
  }
  else if (text.includes("how are you")) {
    reply = "I'm running perfectly ⚡";
  }
  else if (text.includes("your name")) {
    reply = "My name is NovaX AI 🚀";
  }
  else if (text.includes("help")) {
    reply = "Try: hello, how are you, your name";
  }

  addMessage("NovaX AI: " + reply);

  input.value = "";
}

function addMessage(msg) {
  let chatBox = document.getElementById("chatBox");
  let p = document.createElement("p");
  p.innerText = msg;
  chatBox.appendChild(p);
}
