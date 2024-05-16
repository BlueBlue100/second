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
