
  (function() {
    emailjs.init("vTGn5syczx10ETLBt"); // Your Public Key
  })();

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Disable button to prevent multiple clicks
    const button = this.querySelector("button[type='submit']");
    button.disabled = true;
    button.innerText = "Sending...";

    emailjs.sendForm('service_53cxpgd', 'template_m0yyha8', this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
        button.disabled = false;
        button.innerText = "Send Message";
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
        button.disabled = false;
        button.innerText = "Send Message";
      });
  });

  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const sideMenu = document.getElementById("side-menu");

  // Create overlay dynamically
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  });