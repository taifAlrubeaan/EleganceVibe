// Assume client data is obtained from a server or other data source
const clientData = {
    firstName: "Ahmad",
    lastName: "Alkhluqi",
    email: "AhmadAlkhluqi@gmail.com",
};

// Assume designers and consultation requests data are obtained dynamically

// Function to update welcome section
function updateWelcomeSection() {
    const welcomeSection = document.getElementById("welcomeSection");
    welcomeSection.innerHTML = `<h1 >Welcome ${clientData.firstName} </h1>`;
}

// Function to update client information section
function updateClientInfoSection() {
    const clientInfoSection = document.getElementById("clientInfoSection");
    clientInfoSection.innerHTML = `
        <h3> <hr><br>     Your Information :<br></h3>
        <p>First Name: ${clientData.firstName}</p>
        <p>Last Name: ${clientData.lastName}</p>
        <p>Email: ${clientData.email}</p>
    `;
}

// Function to update designers section
function updateDesignersSection() {
    // Assume designersData is an array of designer objects
    const designersData = [
        { logo: "designer1-logo.jpg", brand: "Designer 1", speciality: "Interior Design" },
        // Add more designer data as needed
    ];

    const designersSection = document.getElementById("designersSection");
    designersSection.innerHTML = `
        <h3>Available Designers</h3>
        <div class="filter-bar">
            <!-- Add filter bar content as needed -->
        </div>
        <table>
            <thead>
                <tr>
                    <th>Logo & Brand</th>
                    <th>Speciality</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                ${designersData.map(designer => `
                    <tr>
                        <td><img src="${designer.logo}" alt="${designer.brand}" width="50"></td>
                        <td>${designer.speciality}</td>
                        <td><a href="design_portfolio.html">Request Consultation</a></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Function to update consultation requests section
function updateConsultationRequestsSection() {
    // Assume consultationRequestsData is an array of consultation request objects
    const consultationRequestsData = [
        // Add consultation request data as needed
    ];

    const consultationRequestsSection = document.getElementById("consultationRequestsSection");
    consultationRequestsSection.innerHTML = `
        <h3>Your Consultation Requests</h3>
        <table>
            <thead>
                <tr>
                    <!-- Add table header content as needed -->
                </tr>
            </thead>
            <tbody>
                ${consultationRequestsData.map(request => `
                    <tr>
                        <!-- Add table row content as needed -->
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}


// Call the update functions when the page loads
updateWelcomeSection();
updateClientInfoSection();
updateDesignersSection();
updateConsultationRequestsSection();