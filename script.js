document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.togglebtn');
    const navLinks = document.querySelector('.navlinks');

    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Toggle hamburger menu animation
        toggleBtn.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('.navlinks a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            toggleBtn.classList.remove('open');
        });
    });
});
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {

        console.log(`Navigating to ${this.href}`);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close-modal')[0];

    // Get all project images
    const projectImages = document.querySelectorAll('.timeline-content img');

    // Add click event to each image
    projectImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            
            // Get the associated timeline date
            const timelineDate = this.closest('.timeline-item').querySelector('.timeline-date').textContent;
            captionText.innerHTML = timelineDate;
        });
    });

    // Close modal when clicking the × button
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });
});