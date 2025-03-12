document.addEventListener("DOMContentLoaded", function () {
    // List of the names
    var names = ["Aatiqa", "Jesse"];
    var index = 0; 

    // Function to update the displayed name
    function updateNames() {
        document.getElementById("scrolling-names").textContent = names[index]; 
        index = (index + 1) % names.length; 
         setTimeout(updateNames, 2000);
    }

    // This function will display the current month and year.
    function updateDate() {
        var now = new Date(); 
        var formattedDate = (now.getMonth() + 1).toString().padStart(2, '0') + "/" + now.getFullYear();
        document.getElementById("project-date").textContent = formattedDate; 
    }
    // It will start the name and the date
    updateNames();
    updateDate(); 
});

