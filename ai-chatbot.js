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

  // Action Link Variables
  const callLink = "<a href='tel:+919810359247' style='color:#ab214d; font-weight:bold;'>📞 Call Now to Book</a>";
  const waLink = "<a href='https://wa.me/919810359247?text=I%20want%20to%20book%20an%20appointment' target='_blank' style='color:#0a7833; font-weight:bold;'>💬 WhatsApp Booking</a>";
  const mapLink = "<a href='https://www.google.com/maps/search/?api=1&query=Mehar+Physiotherapy+Clinic&query_place_id=ChIJ4_vGaUnvDDkR5vtYeucjsNU' target='_blank' style='color:#0e5a95; font-weight:bold;'>📍 Get Directions to Clinic</a>";

  // 1. GREETINGS & GENERAL
  if (/^(hi|hello|hey|hii|physio|doctor|consultation|help)$/.test(msg)) {
    return "Hello! 👋 Welcome to Mehar Physiotherapy Clinic. How can we help you today? You can inquire about our <strong>Clinic Timings</strong>, <strong>Home Visits</strong>, or <strong>Book an Appointment</strong> directly below: <br><br> " + waLink;
  }

  // 2. TIMINGS & AVAILABILITY (Fixed: Added "timing" without the 'e')
  if (msg.includes("timing") || msg.includes("time") || msg.includes("open") || msg.includes("hour") || msg.includes("sunday") || msg.includes("available") || msg.includes("slot") || msg.includes("when")) {
    return "Mehar Physiotherapy Clinic is open <strong>Monday to Sunday, 8:00 AM to 9:00 PM</strong>. To ensure Dr. Arneja is available and to skip the waiting line, please <strong>call us</strong> to book your slot: <br><br>" + callLink + "<br><br>" + waLink;
  }

  // 3. LOCATION (Fixed: Removed "clinic" to prevent overlap, added "direction")
  if (msg.includes("location") || msg.includes("where") || msg.includes("address") || msg.includes("map") || msg.includes("reach") || msg.includes("direction") || msg.includes("gaur city")) {
    return "We are located at <strong>F-42, 16th Avenue, Gaur City-2, Greater Noida West</strong>. You can find our exact location on the map here:<br><br>" + mapLink;
  }

  // 4. HOME VISITS (Fixed: Demands the word "home" or "residence")
  if (msg.includes("home") || msg.includes("at house") || msg.includes("come to me") || msg.includes("residence")) {
    return "Yes, we provide specialized <strong>Home Visit Physiotherapy</strong> for patients in pain or with limited mobility. <br><br>" + callLink + "<br>" + waLink;
  }

  // 5. APPOINTMENT & REFERRAL (Fixed: Added the word "visit" here)
  if (msg.includes("appointment") || msg.includes("book") || msg.includes("consult") || msg.includes("contact") || msg.includes("referral") || msg.includes("doctor") || msg.includes("visit")) {
    return "You can simply call or WhatsApp us to confirm your appointment: <br><br>" + callLink + "<br>" + waLink;
  }

  // 6. FEES, COST & SESSION COUNT
  if (msg.includes("fee") || msg.includes("charge") || msg.includes("cost") || msg.includes("price") || msg.includes("how many") || msg.includes("sessions") || msg.includes("long") || msg.includes("duration")) {
    if (msg.includes("how many") || msg.includes("sessions") || msg.includes("long")) {
        return "A typical session lasts <strong>30-45 minutes</strong>. The total number of sessions depends on your recovery progress. Dr. Arneja will guide you during the first assessment. <br><br>" + callLink;
    }
    return "Treatment charges are very competitive. For a specific quote for Clinic or Home visits, please contact us: <br><br>" + callLink;
  }

  // 7. SYMPTOMS, PAIN & REHAB
  if (
    msg.includes("back") || msg.includes("neck") || msg.includes("knee") || msg.includes("sciatica") || 
    msg.includes("disc") || msg.includes("shoulder") || msg.includes("frozen") || msg.includes("injury") || 
    msg.includes("surgery") || msg.includes("sports") || msg.includes("numb") || msg.includes("tingl") || 
    msg.includes("stiff") || msg.includes("fracture") || msg.includes("paralysis") || msg.includes("stroke") || 
    msg.includes("acl") || msg.includes("ligament") || msg.includes("rehab") || msg.includes("swell") || 
    msg.includes("inflam") || msg.includes("muscle") || msg.includes("joint") || msg.includes("pain")
  ) {
    return "Dr. Arneja specializes in treating your condition and advanced rehabilitation. We use safe, modern techniques to ensure fast recovery. <br><br><strong>Book your assessment now:</strong><br>" + callLink + "<br>" + waLink;
  }

  // 8. PAIN & SAFETY 
  if (msg.includes("hurt") || msg.includes("scared") || msg.includes("safe") || msg.includes("clean") || msg.includes("hygiene")) {
    return "Your safety is our priority. We follow strict <strong>sanitization protocols</strong>, and our physiotherapy techniques are designed to <strong>relieve pain</strong>, not cause it. <br><br>" + callLink;
  }

  // 9. SENIOR CITIZENS & ELDERLY CARE
  if (msg.includes("senior") || msg.includes("old") || msg.includes("elderly") || msg.includes("parent") || msg.includes("balance") || msg.includes("fall")) {
    return "We offer dedicated care for <strong>Senior Citizens</strong> focusing on balance, mobility, and fall prevention. We recommend a home visit for maximum comfort. <br><br>" + callLink + "<br>" + waLink;
  }

  // 10. THANK YOU
  if (msg.includes("thank") || msg.includes("thx") || msg.includes("thanks")) {
    return "You're very welcome! 😊 We look forward to helping you stay fit and pain-free. <br><br>" + callLink;
  }

  // DEFAULT FALLBACK
  return "I want to make sure you get the right help! For any medical questions or to book a visit, please contact Dr. Arneja directly: <br><br>" + callLink + "<br>" + waLink;
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
