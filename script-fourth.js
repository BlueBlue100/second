document.addEventListener('DOMContentLoaded', function() {
    const dataBody = document.getElementById('resultBody');

    // Simulate scraping data from Amazon (replace with actual scraping logic)
    const url = 'http://94.72.119.70:8000/products/';

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    })
    .then(data => {
        // Handle the data here
        console.log('Data retrieved successfully:', data);

        // Clear existing data from the table
        dataBody.innerHTML = '';

        // Display scraped data in the table
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item._id}</td>
                <td>${item.asin}</td>
                <td>${item.title}</td>
                <td>${item.stock}</td>
                <td>${item.amazon_delivery_date}</td>
                <td>${item.amazon_price}</td>
                <td>${item.otto_delivery_time}</td>
                <td>${item.otto_price}</td>
                <td>${item.msrp}</td>
            `;
            dataBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
