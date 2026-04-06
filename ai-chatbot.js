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
  msg = msg.toLowerCase();

  if (msg.includes("neck") || msg.includes("cervical") || msg.includes("spondylosis")) {
    if (msg.includes("exercise")) {
      return "For cervical spondylosis:\n• Chin tucks\n• Neck isometric\n• Scapular retraction\n• Shoulder rolls";
    }
    if (msg.includes("radiating") || msg.includes("arm")) {
      return "Pain radiating to arm may indicate nerve involvement. Visit clinic.";
    }
    return "Neck pain is often posture-related. Physiotherapy helps.";
  }

  if (msg.includes("back")) {
    if (msg.includes("exercise")) {
      return "Back pain exercises:\n• McKenzie extension\n• Pelvic tilts\n• Core strengthening";
    }
    return "Back pain is common. Physiotherapy helps long-term.";
  }

  if (msg.includes("knee")) {
    return "Knee pain can improve with strengthening exercises.";
  }

  if (msg.includes("where") || msg.includes("location")) {
    return "We are in Gaur City 2, Greater Noida West. Use Location button above.";
  }

  if (msg.includes("appointment")) {
    return "Call or WhatsApp +91 9810359247 to book.";
  }

  return "Please describe your problem (neck, back, knee etc.)";
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
