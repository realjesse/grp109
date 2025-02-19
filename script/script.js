document.getElementById('reservation_form').addEventListener('submit', function(event) {
  
  // initialize form data
  const first_name = document.getElementById('fname').value;
  const last_name = document.getElementById('lname').value;
  const email = document.getElementById('phone').value;
  const phone_number = document.getElementById('phone').value;
  const date_time = document.getElementById('date-time').value;
  const num_of_people = document.getElementById('num_of_people').value;
  
  // create a constant which will contain new page html
  const reservationSuccessfulPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="This is the reservation page of Seattle Sushi, the best sushi in Western Washington!">
        <title>Reserve - Seattle Sushi</title>
        <link rel="stylesheet" href="../style/style.css">
        <script src="../script/script.css" defer></script>
    </head>
    <body>
      <!-- header -->
        <div class="header">
            <div class="left-links">
                <h2>Header Logo</h2>
            </div>
            <div class="right-links">
                <ul>
                    <li><a href="">header link one</a></li>
                    <li><a href="">header link two</a></li>
                    <li><a href="">header link three</a></li>
                </ul>
            </div>
        </div>

      <!-- content -->
        <div class="content">
          <h1>Reservation successful!</h1>
          
          <p>Thank you ${first_name} for your reservation. We are excited to serve you</p>
          <ul>
            <li>Email: ${email}</li>
            <li>Phone: ${phone_number}</li>
            <li>Date and time: ${date_time}</li>
            <li>Number of people: ${num_of_people}</li>
          </ul>
          <p>Contact us if you have any questions!</p>

        </div>

      <!-- footer -->
        <div class="footer">
          <p>put links here</p>
        </div>
    </body>
    </html>
    `;
  
    // This will open a new page, with info loaded
    const newWindow = window.open();
    newWindow.document.write(reservationSuccessfulPage);
    newWindow.document.close();
    newWindow.document.body.style.zoom = "100%"; // Browser automatically zooms in at 200%
});
