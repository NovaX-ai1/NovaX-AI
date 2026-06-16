setTimeout(() => {
  document.body.innerHTML = `
    <div style="text-align:center;font-family:sans-serif;margin-top:50px;">
      <h2>NovaX AI 🚀</h2>
      <p id="reply">Ask me something...</p>

      <input id="input" placeholder="Type here..." style="padding:10px;width:80%">
      <button onclick="send()" style="padding:10px;">Send</button>
    </div>
  `;
}, 1000);

function send() {
  let text = document.getElementById("input").value;

  let reply = "I don't understand yet 🤖";

  if (text.toLowerCase().includes("hello")) {
    reply = "Hello! I am NovaX AI 👋";
  }

  document.getElementById("reply").innerText = reply;
}
