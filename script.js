function sendMessage() {
  let input = document.getElementById("input");
  let chat = document.getElementById("chat");

  let userText = input.value;
  if (userText === "") return;

  // user message
  chat.innerHTML += <div class="msg user">You: ${userText}</div>;

  // fake AI reply (working demo)
  let reply = getAIResponse(userText);

  setTimeout(() => {
    chat.innerHTML += <div class="msg ai">NovaX AI: ${reply}</div>;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  input.value = "";
}

function getAIResponse(text) {
  text = text.toLowerCase();

  if (text.includes("hello")) return "Hello! Main NovaX AI hoon 🤖";
  if (text.includes("kia hal")) return "Main theek hoon! Tum sunao 😊";
  if (text.includes("name")) return "Mera naam NovaX AI hai 🚀";
  if (text.includes("help")) return "Main tumhari coding aur AI mein help kar sakta hoon 💡";

  return "Mujhe samajh nahi aya, dobara try karo 🙂";
}
