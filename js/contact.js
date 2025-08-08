
    // gsap.registerPlugin(ScrollTrigger);

    // const animateSection = (selector) => {
    //   gsap.to(selector, {
    //     y: 0,
    //     opacity: 1,
    //     duration: 1.2,
    //     scrollTrigger: {
    //       trigger: selector,
    //       start: "top 85%",
    //     }
    //   });
    // };

    // document.addEventListener("DOMContentLoaded", () => {
    //   animateSection(".contact-form-section");
    //   animateSection(".details-and-map");
    //   animateSection(".map-section");
    //   animateSection(".faq-section");

    //   const faqs = document.querySelectorAll('.faq-item');
    //   faqs.forEach(item => {
    //     const question = item.querySelector('.faq-question');
    //     question.addEventListener('click', () => {
    //       item.classList.toggle('is-active');
    //     });
    //   });
    // });


    gsap.registerPlugin(ScrollTrigger);

const animateSection = (selector) => {
  gsap.to(selector, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  animateSection(".contact-form-section");
  animateSection(".details-and-map");
  animateSection(".map-section");
  animateSection(".faq-section");

  const faqs = document.querySelectorAll('.faq-item');
  faqs.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('is-active');
    });
  });

  // --- NEW CODE FOR FORM SUBMISSION ---
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('success-message');

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission (page reload)

    const formData = new FormData(form);
    const url = form.getAttribute('action');

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success: Show the message, hide the form, and clear the fields
        successMessage.style.display = 'block';
        form.style.display = 'none';
        form.reset();
        
        // Add event listener to the "delete" button to close the notification
        const deleteButton = successMessage.querySelector('.delete');
        if (deleteButton) {
          deleteButton.addEventListener('click', () => {
            successMessage.style.display = 'none';
          });
        }
      } else {
        // Handle error: Show a simple error message
        alert('Oops! There was a problem sending your message. Please try again.');
      }
    } catch (error) {
      // Handle network or other errors
      alert('Oops! There was a network error. Please check your connection and try again.');
    }
  });
  // --- END OF NEW CODE ---
});


