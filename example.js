// U41684674
// Function to load and display data from CSV file
function loadAndDisplayData() {
    // Path to CSV file
    const csvFilePath = 'data/purchase_orders.csv';

    // Load CSV file
    d3.csv(csvFilePath).then(data => {
        // Select the <ul> element
        const ul = d3.select("#purchase-orders");

        // Create and append <li> elements for each purchase order
        data.forEach(order => {
            ul.append("li")
              .text(`${order.customerName} - Order ID: ${order.orderId}: $${order.purchaseAmount}`);
        });
    }).catch(error => {
        console.error('Error loading the CSV file:', error);
    });
}

// Call the function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", loadAndDisplayData);