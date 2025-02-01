// Array of project details
const projects = [
    {
        title: "Automobile Sales Dashboard",
        description: "Data Visualization Project",
        technologies: "Python, pandas, dash, plotly",
        image: "icons/DataV.png",
        liveDemo: "#",
        sourceCode: "https://github.com/Fusion567/Automobile-Sales-Dashboard"
    },
    {
        title: "Webscraping Project",
        description: "Extracting and Visualizing Stock Data",
        technologies: "yfinance library, data extraction and visualization",
        image: "icons/stock.jpg",
        liveDemo: "#",
        sourceCode: "https://github.com/Fusion567/Extracting-and-visualizing-stock-data"
    },
    {
        title: "Credit-Card-Fraud-Detection",
        description: "Project to detect credit card fraud using machine learning",
        technologies: "Scikit-Learn, IBM’s Snap ML, AUC-ROC",
        image: "icons/credit.jpg",
        liveDemo: "#",
        sourceCode: "https://github.com/Fusion567/Credit-Card-Fraud-Detection-using-Scikit-Learn-and-Snap-ML"
    },
    {
        title: "Chatbot",
        description: "A chatbot for Financial Queries",
        technologies: "NLTK, Flask, HTML 5, CSS 3, JavaScript",
        image: "icons/Chatbot_1.png",
        liveDemo: "#",
        sourceCode: "https://github.com/Fusion567/Chatbot-Financial-Queries"
    }
];

let currentIndex = 0;

// Function to update project details
function updateProject(index) {
    const project = projects[index];
    document.querySelector(".details .project-number").textContent = String(index + 1).padStart(2, '0');
    document.querySelector(".details h2").textContent = project.title;
    document.querySelector(".details p").textContent = project.description;
    document.querySelector(".details span").textContent = project.technologies;
    document.querySelector(".screenshot img").src = project.image;
    document.querySelector("#projectImageLink").href = project.sourceCode;
    document.querySelector("#githubLink").href = project.sourceCode;
}

// Event listeners for navigation buttons
document.querySelectorAll(".navigation-buttons .icon").forEach((button, idx) => {
    button.addEventListener("click", () => {
        if (idx === 0) {
            // Left button clicked
            currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        } else {
            // Right button clicked
            currentIndex = (currentIndex + 1) % projects.length;
        }
        updateProject(currentIndex);
    });
});

document.getElementById("projectImage").addEventListener("click", function() {
    window.open("https://github.com/Fusion567/Credit-Card-Fraud-Detection-using-Scikit-Learn-and-Snap-ML", "_blank");
});

// Initialize the first project
updateProject(currentIndex);
