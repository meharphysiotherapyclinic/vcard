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

  // 1. GREETINGS
  if (/^(hi|hello|hey|hii|good morning|good evening)$/.test(msg)) {
    return "Hello 👋 Welcome to Mehar Physiotherapy Clinic. How can I help you today?";
  }

  // 2. THANK YOU / APPRECIATION
  if (msg.includes("thank") || msg.includes("thx") || msg.includes("thanks")) {
    return "You're very welcome! 😊 We are here to help you recover. Feel free to ask if you have more questions.";
  }

  // 3. TIMINGS / OPENING HOURS
  if (msg.includes("time") || msg.includes("open") || msg.includes("hours") || msg.includes("sunday")) {
    return "We are open <strong>Monday to Sunday, 8:00 AM to 9:00 PM</strong>. Would you like to check availability for today?";
  }

  // 4. HOME VISITS
  if (msg.includes("home") || msg.includes("visit") || msg.includes("at house")) {
    return "Yes, we provide <strong>Home Visit Physiotherapy</strong> in Gaur City 1, 2, and across Greater Noida West. Please share your location on WhatsApp for booking.";
  }

  // 5. APPOINTMENT / BOOKING
  if (msg.includes("appointment") || msg.includes("book") || msg.includes("consultation")) {
    return "To book an appointment, you can call us or click here: <br><br><a href='https://wa.me/919810359247?text=I%20want%20to%20book%20an%20appointment' target='_blank' style='color:#0a7833; font-weight:bold;'>Direct WhatsApp Booking</a>";
  }

  // 6. FEES / CHARGES
  if (msg.includes("fee") || msg.includes("charge") || msg.includes("cost") || msg.includes("price")) {
    return "Our charges are very competitive. For a specific quote (Clinic visit vs. Home visit), please contact us at <strong>+91 9810359247</strong>.";
  }

  // 7. SPECIFIC PAIN / CONDITIONS
  if (
    msg.includes("back") || msg.includes("neck") || msg.includes("knee") || 
    msg.includes("sciatica") || msg.includes("slip disc") || msg.includes("shoulder") ||
    msg.includes("frozen") || msg.includes("injury") || msg.includes("post surgery")
  ) {
    return "Dr. Arneja specializes in treating " + msg + ". Proper assessment is key to recovery. Would you like to schedule a clinical examination?";
  }

  // 8. LOCATION
  if (msg.includes("location") || msg.includes("where") || msg.includes("address") || msg.includes("map")) {
    return "We are located at: <strong>F-42, 16th Avenue, Gaur City-2, Greater Noida West</strong>. <br><br><a href='https://www.google.com/maps/search/?api=1&query=Mehar+Physiotherapy+Clinic&query_place_id=ChIJ4_vGaUnvDDkR5vtYeucjsNU' target='_blank' style='color:#0e5a95'>Open in Google Maps</a>";
  }

  // DEFAULT FALLBACK
  return "I'm not sure I understood that correctly. For expert guidance regarding your condition, please call <strong>+91 9810359247</strong> or type 'Appointment'.";
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
