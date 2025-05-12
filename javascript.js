document.addEventListener('DOMContentLoaded', () => {
    const changeTextButton = document.getElementById('change-text-button');
    const introText = document.getElementById('intro-text');
    const dynamicContent = document.getElementById('dynamic-content');
    const addElementButton = document.getElementById('add-element-button');
    const removeElementButton = document.getElementById('remove-element-button');
    let elementCount = 0;

    changeTextButton.addEventListener('click', () => {
        introText.textContent = 'The text has been changed dynamically!';
        introText.style.color = '#2196F3';
        introText.style.fontSize = '1.2em';
    });

    addElementButton.addEventListener('click', () => {
        elementCount++;
        const newElement = document.createElement('p');
        newElement.textContent = `Dynamically added element ${elementCount}`;
        newElement.style.backgroundColor = '#FFEB3B';
        newElement.style.padding = '10px';
        newElement.style.margin = '10px 0';
        newElement.classList.add('dynamic-element'); // Add a class for easier selection
        dynamicContent.appendChild(newElement);
    });

    removeElementButton.addEventListener('click', () => {
        const dynamicElements = document.querySelectorAll('.dynamic-element');
        if (dynamicElements.length > 0) {
            dynamicElements[dynamicElements.length - 1].remove(); // Remove the last one
        }
    });
});