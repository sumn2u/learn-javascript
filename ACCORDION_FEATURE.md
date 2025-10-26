# Accordion Feature for "In This Chapter" Section

## Overview

This document describes the accordion feature implementation for the "In This Chapter" table of contents section.

## Problem Statement

Previously, there was no option to hide the "In This Chapter" section, which could be problematic on pages with extensive content (e.g., Interview Questions page).

## Solution

Implemented an accordion feature that allows users to toggle the visibility of the "In This Chapter" section.

## Implementation Details

### Files Created

1. **`gitbook-plugin-toc-accordion/`** - Custom HonKit plugin
   - `index.js` - Plugin entry point
   - `package.json` - Plugin metadata
   - `assets/accordion.css` - Accordion styles
   - `assets/accordion.js` - Accordion functionality
   - `README.md` - Plugin documentation

2. **`styles/website.css`** - Custom global styles (configured in book.json)

### Files Modified

1. **`book.json`** - Added `toc-accordion` plugin to the plugins list and configured custom styles
2. **`node_modules/gitbook-plugin-toc-accordion`** - Symlink to local plugin

## Features

### ✅ User Features
- **Click to toggle**: Click on "In This Chapter" heading to show/hide content
- **Visual indicator**: Arrow icon that rotates based on state
- **Default open**: Accordion starts in open state for better UX
- **Persistent state**: User preference is saved in localStorage
- **Smooth animations**: CSS transitions for expand/collapse
- **Hover effects**: Visual feedback when hovering over the heading

### ✅ Accessibility Features
- **Keyboard navigation**: Works with Enter and Space keys
- **ARIA attributes**: Proper `role`, `aria-expanded`, and `aria-label` attributes
- **Focus indicator**: Tab navigation support
- **Screen reader friendly**: Announces state changes

### ✅ Technical Features
- **No conflicts**: Works alongside existing `intopic-toc` plugin
- **Responsive**: Works on all screen sizes
- **Browser compatible**: Supports all modern browsers
- **Lightweight**: Minimal CSS and JavaScript

## How to Use

1. Navigate to any page with a "In This Chapter" section
2. Click on the "In This Chapter" heading to collapse the section
3. Click again to expand it
4. Your preference is automatically saved

## Testing

To test the feature:

1. Start the development server: `npm start`
2. Open http://localhost:4000 in your browser
3. Navigate to any chapter page (e.g., `/en/basics/`)
4. Click on "In This Chapter" heading to test the accordion
5. Refresh the page to verify state persistence
6. Try keyboard navigation (Tab + Enter/Space)

## Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Opera: ✅

## Future Enhancements

Potential improvements:
- Add animation duration configuration
- Add option to change default state (open/closed)
- Add option to disable persistence
- Add custom icons support
