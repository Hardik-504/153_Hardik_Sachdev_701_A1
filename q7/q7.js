async function fetchGooglePage() {
    try {
        const response = await fetch('https://www.google.com');
        const text = await response.text();
        console.log('Fetched Google page successfully. First 100 chars:', text.slice(0, 100));
    } catch (error) {
        console.error('Error fetching Google Page:', error);
    }
}

fetchGooglePage();
