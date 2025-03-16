document.addEventListener('DOMContentLoaded', function() {
    // Modal references
    const filterButton = document.getElementById('filter-button');
    const filterModal = document.getElementById('filter-modal');
    const filterApply = document.getElementById('filter-apply');
    const filterReset = document.getElementById('filter-reset');
    const newsHelpButton = document.getElementById('news-help-button');
    const newsHelpModal = document.getElementById('news-help-modal');
    const newsHelpClose = document.getElementById('news-help-close');
    const modalCloseButtons = document.querySelectorAll('.modal-close');

    // Category tabs
    const categoryTabs = document.querySelectorAll('.tab');
    
    // Filter button event listener
    filterButton.addEventListener('click', function() {
        filterModal.style.display = 'flex';
        
        // Set current date as default for 'To' date
        const today = new Date();
        const todayFormatted = today.toISOString().split('T')[0];
        document.getElementById('date-to').value = todayFormatted;
        
        // Set default 'From' date to 30 days ago
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(today.getDate() - 30);
        const thirtyDaysAgoFormatted = thirtyDaysAgo.toISOString().split('T')[0];
        document.getElementById('date-from').value = thirtyDaysAgoFormatted;
    });
    
    // Help button event listener
    newsHelpButton.addEventListener('click', function() {
        newsHelpModal.style.display = 'flex';
    });
    
    // Close buttons for all modals
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parentModal = this.closest('.modal-overlay');
            if (parentModal) {
                parentModal.style.display = 'none';
            }
        });
    });
    
    // Help close button
    newsHelpClose.addEventListener('click', function() {
        newsHelpModal.style.display = 'none';
    });
    
    // Apply filter button
    filterApply.addEventListener('click', function() {
        // Gather filter data
        const fromDate = document.getElementById('date-from').value;
        const toDate = document.getElementById('date-to').value;
        
        // Get selected categories
        const selectedCategories = [];
        document.querySelectorAll('[id^="cat-"]:checked').forEach(checkbox => {
            selectedCategories.push(checkbox.id.replace('cat-', ''));
        });
        
        // Get selected sources
        const selectedSources = [];
        document.querySelectorAll('[id^="source-"]:checked').forEach(checkbox => {
            selectedSources.push(checkbox.id.replace('source-', ''));
        });
        
        // In a real application, we would apply these filters to the news data
        console.log('Applying filters:', {
            dateRange: { from: fromDate, to: toDate },
            categories: selectedCategories,
            sources: selectedSources
        });
        
        // Visual feedback - update filter button to show active filters
        filterButton.innerHTML = '<i class="fas fa-filter"></i> Filters Applied';
        filterButton.classList.add('btn-primary');
        filterButton.classList.remove('btn-outline');
        
        // Close the filter modal
        filterModal.style.display = 'none';
    });
    
    // Reset filter button
    filterReset.addEventListener('click', function() {
        // Reset all checkboxes to checked
        document.querySelectorAll('.filter-section input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = true;
        });
        
        // Clear date fields
        document.getElementById('date-from').value = '';
        document.getElementById('date-to').value = '';
        
        // Reset keyword pills (in a real app, we would remove them)
        
        // Visual feedback - update filter button to show default state
        filterButton.innerHTML = '<i class="fas fa-filter"></i> Filter';
        filterButton.classList.remove('btn-primary');
        filterButton.classList.add('btn-outline');
    });
    
    // Category tab functionality
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get category from data attribute
            const category = this.dataset.category;
            
            // In a real app, we would filter news based on the selected category
            console.log('Selected category:', category);
        });
    });
    
    // Keyword pill removal
    document.querySelectorAll('.keyword-pill .fa-times-circle').forEach(icon => {
        icon.addEventListener('click', function() {
            // Remove the keyword pill
            this.parentElement.remove();
        });
    });
    
    // Demo functionality for bookmark icons
    document.querySelectorAll('.news-action .fa-bookmark').forEach(icon => {
        icon.addEventListener('click', function() {
            // Toggle the icon between outline and solid to indicate saved state
            if (this.classList.contains('far')) {
                this.classList.remove('far');
                this.classList.add('fas');
                this.setAttribute('title', 'Saved');
            } else {
                this.classList.remove('fas');
                this.classList.add('far');
                this.setAttribute('title', 'Save');
            }
        });
    });
    
    // Set up event listeners for the calendar (basic functionality)
    document.querySelectorAll('.calendar-event').forEach(event => {
        event.addEventListener('click', function() {
            // In a real app, we might show details about the event
            alert(`Event details: ${this.textContent}`);
        });
    });
});
