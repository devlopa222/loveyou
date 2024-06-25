document.getElementById('next-button').addEventListener('click', function() {
    const main = document.getElementById('main');
    const animationContainer = document.getElementById('animation-container');
    const airplane = document.getElementById('airplane');
    const map = document.getElementById('map');
    const car = document.getElementById('car');
    const quiz = document.getElementById('quiz');
    const photos = document.getElementById('photos');

    main.style.display = 'none';
    animationContainer.style.display = 'block';

    airplane.addEventListener('animationiteration', function() {
        airplane.style.display = 'none';
        map.style.display = 'block';
        car.style.display = 'block';

        car.addEventListener('animationiteration', function() {
            car.style.display = 'none';
            map.style.display = 'none';
            airplane.style.display = 'block';
            // Zoom out and continue animation (not implemented for simplicity)
        });
    });
});

// Quiz handling
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const answers = new FormData(event.target);
    if (answers.get('question1') === 'b' && answers.get('question2') === 'true' && answers.get('question3').toLowerCase() === 'blanca') {
        alert('Correct!');
    } else {
        alert('Try again!');
    }
});
