

    function validation() {
        // Get error message container and clear previous content
        let error_message = document.getElementById("error_message");
        error_message.innerHTML = "";
        error_message.style.display = "none"; // Initially hide the error box

        // Get form values
        const name = document.getElementById("names").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        let isValid = true; // Track overall form validity
        let errorContent = ""; // Collect error messages

        // Validate name (must not be empty)
        if (name === "") {
            errorContent += "<li><i class='fas fa-exclamation-circle'></i> Full Name is required.</li>";
            isValid = false;
        }

        // Validate email using regex
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === "" || !emailPattern.test(email)) {
            errorContent += "<li><i class='fas fa-exclamation-circle'></i> Please enter a valid Email Address.</li>";
            isValid = false;
        }

        // Validate phone number (must be 10 digits)
        const phonePattern = /^[0-9]{10}$/;
        if (phone === "" || !phonePattern.test(phone)) {
            errorContent += "<li><i class='fas fa-exclamation-circle'></i> Please enter a valid 10-digit Mobile Number.</li>";
            isValid = false;
        }

        // Validate subject (must not be empty)
        if (subject === "") {
            errorContent += "<li><i class='fas fa-exclamation-circle'></i> Subject is required.</li>";
            isValid = false;
        }

        // Validate message (must not be empty)
        if (message === "") {
            errorContent += "<li><i class='fas fa-exclamation-circle'></i> Message cannot be empty.</li>";
            isValid = false;
        }

        // If any error exists, display the error message box
        if (!isValid) {
            error_message.innerHTML = `
                <div class="error-box">
                    <i class="fas fa-times close-btn" onclick="closeError()"></i>
                    <h4>Errors Detected</h4>
                    <ul>${errorContent}</ul>
                </div>
            `;
            error_message.style.display = "block"; // Show the error message
        }

        return isValid; // Return false if any error exists, true otherwise
    }

    // Function to close the error message
    function closeError() {
        document.getElementById("error_message").style.display = "none";
    }


   


    // skilll
    
    document.addEventListener("DOMContentLoaded", function() {
        const skillBars = document.querySelectorAll('.skill-percentage');
    
        skillBars.forEach(skillBar => {
            const skillValue = skillBar.getAttribute('data-skill');
            skillBar.style.width = skillValue;
    
            // Convert percentage value to number
            const percentage = parseInt(skillValue);
    
            // Apply color based on percentage
            if (percentage >= 70) {
                skillBar.style.backgroundColor = "green"; // High skill, green
            } else if (percentage >= 40) {
                skillBar.style.backgroundColor = "yellow"; // Medium skill, yellow
            } else {
                skillBar.style.backgroundColor = "red"; // Low skill, red
            }
        });
    });

    

// nav bar

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const closeIcon = document.querySelector('#close-icon');
    const navbar = document.querySelector('#navbar');

    // Open navbar when menu icon is clicked
    menuIcon.addEventListener('click', () => {
        navbar.classList.add('active');
    });

    // Close navbar when close icon is clicked
    closeIcon.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});



