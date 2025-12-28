const API_URL = "http://localhost:5000/api/chat";

let chatHistory = [];

const chatBody = document.getElementById("chatBody");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.onclick = sendMessage;
input.addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    addMessage("user", text);
    input.value = "";

    showTyping();

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            message: text,
            history: chatHistory
        })
    })
    .then(res => res.json())
    .then(data => {
        removeTyping();
        if (data.success) {
            addMessage("bot", data.response);
            chatHistory.push({ role: "user", content: text });
            chatHistory.push({ role: "assistant", content: data.response });
        } else {
            addMessage("bot", "Something went wrong.");
        }
    })
    .catch(() => {
        removeTyping();
        addMessage("bot", "Server not responding.");
    });
}

function addMessage(role, text) {
    const msg = document.createElement("div");
    msg.className = `message ${role}-message`;

    const content = document.createElement("div");
    content.className = "message-content";
    content.innerHTML = text.replace(/\n/g, "<br>");

    msg.appendChild(content);
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function showTyping() {
    const msg = document.createElement("div");
    msg.id = "typing";
    msg.className = "message bot-message";
    msg.innerHTML = `
        <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>`;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function removeTyping() {
    const t = document.getElementById("typing");
    if (t) t.remove();
}
