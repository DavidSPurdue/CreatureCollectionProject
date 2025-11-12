document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const creatureID = parseInt(params.get('id'));

    console.log('URL id: ', creatureID);

    fetch('creatures.json')
        .then(response => response.json())
        .then(data => {
        console.log('JSON data: ', data);
        const content = document.getElementById('creature-content');
        const creature = data.creature.find(c => c.id === creatureID);
        console.log('Found creature: ', creature);

        if (creature) {
            content.innerHTML = `
                <div id="content">
                    <h1>${creature.name}</h1>
                    <h2>${creature.type}</h2>
                    <p>${creature.description}</p>
                </div>

                <div id="description">
                    <img class="creature-img" src=${creature.image}/>
                </div>
            `;
            } else {
                content.innerHTML = '<p>Creature not found.</p>';
                return;
            }
        })
        .catch(error => console.error('Error loading JSON: ', error));
})
