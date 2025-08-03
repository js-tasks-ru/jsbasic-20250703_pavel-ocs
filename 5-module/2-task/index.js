function toggleText() {
    const toggleButton = document.querySelector('.toggle-text-button')
    toggleButton.addEventListener('click', () => {
        const toggleText = document.getElementById('text');
        toggleText.hidden = !toggleText.hidden;
    });

}