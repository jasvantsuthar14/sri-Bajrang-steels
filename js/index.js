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


  const reviews = [
      {
        text: "We have been utilizing services of Web SEO Services for a year now; the on-ground support is actually unbeatable, quick and reliable.",
        img: "https://i.pravatar.cc/100?img=12",
        name: "Dinesh",
        role: "CEO - MDM",
        rating: 5
      },
      {
        text: "Excellent SEO results! Their communication and dedication are really top-notch. Highly satisfied.",
        img: "https://i.pravatar.cc/100?img=8",
        name: "Ravi Jangid",
        role: "Marketing Head - RS Group",
        rating: 4
      },
      {
        text: "Professional, responsive, and transparent service. Our website ranking improved a lot!",
        img: "https://i.pravatar.cc/100?img=5",
        name: "Aman Verma",
        role: "Founder - AV Creations",
        rating: 5
      },
      {
        text: "We have been utilizing services of Web SEO Services for a year now; the on-ground support is actually unbeatable, quick and reliable.",
        img: "https://i.pravatar.cc/100?img=12",
        name: "Jitendra ",
        role: "CEO - SKG GAMER",
        rating: 5
      }
    ];

    let currentReview = 0;
    const box = document.getElementById("review-box");

    function showReview(index) {
      const review = reviews[index];

      // fade-out
      box.style.opacity = 0;

      setTimeout(() => {
        // update review content
        document.getElementById("review-text").textContent = review.text;
        document.getElementById("review-img").src = review.img;
        document.getElementById("review-name").textContent = review.name;
        document.getElementById("review-role").textContent = review.role;

        // set stars dynamically
        const stars = "⭐".repeat(review.rating) + "☆".repeat(5 - review.rating);
        document.getElementById("review-rating").textContent = stars;

        // update dots
        document.querySelectorAll(".dot").forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
        });

        // fade-in
        box.style.opacity = 1;
      }, 600);
    }

    // Auto slide every 4 seconds
    setInterval(() => {
      currentReview = (currentReview + 1) % reviews.length;
      showReview(currentReview);
    }, 4000);
