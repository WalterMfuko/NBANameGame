document.addEventListener('DOMContentLoaded', function() {
    // Make sure animations play properly even if page is already loaded
    setTimeout(() => {
        document.querySelector('.category-container').style.display = 'flex';
    }, 4000); // Show categories after intro animation finishes
    
    // Preload game mode pages
    const preloadLinks = [
        'nba.html', 
        'nfl.html', 
        'presidents.html', 
        'celebrities.html',
        'movies.html',
        'disney.html'
    ];
    
    preloadLinks.forEach(link => {
        const preloadLink = document.createElement('link');
        preloadLink.href = link;
        preloadLink.rel = 'preload';
        preloadLink.as = 'document';
        document.head.appendChild(preloadLink);
    });
});