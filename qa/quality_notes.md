# Performance & Accessibility Quick Notes

## Accessibility
1. Login form lacks labels → Screen reader users may struggle.
2. Contrast on error messages.
3. Focus outline missing on "Add to Cart" buttons.

## Performance
1. `performance_glitch_user` login → Page load noticeably slower.
3. Images load without lazy-loading → slower on mobile.

## Suggested Fixes
- Add labels and semantic HTML for forms.
- Improve color contrast for error text.
- Implement lazy loading for product images.
- Optimize sorting logic for faster response.
