function send() {
  let input = document.getElementById("input");
  let text = input.value.toLowerCase().trim();

  if (text === "") return;

  addMessage(text, "user");

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
  else if (text.includes("joke")) {
    reply = "Why did the computer go to doctor? Because it had virus 😄";
  }

  setTimeout(() => {
    addMessage(reply, "ai");
  }, 500);

  input.value = "";
}

function addMessage(text, type) {
  let chatBox = document.getElementById("chatBox");

  let div = document.createElement("div");
  div.classList.add("msg");

  if (type === "user") {
    div.classList.add("user");
    div.innerText = "You: " + text;
  } else {
    div.classList.add("ai");
    div.innerText = "NovaX AI: " + text;
  }

  chatBox.appendChild(div);

  chatBox.scrollTop = chatBox.scrollHeight;
}
