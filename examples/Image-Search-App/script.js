// Image Search App - JavaScript
// Demonstrates API integration, async/await, error handling, and responsive UI

class ImageSearchApp {
    constructor() {
        this.API_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // Get your free API key from https://unsplash.com/developers
        this.BASE_URL = 'https://api.unsplash.com/search/photos';
        this.currentPage = 1;
        this.currentQuery = '';
        this.isLoading = false;
        this.hasMoreImages = true;

        this.initializeElements();
        this.bindEvents();
        this.showWelcomeMessage();
    }

    initializeElements() {
        this.searchInput = document.getElementById('searchInput');
        this.searchButton = document.getElementById('searchButton');
        this.imageGrid = document.getElementById('imageGrid');
        this.loadingIndicator = document.getElementById('loadingIndicator');
        this.errorMessage = document.getElementById('errorMessage');
        this.errorText = document.getElementById('errorText');
        this.retryButton = document.getElementById('retryButton');
        this.noResults = document.getElementById('noResults');
        this.loadMoreContainer = document.getElementById('loadMoreContainer');
        this.loadMoreButton = document.getElementById('loadMoreButton');
    }

    bindEvents() {
        // Search functionality
        this.searchButton.addEventListener('click', () => this.performSearch());
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });

        // Retry functionality
        this.retryButton.addEventListener('click', () => {
            if (this.currentQuery) {
                this.performSearch(this.currentQuery);
            }
        });

        // Infinite scroll
        this.loadMoreButton.addEventListener('click', () => this.loadMoreImages());

        // Initialize infinite scroll
        this.initializeInfiniteScroll();
    }

    initializeInfiniteScroll() {
        let timeoutId;
        window.addEventListener('scroll', () => {
            // Debounce scroll events
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                if (this.shouldLoadMoreImages()) {
                    this.loadMoreImages();
                }
            }, 150);
        });
    }

    shouldLoadMoreImages() {
        // Check if user scrolled near bottom and we're not currently loading
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        return (
            scrollTop + windowHeight >= documentHeight - 1000 &&
            !this.isLoading &&
            this.hasMoreImages &&
            this.currentQuery
        );
    }

    async performSearch(query = null) {
        const searchTerm = query || this.searchInput.value.trim();

        if (!searchTerm) {
            this.showError('Please enter a search term');
            return;
        }

        if (!this.API_KEY || this.API_KEY === 'YOUR_UNSPLASH_ACCESS_KEY') {
            this.showError('Please set your Unsplash API key in the script.js file');
            return;
        }

        this.currentQuery = searchTerm;
        this.currentPage = 1;
        this.hasMoreImages = true;

        this.showLoadingState();
        this.clearResults();

        try {
            const images = await this.fetchImages(searchTerm, 1);

            if (images.length === 0) {
                this.showNoResults();
            } else {
                this.displayImages(images);
                this.showLoadMoreButton();
            }
        } catch (error) {
            this.handleSearchError(error);
        } finally {
            this.hideLoadingState();
        }
    }

    async fetchImages(query, page) {
        const url = new URL(this.BASE_URL);
        url.searchParams.set('query', query);
        url.searchParams.set('page', page);
        url.searchParams.set('per_page', '12');
        url.searchParams.set('orientation', 'landscape');

        const response = await fetch(url, {
            headers: {
                'Authorization': `Client-ID ${this.API_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.results || [];
    }

    async loadMoreImages() {
        if (this.isLoading || !this.hasMoreImages || !this.currentQuery) {
            return;
        }

        this.isLoading = true;
        this.showLoadMoreLoadingState();

        try {
            const nextPage = this.currentPage + 1;
            const images = await this.fetchImages(this.currentQuery, nextPage);

            if (images.length === 0) {
                this.hasMoreImages = false;
                this.hideLoadMoreButton();
            } else {
                this.displayImages(images, true);
                this.currentPage = nextPage;
            }
        } catch (error) {
            this.handleLoadMoreError(error);
        } finally {
            this.isLoading = false;
            this.hideLoadMoreLoadingState();
        }
    }

    displayImages(images, append = false) {
        if (!append) {
            this.imageGrid.innerHTML = '';
        }

        images.forEach(image => {
            const imageElement = this.createImageElement(image);
            this.imageGrid.appendChild(imageElement);
        });

        // Animate new images
        setTimeout(() => {
            const imageItems = this.imageGrid.querySelectorAll('.image-item');
            imageItems.forEach((item, index) => {
                if (append && item.style.opacity !== '1') {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, 50);
    }

    createImageElement(image) {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        imageItem.style.opacity = '0';
        imageItem.style.transform = 'translateY(20px)';

        const imageUrl = image.urls.regular;
        const thumbnailUrl = image.urls.thumb;
        const description = image.description || image.alt_description || 'Beautiful image';
        const authorName = image.user.name;

        imageItem.innerHTML = `
            <div class="image-container">
                <img src="${thumbnailUrl}" alt="${description}" loading="lazy" onload="this.parentElement.parentElement.style.transition='opacity 0.6s ease, transform 0.6s ease'; this.parentElement.parentElement.style.opacity='1'; this.parentElement.parentElement.style.transform='translateY(0)';">
            </div>
            <div class="image-info">
                <div class="image-description">${this.escapeHtml(description)}</div>
                <div class="image-author">Photo by ${this.escapeHtml(authorName)}</div>
            </div>
        `;

        // Add click handler for full-size view (bonus feature)
        imageItem.addEventListener('click', () => {
            this.openFullSizeImage(imageUrl, description, authorName);
        });

        return imageItem;
    }

    openFullSizeImage(imageUrl, description, authorName) {
        // Create modal for full-size image view
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close">&times;</button>
                    <img src="${imageUrl}" alt="${description}" class="modal-image">
                    <div class="modal-info">
                        <p class="modal-description">${this.escapeHtml(description)}</p>
                        <p class="modal-author">Photo by ${this.escapeHtml(authorName)}</p>
                    </div>
                </div>
            </div>
        `;

        // Add modal styles
        const modalStyles = `
            .image-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1000;
                animation: fadeIn 0.3s ease;
            }
            .modal-overlay {
                background: rgba(0, 0, 0, 0.9);
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 2rem;
            }
            .modal-content {
                position: relative;
                max-width: 90vw;
                max-height: 90vh;
            }
            .modal-close {
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 2rem;
                cursor: pointer;
                z-index: 1001;
            }
            .modal-image {
                max-width: 100%;
                max-height: 70vh;
                object-fit: contain;
                border-radius: 8px;
            }
            .modal-info {
                margin-top: 1rem;
                text-align: center;
                color: white;
            }
            .modal-description {
                font-size: 1.1rem;
                margin-bottom: 0.5rem;
            }
            .modal-author {
                font-size: 0.9rem;
                opacity: 0.8;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;

        // Add styles to head if not already present
        if (!document.querySelector('#modal-styles')) {
            const styleElement = document.createElement('style');
            styleElement.id = 'modal-styles';
            styleElement.textContent = modalStyles;
            document.head.appendChild(styleElement);
        }

        document.body.appendChild(modal);

        // Close modal functionality
        modal.querySelector('.modal-close').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                document.body.removeChild(modal);
            }
        });

        // Close on escape key
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    }

    showLoadingState() {
        this.loadingIndicator.style.display = 'flex';
        this.errorMessage.style.display = 'none';
        this.noResults.style.display = 'none';
        this.loadMoreContainer.style.display = 'none';
    }

    hideLoadingState() {
        this.loadingIndicator.style.display = 'none';
    }

    showError(message) {
        this.errorText.textContent = message;
        this.errorMessage.style.display = 'flex';
        this.loadingIndicator.style.display = 'none';
        this.noResults.style.display = 'none';
        this.loadMoreContainer.style.display = 'none';
    }

    showNoResults() {
        this.noResults.style.display = 'flex';
        this.errorMessage.style.display = 'none';
        this.loadingIndicator.style.display = 'none';
        this.loadMoreContainer.style.display = 'none';
    }

    showLoadMoreButton() {
        this.loadMoreContainer.style.display = 'flex';
    }

    hideLoadMoreButton() {
        this.loadMoreContainer.style.display = 'none';
    }

    showLoadMoreLoadingState() {
        this.loadMoreButton.innerHTML = `
            <div class="load-more-spinner"></div>
            Loading...
        `;
        this.loadMoreButton.disabled = true;
    }

    hideLoadMoreLoadingState() {
        this.loadMoreButton.innerHTML = `
            <div class="load-more-spinner" style="display: none;"></div>
            Load More Images
        `;
        this.loadMoreButton.disabled = false;
    }

    clearResults() {
        this.imageGrid.innerHTML = '';
    }

    showWelcomeMessage() {
        // Show a welcome message with example searches
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'welcome-message';
        welcomeDiv.innerHTML = `
            <div style="text-align: center; color: white; padding: 2rem; background: rgba(255,255,255,0.1); border-radius: 16px; margin-bottom: 2rem;">
                <h2 style="margin-bottom: 1rem; font-size: 1.5rem;">Welcome to Image Search!</h2>
                <p style="margin-bottom: 1rem;">Try searching for: nature, technology, animals, architecture, food, travel</p>
                <p style="font-size: 0.9rem; opacity: 0.8;">💡 Tip: Click on any image to view it in full size</p>
            </div>
        `;
        this.imageGrid.appendChild(welcomeDiv);
    }

    handleSearchError(error) {
        console.error('Search error:', error);
        let errorMessage = 'Failed to search for images. Please try again.';

        if (error.message.includes('API Error: 401')) {
            errorMessage = 'Invalid API key. Please check your Unsplash API key.';
        } else if (error.message.includes('API Error: 403')) {
            errorMessage = 'API quota exceeded. Please try again later.';
        } else if (error.message.includes('Failed to fetch')) {
            errorMessage = 'Network error. Please check your internet connection.';
        }

        this.showError(errorMessage);
    }

    handleLoadMoreError(error) {
        console.error('Load more error:', error);
        // Show a subtle error for load more (don't replace existing content)
        this.loadMoreButton.innerHTML = 'Error loading more images. Try again.';
        setTimeout(() => {
            this.loadMoreButton.innerHTML = `
                <div class="load-more-spinner" style="display: none;"></div>
                Load More Images
            `;
        }, 3000);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new ImageSearchApp();

    // Add some CSS animations for better UX
    const style = document.createElement('style');
    style.textContent = `
        .image-item {
            animation: fadeInUp 0.6s ease forwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

// Export for potential testing or module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ImageSearchApp;
}
