// Toggle Chat
window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('chat-toggle');
  const chatbox = document.getElementById('chatbox');

  toggle.onclick = () => {
    chatbox.style.display = chatbox.style.display === 'flex' ? 'none' : 'flex';
    chatbox.style.flexDirection = 'column';
  };
});

// AI Logic
function getAIResponse(msg) {
  msg = msg.toLowerCase().trim();

  /* GREETINGS */
  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
    return "Hello 👋 Welcome to Mehar Physiotherapy Clinic. How can I help you today?";
  }

  /* THANK YOU */
  if (msg.includes("thank")) {
    return "You're welcome 😊 If you need any help, feel free to ask or contact Mehar Physiotherapy Clinic.";
  }

  /* LOCATION */
  if (msg.includes("location") || msg.includes("where")) {
    return "We are located in Gaur City 2, Greater Noida West. Please use the Location button above for directions.";
  }

  /* APPOINTMENT */
  if (msg.includes("appointment") || msg.includes("book")) {
    return "To book an appointment, please Call or WhatsApp +91 9810359247.";
  }

  /* CLINIC NAME */
  if (msg.includes("clinic") || msg.includes("name")) {
    return "This is Mehar Physiotherapy Clinic, providing expert physiotherapy care in Greater Noida West.";
  }

  /* PAIN CONDITIONS */
  if (
    msg.includes("pain") ||
    msg.includes("neck") ||
    msg.includes("back") ||
    msg.includes("knee") ||
    msg.includes("shoulder") ||
    msg.includes("sciatica") ||
    msg.includes("slip disc") ||
    msg.includes("spondylosis")
  ) {
    return "Your condition requires proper assessment. For safe and effective recovery, please contact Mehar Physiotherapy Clinic for personalized physiotherapy treatment.";
  }

  /* DEFAULT RESPONSE */
  return "For accurate guidance and personalized treatment, please contact Mehar Physiotherapy Clinic at +91 9810359247.";
}

// Send Message
function sendMessage() {
  const input = document.getElementById('userInput');
  const messages = document.getElementById('chat-messages');
  const text = input.value.trim();
  if (!text) return;

  messages.innerHTML += `<div><b>You:</b> ${text}</div>`;

  const reply = getAIResponse(text);

  setTimeout(() => {
    messages.innerHTML += `<div><b>AI:</b> ${reply}</div>`;
    messages.scrollTop = messages.scrollHeight;
  }, 400);

  input.value = "";
}

function toggleChat() {
  const chat = document.getElementById("chatbot");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function resetChat() {
  const chatbox = document.getElementById("chatbox");
  chatbox.innerHTML = "";

  // Optional welcome message after reset
  addMessage("AI", "Hello 👋 How can I help you today?");
}

function addMessage(sender, text) {
  const chatbox = document.getElementById("chatbox");
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  msg.style.marginBottom = "8px";
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}
