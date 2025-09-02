const mainmenu = document.querySelector("#unban-options");
const main = document.querySelector(".input-field");
const maintype = document.querySelector("#unban-option");
const UnbanBtn = document.querySelector("#unban-btn");
const content = document.querySelector(".modal-content")
const pinvalue = document.querySelector("#Pin")
const Contentext = document.querySelector(".modal-text");
const request = document.querySelector(".succesful");
const modalBtn = document.querySelector("#okBtn");
const success = document.querySelector(".img")
const closeBtn = document.querySelector("#yes")
UnbanBtn.addEventListener("click", async (e) => {
  content.style.display = "block"
  request.style.display = "none"
  success.style.display = "none"
  closeBtn.style.display = "none"
})

// e.preventDefault();
  modalBtn.addEventListener("click", async(e) => {
    e.preventDefault();
    let pin = pinvalue.value; 
    if (pin === "001122") {
    request.style.display = "block"
    setTimeout(() => {
      request.textContent = `SUCCESSFULLY SENT UNBAN REQUEST  \n WAIT 24 HOURS\n WE ARE 80% SURE CAUSED IT WORKED SO MANY TIMES`
    },5000)
    success.style.display = "block"
    modalBtn.style.display = "none"
    pinvalue.style.display = "none"
    setInterval(() => {
      content.style.display = "none" 
    },14000)
    // content.style.display = "none"
  }else{
    request.style.display = "block"
      request.textContent = "Incorrect pls purchase premuim"
    pinvalue.style.display = "none"
    modalBtn.style.display = "none"
    closeBtn.style.display = "block"
    return;
  }
  closeBtn.addEventListener("click", async(e) => {
    content.style.display = "none"
  })
  
  let number = main.value;
  let unbanmenu = mainmenu.value;
  let Unbantype = maintype.value;

  let appeal = ``;
  if (unbanmenu === "Temporary Unban" && Unbantype === "APPEAL UNBAN") {
    appeal = `Dear WhatsApp Support Team,

My WhatsApp account with the number ${number} has been temporarily banned. I believe this may have been a mistake or caused by automated detection. 

I have not engaged in activities such as spamming, bulk messaging, or using unauthorized apps. If my usage triggered this ban unintentionally, I sincerely apologize and assure you that it will not happen again.

I kindly request a review and reinstatement of my account at the earliest convenience. I rely on WhatsApp for daily communication with family, friends, and work contacts.

Thank you for your time and support.

Sincerely,
[Joshua Estern Gabriel]`;
  }
if (unbanmenu === "Permanent Unban" && Unbantype === "APPEAL UNBAN") {
    appeal = `Dear WhatsApp Support Team,

My account with the number ${number} has been permanently banned. I respectfully believe that this ban was issued in error or due to a misunderstanding. 

I have always used WhatsApp responsibly for communication and have never intended to violate any of the Terms of Service. If any action from my side was flagged as suspicious, I assure you it was unintentional, and I am committed to following all policies strictly.

I kindly request that you review my account and consider reinstating it, as I depend on WhatsApp for important personal and professional matters.

Thank you for your assistance.

Sincerely,
[Albert eliza]`
}
if(unbanmenu == "Temporary Unban" && Unbantype === "FAKE CHAT UNBAN"){
  appeal = `Dear WhatsApp Support Team,

My account ${number} appears to have been banned due to spam reports. I would like to clarify that I do not send spam or unsolicited messages. My account is only used for private communication with family, friends, and colleagues.

It is possible that some recipients may have reported me by mistake, or that automated systems flagged my activity incorrectly. I sincerely request a review of my account and assure you that I will be careful to avoid any behavior that could be mistaken as spam in the future.

Please kindly reinstate my account so that I may continue using WhatsApp for communication.

Thank you for your kind attention.

Sincerely,
[Your Name]`
}
if(unbanmenu == "Permanent Unban" && Unbantype === "FAKE CHAT UNBAN"){
  appeal = `Dear WhatsApp Support Team,

I believe my account ${number} has been banned due to false or malicious reports. I have not violated any WhatsApp rules, and I only use the app for genuine communication. 

It seems that my number may have been reported unfairly by individuals with bad intentions. I respectfully request that my account be reviewed, as this ban has greatly disrupted my personal and professional communication.

I kindly ask that you restore my account at the earliest opportunity. I also assure you that I will continue to comply fully with WhatsApp’s policies.

Thank you for your understanding.

Sincerely,
[Your Name]`
}
if(unbanmenu == "Temporary Unban" && Unbantype === "MISTAKE UNBAN"){
  appeal = `Dear WhatsApp Support Team,

I am writing regarding my banned account ${number}. I strongly believe this action was taken by mistake. I use WhatsApp for normal communication and do not engage in any prohibited activities.

If my account was flagged unintentionally, I apologize for any misunderstanding. I kindly request a thorough review of my case and ask for my account to be reinstated.

I truly appreciate your assistance and understanding.

Sincerely,
[Your Name]`
}

  // ✅ Call backend
  const res = fetch("api/unban", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ appeal }),
  });

  if (res.ok) {
    request.textContent = "✅ Processing ";
  } else {
    request.textContent = "❌ Failed to send unban request";
  }
})