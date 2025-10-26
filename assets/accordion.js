// Accordion functionality for "In This Chapter" section
require(['gitbook', 'jQuery'], function(gitbook, $) {
  gitbook.events.bind('page.change', function() {
    // Wait for the intopic-toc to be rendered
    setTimeout(function() {
      var $tocNav = $('nav.intopic-toc');
      var $tocHeader = $tocNav.find('h3');
      
      if ($tocHeader.length === 0) return;
      
      // Check if accordion is already initialized
      if ($tocHeader.data('accordion-initialized')) return;
      
      // Mark as initialized
      $tocHeader.data('accordion-initialized', true);
      
      // Load saved state from localStorage (default: open)
      var isCollapsed = localStorage.getItem('intopic-toc-collapsed') === 'true';
      
      if (isCollapsed) {
        $tocNav.addClass('toc-collapsed');
      }
      
      // Add click handler to toggle accordion
      $tocHeader.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        $tocNav.toggleClass('toc-collapsed');
        
        // Save state to localStorage
        var collapsed = $tocNav.hasClass('toc-collapsed');
        localStorage.setItem('intopic-toc-collapsed', collapsed);
      });
      
      // Make header keyboard accessible
      $tocHeader.attr('tabindex', '0');
      $tocHeader.attr('role', 'button');
      $tocHeader.attr('aria-expanded', !isCollapsed);
      $tocHeader.attr('aria-label', 'Toggle table of contents');
      
      // Handle keyboard navigation
      $tocHeader.on('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          $(this).click();
          
          // Update aria-expanded
          var expanded = !$tocNav.hasClass('toc-collapsed');
          $(this).attr('aria-expanded', expanded);
        }
      });
    }, 500); // Wait for plugin to render
  });
});
