document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            age: formData.get('age'),
            favoriteStarWarsMovie: formData.get('favoriteMovie'),
            favoriteStarWarsMovieRating: formData.get('movieRating'),
            favoriteStarWarsCharacter: formData.get('favoriteCharacter'),
            favoriteStarWarsCharacterRating: formData.get('characterRating'),
        };

        try {
            const response = await fetch('http://localhost:7000/starwars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                alert(`Form submitted successfully! Your form ID is ${result.id}`);
                form.reset(); // Clear the form
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            alert('An error occurred while submitting the form. Please try again later.');
        }
    });

   
});
