// Select elements
const toggleButton = document.getElementById('navbar-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay); // Append overlay to body

// Function to open sidebar
toggleButton.addEventListener('click', () => {
    sidebar.style.right = '0'; // Slide in sidebar
    overlay.style.display = 'block'; // Show overlay
});

// Function to close sidebar
document.getElementById('close-sidebar').addEventListener('click', () => {
    sidebar.style.right = '-300px'; // Slide out sidebar
    overlay.style.display = 'none'; // Hide overlay
});

// Close sidebar when overlay is clicked
overlay.addEventListener('click', () => {
    sidebar.style.right = '-300px'; // Slide out sidebar
    overlay.style.display = 'none'; // Hide overlay
});









function toggleAnswer(element) {
    const answer = element.querySelector('.faq-answer');
    const iconPlus = element.querySelector('.faq-toggle i.fas.fa-plus');
    const iconMinus = element.querySelector('.faq-toggle i.fas.fa-minus');
    const iconChevron = element.querySelector('.faq-icon:last-child');

    // Toggle display of the answer
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block"; // Show answer
        // Change icon from plus to minus
        if (iconPlus) {
            iconPlus.classList.remove('fa-plus');
            iconPlus.classList.add('fa-minus');
        }
        // Rotate the chevron icon
        iconChevron.style.transform = "rotate(180deg)";
    } else {
        answer.style.display = "none"; // Hide answer
        // Change icon from minus to plus
        if (iconMinus) {
            iconMinus.classList.remove('fa-minus');
            iconMinus.classList.add('fa-plus');
        }
        // Reset the chevron icon rotation
        iconChevron.style.transform = "rotate(0deg)";
    }
}





    // JavaScript to change the modal image source
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.getAttribute('data-bs-img-src');
            document.getElementById('modal-image').src = imgSrc;
        });
    });









// Floating WhatsApp Icon
document.getElementById('whatsappIcon').addEventListener('click', function (event) {
    event.stopPropagation(); // Prevents the click event from propagating to the document
    var callOptions = document.getElementById('callOptions');
    
    // Toggle the visibility of callOptions
    if (callOptions.style.display === "block") {
        callOptions.style.display = "none";
    } else {
        callOptions.style.display = "block";
    }
});

// Close callOptions when clicking outside of the WhatsApp icon
document.addEventListener('click', function (event) {
    var callOptions = document.getElementById('callOptions');
    var whatsappIcon = document.getElementById('whatsappIcon');

    // If the clicked element is not the WhatsApp icon or its children, close callOptions
    if (!whatsappIcon.contains(event.target) && callOptions.style.display === "block") {
        callOptions.style.display = "none";
    }
});









$('#imageModal').on('show.bs.modal', function (e) {
    e.preventDefault();
    $('html, body').scrollTop(0);
});
