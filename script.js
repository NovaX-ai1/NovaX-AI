console.log("sendMessage working");
function sendMessage() {
  let input = document.getElementById("input");
  let chat = document.getElementById("chat");

  let text = input.value.trim();
  if (text === "") return;

  chat.innerHTML += <div class="msg user">${text}</div>;

  let reply = getAIResponse(text);

  setTimeout(() => {
    chat.innerHTML += <div class="msg ai">${reply}</div>;
    chat.scrollTop = chat.scrollHeight;
  }, 400);

  input.value = "";
}

function getAIResponse(text) {
  text = text.toLowerCase();

  if (text.includes("hello")) return "Hello 👋 Main NovaX AI hoon";
  if (text.includes("kaise ho")) return "Main theek hoon 😄 tum sunao";
  if (text.includes("name")) return "Mera naam NovaX AI hai 🤖";
  if (text.includes("help")) return "Main coding aur AI mein help kar sakta hoon 💡";

  return "Mujhe samajh nahi aya 🤔 dobara try karo";
}
