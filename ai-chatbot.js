let chatInitialized = false;

function toggleChat() {
  const chat = document.getElementById('chatbot');
  const input = document.getElementById("userInput");
  
  chat.classList.toggle('show');

  if (chat.classList.contains('show')) {
    // Auto-focus input when opened
    setTimeout(() => input.focus(), 300);
    
    if (!chatInitialized) {
      addMessage("ai", "Hello 👋 Welcome to Mehar Physiotherapy Clinic. How can I help you today?");
      chatInitialized = true;
    }
  }
}

function resetChat() {
  const messages = document.getElementById("chat-messages");
  messages.innerHTML = "";
  addMessage("ai", "Chat reset. How can I help you?");
}

function addMessage(type, text) {
  const messages = document.getElementById("chat-messages");
  const msg = document.createElement("div");

  msg.className = type === "user" ? "msg-user" : "msg-ai";
  // Use innerHTML so we can include clickable links/bold text
  msg.innerHTML = text; 

  messages.appendChild(msg);
  
  // Improved scroll logic
  messages.scrollTo({
    top: messages.scrollHeight,
    behavior: 'smooth'
  });
}

function getAIResponse(msg) {
  msg = msg.toLowerCase().trim();

  if (/^(hi|hello|hey|hii)$/.test(msg)) {
    return "Hello 👋 How can I help you today?";
  }

  if (msg.includes("location") || msg.includes("where") || msg.includes("address")) {
    return "We are located at <strong>F-42, 16th Avenue, Gaur City 2</strong>. <br><br><a href='https://www.google.com/maps/search/?api=1&query=Mehar+Physiotherapy+Clinic&query_place_id=ChIJ4_vGaUnvDDkR5vtYeucjsNU' target='_blank' style='color:#0e5a95'>Click here for Directions</a>";
  }

  if (msg.includes("appointment") || msg.includes("book") || msg.includes("fee") || msg.includes("charge")) {
    return "To book an appointment or inquire about fees, please WhatsApp Dr. Arneja: <br><br><a href='https://wa.me/919810359247' target='_blank' style='color:#0a7833'><b>Chat on WhatsApp</b></a>";
  }

  if (msg.includes("pain") || msg.includes("neck") || msg.includes("back") || msg.includes("knee")) {
    return "I'm sorry to hear you're in pain. For a proper diagnosis and treatment plan, please call us at <a href='tel:+919810359247'>+91 9810359247</a>.";
  }

  return "For accurate guidance, please contact Mehar Physiotherapy Clinic at +91 9810359247 or visit our website.";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage("user", text);
  input.value = "";

  // Show a "typing" feel
  setTimeout(() => {
    const reply = getAIResponse(text);
    addMessage("ai", reply);
  }, 600);
}

// Enter key support
document.getElementById("userInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
