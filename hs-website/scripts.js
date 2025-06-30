// scripts.js

// 1. Disable ALL hash-based scrolling
window.addEventListener('load', () => {
    // Remove the hash completely from URL without scrolling
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
});

// 2. Save scroll position before refresh
window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPosition', window.scrollY);
});

// 3. Restore scroll position on load
window.addEventListener('load', () => {
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
        localStorage.removeItem('scrollPosition');
    }
});

// 4. Copy button functionality (unchanged)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', function() {
            const code = this.nextElementSibling.innerText;
            navigator.clipboard.writeText(code).then(() => {
                const icon = this.querySelector('i');
                icon.classList.replace('fa-copy', 'fa-check');
                setTimeout(() => icon.classList.replace('fa-check', 'fa-copy'), 1500);
            });
        });
    });
});