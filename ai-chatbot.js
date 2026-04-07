let chatInitialized = false;

// TOGGLE CHAT
function toggleChat() {
  const chat = document.querySelector('.chatbot');
  chat.classList.toggle('show');

  // Show welcome message ONLY once
  if (!chatInitialized) {
    addMessage("ai", "Hello 👋 Welcome to Mehar Physiotherapy Clinic. How can I help you today?");
    chatInitialized = true;
  }
}

// RESET CHAT
function resetChat() {
  const messages = document.getElementById("chat-messages");
  messages.innerHTML = "";
  addMessage("ai", "Hello 👋 Welcome to Mehar Physiotherapy Clinic. How can I help you today?");
}

// ADD MESSAGE
function addMessage(type, text) {
  const messages = document.getElementById("chat-messages");
  const msg = document.createElement("div");

  msg.className = type === "user" ? "msg-user" : "msg-ai";
  msg.textContent = text; // FIXED (was innerHTML)

  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

// AI RESPONSE LOGIC
function getAIResponse(msg) {
  msg = msg.toLowerCase().trim();

  // GREETING (strict match)
  if (/^(hi|hello|hey|hii)$/.test(msg)) {
    return "Hello 👋 Welcome to Mehar Physiotherapy Clinic. How can I help you today?";
  }

  // THANK YOU
  if (msg.includes("thank")) {
    return "You're welcome 😊 If you need any assistance, feel free to contact Mehar Physiotherapy Clinic.";
  }

  // LOCATION
  if (msg.includes("location") || msg.includes("where")) {
    return "We are located in Gaur City 2, Greater Noida West. Please use the Location button above for directions.";
  }

  // APPOINTMENT
  if (msg.includes("appointment") || msg.includes("book")) {
    return "To book an appointment, please Call or WhatsApp +91 9810359247.";
  }

  // CLINIC INFO
  if (msg.includes("clinic") || msg.includes("name")) {
    return "This is Mehar Physiotherapy Clinic, providing expert physiotherapy care in Greater Noida West.";
  }

  // PAIN / CONDITIONS
  if (
    msg.includes("pain") ||
    msg.includes("neck") ||
    msg.includes("back") ||
    msg.includes("knee") ||
    msg.includes("shoulder") ||
    msg.includes("sciatica") ||
    msg.includes("slip disc") ||
    msg.includes("spondylosis") ||
    msg.includes("arm") ||
    msg.includes("leg")
  ) {
    return "This requires proper assessment. For safe and effective recovery, please contact Mehar Physiotherapy Clinic for personalized physiotherapy treatment.";
  }

  // DEFAULT
  return "For accurate guidance and personalized treatment, please contact Mehar Physiotherapy Clinic at +91 9810359247.";
}

// SEND MESSAGE
function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage("user", text);

  const reply = getAIResponse(text);

  // Typing delay (more natural)
  setTimeout(() => {
    addMessage("ai", reply);
  }, 500);

  input.value = "";
}

// ENTER KEY SUPPORT (NEW)
document.getElementById("userInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
