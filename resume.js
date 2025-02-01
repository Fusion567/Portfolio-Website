document.addEventListener("DOMContentLoaded", () => {
    // Get all buttons
    const buttons = document.querySelectorAll('.buttons');
    
    // Get all content sections
    const contentSections = document.querySelectorAll('.content');
    
    // Get the resume button and experience button
    const resumeButton = document.getElementById('resume');
    const experienceButton = document.querySelector(".buttons[data-text='Experience']");
    
    // Function to hide all sections
    const hideAllSections = () => {
        contentSections.forEach(section => {
            section.style.display = "none";
            section.classList.remove("active");
        });
    };
    
    const showSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = "block";
            section.classList.add("active");
        }
    };
    
    // Function to set the active button
    const setActiveButton = (button) => {
        buttons.forEach(btn => btn.classList.remove("active"));
        if (button) {
            button.classList.add("active");
        }
    };
    
    // Initialize by showing the Experience section and activating the Experience button
    showSection("experience");
    setActiveButton(experienceButton);
    
    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            hideAllSections();
            const targetId = button.dataset.text.toLowerCase();
            showSection(targetId);
            setActiveButton(button);
        });
    });
    
    // Event listener for the Resume button to default to Experience
    if (resumeButton) {
        resumeButton.addEventListener("click", () => {
            hideAllSections();
            showSection("experience");
            setActiveButton(experienceButton);
        });
    }
});
