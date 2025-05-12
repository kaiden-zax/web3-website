// Sample game data
const games = [
    {
        id: 1,
        title: "Space Adventure",
        category: "Adventure",
        description: "Explore the galaxy in this exciting space game!",
        thumbnail: "assets/images/space-game.jpg",
        url: "games/space-adventure"
    },
    {
        id: 2,
        title: "Puzzle Master",
        category: "Puzzle",
        description: "Solve challenging puzzles to advance!",
        thumbnail: "assets/images/puzzle-game.jpg",
        url: "games/puzzle-master"
    },
    {
        id: 3,
        title: "Racing Extreme",
        category: "Racing",
        description: "High-speed racing action!",
        thumbnail: "assets/images/racing-game.jpg",
        url: "games/racing-extreme"
    },
    {
        id: 4,
        title: "Zombie Shooter",
        category: "Action",
        description: "Survive the zombie apocalypse!",
        thumbnail: "assets/images/zombie-game.jpg",
        url: "games/zombie-shooter"
    }
];

// Function to create game cards
function createGameCards(games, containerClass) {
    const container = document.querySelector(`.${containerClass}`);
    
    if (!container) return;
    
    container.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        
        gameCard.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title}">
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <a href="${game.url}" class="play-button">Play Now</a>
            </div>
        `;
        
        container.appendChild(gameCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load featured games (first 2 games)
    createGameCards(games.slice(0, 2), 'featured-games .game-grid');
    
    // Load new games (all games)
    createGameCards(games, 'new-games .game-grid');
    
    // Add search functionality
    const searchInput = document.querySelector('.search input');
    const searchButton = document.querySelector('.search button');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredGames = games.filter(game => 
            game.title.toLowerCase().includes(searchTerm) || 
            game.category.toLowerCase().includes(searchTerm) ||
            game.description.toLowerCase().includes(searchTerm)
        );
        
        createGameCards(filteredGames, 'new-games .game-grid');
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') performSearch();
    });
});

