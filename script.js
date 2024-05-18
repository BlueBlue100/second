document.addEventListener('DOMContentLoaded', function() {
    const manualForm = document.getElementById('manualForm');
    const bulkForm = document.getElementById('bulkForm');
    const urlList = document.getElementById('urlList');

    manualForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const urlInput = document.getElementById('urlInput').value;
        addUrlToList(urlInput);
    });

    bulkForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const fileInput = document.getElementById('fileInput').files[0];
        const reader = new FileReader();
        reader.readAsText(fileInput);
        reader.onload = function() {
            const urls = reader.result.split('\n');
            urls.forEach(url => {
                addUrlToList(url.trim());
            });
        };
    });

    function addUrlToList(url) {
        const urlItem = document.createElement('div');
        urlItem.classList.add('urlItem');
        urlItem.textContent = url;
        urlList.appendChild(urlItem);
    }
});
document.getElementById("manualForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const urlInput = document.getElementById("urlInput").value;
    window.location.href = "second.html?url=" + encodeURIComponent(urlInput);
    // secondPage.html?url=
});



/// Function to handle editing a row
function editRow(button) {
    // Get the row containing the button clicked
    var row = button.parentNode.parentNode;
    
    // Make the ID and ASIN cells editable
    var idCell = row.cells[0];
    var asinCell = row.cells[1];
    
    idCell.contentEditable = true;
    asinCell.contentEditable = true;
    
    // Focus on the ID cell for immediate editing
    idCell.focus();
}

// Function to handle deleting a row
function deleteRow(button) {
    // Get the row containing the button clicked
    var row = button.parentNode.parentNode;
    
    // Remove the row from the table
    row.parentNode.removeChild(row);
}

// Function to close the edit modal
function closeModal() {
    document.getElementById("editModal").style.display = "none";
}

// Function to save changes made in the edit modal
function saveChanges() {
    // Get the edited ID and ASIN values
    var id = document.getElementById("editId").value;
    var asin = document.getElementById("editAsin").value;
    
    // Find the corresponding row in the table
    var table = document.querySelector(".table2 tbody");
    var rows = table.getElementsByTagName("tr");
    
    for (var i = 0; i < rows.length; i++) {
        // Find the row with matching ID
        if (rows[i].cells[0].innerText === id) {
            // Update the ASIN value
            rows[i].cells[1].innerText = asin;
            break;
        }
    }
    
    // Close the modal
    closeModal();
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById("editModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





// second page

document.addEventListener('DOMContentLoaded', function() {
    const scrapeButton = document.getElementById('scrapeButton');
    const dataBody = document.getElementById('dataBody');

    scrapeButton.addEventListener('click', function() {
        // Simulate scraping data from Amazon (replace with actual scraping logic)
        const scrapedData = [
            { url: 'https://www.amazon.com/dp/B07HGW8N7R', title: 'Amazon Echo Dot (3rd Gen)', price: '$39.99', description: 'Smart speaker with Alexa - Charcoal' },
            { url: 'https://www.amazon.com/dp/B07L5D1FVS', title: 'Amazon Echo Show 5', price: '$79.99', description: 'Smart display with Alexa - Charcoal' },
            // Add more scraped data as needed
        ];

        // Clear existing data from the table
        dataBody.innerHTML = '';

        // Display scraped data in the table
        scrapedData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.url}</td>
                <td>${item.title}</td>
                <td>${item.price}</td>
                <td>${item.description}</td>
            `;
            dataBody.appendChild(row);
        });
    });
});

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productURL = urlParams.get('url');
    fetchProductDetails(productURL);
}

function fetchProductDetails(url) {
    // Use AJAX or fetch to get the product details from the Amazon URL
    // Parse the HTML response and extract relevant details like description and price

    // For demonstration purposes, let's assume you have fetched and parsed the product details
    const productDetails = {
        url: url,
        title: "Product Title",
        price: "$99.99",
        description: "Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    };

    // Update the DOM to display these details
    document.getElementById("dataBody").innerHTML = `
        <tr>
            <td>${productDetails.url}</td>
            <td>${productDetails.title}</td>
            <td>${productDetails.price}</td>
            <td>${productDetails.description}</td>
        </tr>
    `;
}




// Third page
document.addEventListener('DOMContentLoaded', function() {
    const applyAllButton = document.getElementById('applyAllButton');
    const saveChangesButton = document.getElementById('saveChangesButton');

    applyAllButton.addEventListener('click', function() {
        // Apply changes to all SKUs
        applyChanges();
    });

    saveChangesButton.addEventListener('click', function() {
        // Save changes
        saveChanges();
    });

    function applyChanges() {
        // Retrieve values from input fields
        const priceFactor = parseFloat(document.getElementById('priceFactor').value);
        const deliveryDays = parseInt(document.getElementById('deliveryDays').value);

        // Apply changes to all SKUs (replace with your logic)
        console.log("Applying changes to all SKUs...");
        console.log("Price Factor:", priceFactor);
        console.log("Additional Delivery Days:", deliveryDays);
    }

    function saveChanges() {
        // Save changes to database or storage (replace with your logic)
        console.log("Saving changes...");
    }
});



// forth page
