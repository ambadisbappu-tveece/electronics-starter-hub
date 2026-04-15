/* ==========================================================
   ELECTRONICS STARTER HUB - SEARCH BAR
   ========================================================== */

// 1. Target the search form on the page using its class name

const searchForm = document.querySelector('.search-section form');
const searchInput = document.querySelector('.search-section input');

// 2. Listen for the user to submit the form (hitting Enter or clicking Search)

searchForm.addEventListener('submit', function(event) {
    
    // 3. STOP the browser's default behavior! 
    // Forms naturally try to send data to a server and refresh the page. We must block this.

    event.preventDefault(); 


    const query = searchInput.value.toLowerCase().trim();
    
 

    if (query === "") {
        alert("Please enter a component to search.");
        return;
    }

    // ==========================================================
    // 6. THE ROUTING LOGIC (The Traffic Cop)
    // ==========================================================
    
    if (query.includes("resistor") || query.includes("ohms")) {
        // Redirects to your specific resistor deep-dive page
        window.location.href = "resistor-section.html";
        
    } else if (query.includes("inductor") || query.includes("coil")) {
        window.location.href = "Inductor-section.html";
        
    } else if (query.includes("capacitor") || query.includes("farad")) {
        window.location.href = "Capacitor-section.html";
        
    } else if (query.includes("led") || query.includes("light")) {
        window.location.href = "led-section.html";
        
    } else if (query.includes("transistor") || query.includes("bjt") || query.includes("npn") || query.includes("pnp")) {
        window.location.href = "transistor-section.html";
        
    } else if (query.includes("bc547") || query.includes("mosfet") || query.includes("2n2222")) {
        // If they search for a highly specific transistor from your library table
        alert("Taking you to the Master Library to view specs for: " + query.toUpperCase());
        window.location.href = "component-library.html";
        
    } else {
        // Fallback: If they type something we haven't programmed a specific route for,
        // send them to the main Component Library as a safe backup.
        alert("Checking for '" + query + "'...");
        window.location.href = "component-library.html";
        
    }
});