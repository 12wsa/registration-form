document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form data
    const teamName = document.getElementById("team_name").value;
    const managerName = document.getElementById("manager_name").value;
    const contactEmail = document.getElementById("contact_email").value;
    const players = document.getElementById("players").value;

    // Create a data object
    const data = {
        teamName: teamName,
        managerName: managerName,
        contactEmail: contactEmail,
        players: players
    };

    // Convert data to JSON
    const jsonData = JSON.stringify(data);

    // Create a Blob containing the JSON data
    const blob = new Blob([jsonData], { type: "application/json" });

    // Create a link element
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "team_registration.json";

    // Append link to the body and trigger the download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
});
