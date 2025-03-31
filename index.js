
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});
    document.addEventListener("DOMContentLoaded", function() {
        const elements = document.querySelectorAll(".fade-in");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => {
            observer.observe(element);
        });
    });
document.getElementById("mobile-menu").addEventListener("click", function () {
    let navMenu = document.getElementById("nav-menu");
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
});
    document.addEventListener('DOMContentLoaded', function() {
        const slider = document.querySelector('.slider');
        const slides = slider.querySelectorAll('.slide');
        const indicators = slider.querySelectorAll('.indicator');
        const prevButton = slider.querySelector('.prev-slide');
        const nextButton = slider.querySelector('.next-slide');
        
        let currentSlide = 0;
        let autoSlideInterval;
        
        function showSlide(index) {
            // Remove active and other positioning classes from all slides
            slides.forEach(slide => {
                slide.classList.remove('active', 'prev', 'next');
            });
            
            // Remove active class from all indicators
            indicators.forEach(indicator => {
                indicator.classList.remove('active');
            });
            
            // Calculate next and previous slide indices
            const prevIndex = (index - 1 + slides.length) % slides.length;
            const nextIndex = (index + 1) % slides.length;
            
            // Add classes to slides for animation
            slides[prevIndex].classList.add('prev');
            slides[index].classList.add('active');
            slides[nextIndex].classList.add('next');
            
            // Activate current indicator
            indicators[index].classList.add('active');
            
            currentSlide = index;
        }
        
        function nextSlide() {
            showSlide((currentSlide + 1) % slides.length);
        }
        
        function prevSlide() {
            showSlide((currentSlide - 1 + slides.length) % slides.length);
        }
        
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        }
        
        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }
        
        // Event listeners for manual navigation
        nextButton.addEventListener('click', () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
        
        prevButton.addEventListener('click', () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });
        
        // Indicator click navigation
        indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                const slideIndex = parseInt(indicator.getAttribute('data-slide'));
                stopAutoSlide();
                showSlide(slideIndex);
                startAutoSlide();
            });
        });
        
        // Start auto-sliding when page loads
        startAutoSlide();
    });
