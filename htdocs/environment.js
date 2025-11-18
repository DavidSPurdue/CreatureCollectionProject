document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const environmentID = parseInt(params.get('id'));

    console.log('URL id: ', environmentID);

    fetch('environments.json')
        .then(response => response.json())
        .then(data => {
        console.log('JSON data: ', data);
        const content = document.getElementById('environment-content');
        const environment = data.environment.find(c => c.id === environmentID);
        console.log('Found environment: ', environment);

        if (environment) {
            content.innerHTML = `
                <div id="content">
                    <h1>${environment.name}</h1>
                    <p>${environment.description}</p>
                    <p>${environment.description_2}</p>
                </div>

                <div id="description">
                    <img class="environment-img" src="${environment.image}"/>
                </div>
            `;
            } else {
                content.innerHTML = '<p>Environment not found.</p>';
                return;
            }
        })
        .catch(error => console.error('Error loading JSON: ', error));
})
