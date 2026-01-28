const reviewIcons = document.querySelectorAll('.icon-round')
 reviewIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const parentLi = icon.closest('.item-reviews')
        parentLi.classList.toggle('isActive')
    })
 })