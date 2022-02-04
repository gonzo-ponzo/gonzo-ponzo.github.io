document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.choices').addEventListener('hideDropdown', function() {
            const path = document.querySelector('.choices__item--selectable').dataset.value
            console.log(path),

            document.querySelectorAll('.gallery__tab').forEach(function(tab) {
                tab.classList.remove('gallery__tab--active')
            }),

            document.querySelector(`[data-target="${path}"]`).classList.add('gallery__tab--active');
        })  
})