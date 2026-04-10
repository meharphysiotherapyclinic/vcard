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

  // Helper Links for cleaner code
  const callLink = "<a href='tel:+919810359247' style='color:#ab214d; font-weight:bold;'>📞 Call Now</a>";
  const waLink = "<a href='https://wa.me/919810359247?text=I%20want%20to%20book%20an%20appointment' target='_blank' style='color:#0a7833; font-weight:bold;'>💬 WhatsApp Booking</a>";
  const mapLink = "<a href='https://www.google.com/maps/search/?api=1&query=Mehar+Physiotherapy+Clinic&query_place_id=ChIJ4_vGaUnvDDkR5vtYeucjsNU' target='_blank' style='color:#0e5a95; font-weight:bold;'>📍 View Clinic Map</a>";

  // 1. GREETINGS & GENERAL INQUIRY
  if (/^(hi|hello|hey|hii|physio|doctor|consultation|help)$/.test(msg)) {
    return "Hello! 👋 Welcome to Mehar Physiotherapy Clinic. Are you looking to visit our clinic or do you need a home visit? <br><br> " + waLink;
  }

  // 2. THANK YOU
  if (msg.includes("thank") || msg.includes("thx") || msg.includes("thanks")) {
    return "You're very welcome! 😊 We are committed to your recovery. Feel free to reach out if you need anything else: " + callLink;
  }

  // 3. TIMINGS & DURATION (FAQ 3)
  if (msg.includes("time") || msg.includes("open") || msg.includes("hours") || msg.includes("sunday") || msg.includes("long") || msg.includes("duration")) {
    if (msg.includes("long") || msg.includes("duration")) {
        return "A typical patient session lasts <strong>30 to 45 minutes</strong>. <br><br>Book your slot: " + waLink;
    }
    return "We are open <strong>Mon-Sun, 8:00 AM to 9:00 PM</strong>. We recommend booking in advance to avoid waiting. <br><br>" + callLink;
  }

  // 4. HOME VISITS (FAQ 7)
  if (msg.includes("home") || msg.includes("visit") || msg.includes("at house") || msg.includes("come to me")) {
    return "Yes, we provide <strong>Home Visit Physiotherapy</strong> in Gaur City and Greater Noida West for patients with limited mobility. <br><br> <a href='https://wa.me/919810359247?text=I%20need%20a%20Home%20Visit' target='_blank' style='color:#0a7833; font-weight:bold;'>💬 Request Home Visit</a>";
  }

  // 5. APPOINTMENT & REFERRAL (FAQ 2 & 10)
  if (msg.includes("appointment") || msg.includes("book") || msg.includes("consult") || msg.includes("contact") || msg.includes("referral") || msg.includes("doctor")) {
    return "You can book appointment directly via:<br><br>" + waLink + "<br>" + callLink;
  }

  // 6. FEES & SESSIONS (FAQ 4 & 6)
  if (msg.includes("fee") || msg.includes("charge") || msg.includes("cost") || msg.includes("price") || msg.includes("how many") || msg.includes("sessions")) {
    if (msg.includes("how many") || msg.includes("sessions")) {
        return "Recovery varies for every patient. After the first assessment, Dr. Arneja will provide a personalized treatment plan. <br><br>" + callLink;
    }
    return "Our charges are competitive for both clinic and home visits. For a precise quote, please call us: " + callLink;
  }

  // 7. SYMPTOMS & CONDITIONS (FAQ 1, 12, 13)
  // Expanded keywords: numbness, tingling, stiffness, fracture, paralysis, ACL, stroke, sciatica
  if (
    msg.includes("back") || msg.includes("neck") || msg.includes("knee") || msg.includes("sciatica") || 
    msg.includes("disc") || msg.includes("shoulder") || msg.includes("frozen") || msg.includes("injury") || 
    msg.includes("surgery") || msg.includes("sports") || msg.includes("treat") || msg.includes("numb") || 
    msg.includes("tingl") || msg.includes("stiff") || msg.includes("fracture") || msg.includes("paralysis") ||
    msg.includes("stroke") || msg.includes("acl") || msg.includes("ligament")
  ) {
    return "Dr. Arneja has extensive experience treating these conditions. Early intervention is key to preventing chronic pain. <br><br><strong>Consult Dr. Arneja now:</strong><br>" + waLink + "<br>" + callLink;
  }

  // 8. PAIN CONCERNS (FAQ 5)
  if (msg.includes("painful") || msg.includes("hurt") || msg.includes("scared") || msg.includes("safe")) {
    return "Don't worry! Physiotherapy is designed to <strong>reduce pain</strong>, not cause it. We use gentle mobilization and safe techniques. <br><br>" + callLink;
  }

  // 9. LOCATION (FAQ 8)
  if (msg.includes("location") || msg.includes("where") || msg.includes("address") || msg.includes("map") || msg.includes("reach") || msg.includes("clinic")) {
    return "<strong>Mehar Physiotherapy:</strong> F-42, 16th Avenue, Gaur City-2, Greater Noida West.<br><br>" + mapLink;
  }

  // 10. SENIORS & SPECIAL CASES (FAQ 9, 11, 15)
  if (msg.includes("senior") || msg.includes("old") || msg.includes("elderly") || msg.includes("parent") || msg.includes("balance") || msg.includes("fall")) {
    return "We specialize in Geriatric Care (Senior Citizens) to improve balance and prevent falls. We can even come to your home. <br><br>" + waLink;
  }

  // DEFAULT FALLBACK
  return "I'm here to help! For expert medical guidance regarding your specific condition, please contact Dr. Arneja directly: <br><br>" + callLink + "<br>" + waLink;
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
