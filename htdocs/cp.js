// The plan is to make it so that the json information is inputted into the html. So that we can reuse the same page for each creature.
// Also, if we continue to use getElementByID(), then in cp.html the h1, h2, and p should have specific IDs instead of classes, i think

document.addEventListener('DOMContentLoaded', () => {
    fetch('./creatures.json') // Path to your JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById('output').innerHTML = `
                <p>ID_Number: ${data.id_number}<p>
                <p>Name: ${data.name}<p>
                <p>Image: ${data.image}<p>
                <p>Type: ${data.type}<p>
                <p>Description: ${data.description}<p>
                <p>Description_2: ${data.description_2}<p>
                <p>Related: ${data.related}<p>
            `;
        })
        .catch(error => {
            console.error('Error fetching or parsing JSON:', error);
        });

    function changeText(){
        document.getElementByID("Name").innerHTML= data.name
        document.getElementByID("Type").innerHTML="Humanoid Creature"
        document.getElementByID("p1").innerHTML="Goblins are funny little guys, to be more specific they are 1 foot tall. They love money and stealing things from other people."
    }
})