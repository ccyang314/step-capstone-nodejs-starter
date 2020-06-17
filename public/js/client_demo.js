console.log("Hello from client_demo.js");

const clientSideCatTemplate = 
    `
        {{#each cats}}
            <div class="cat">
                <h1>{{this.name}}</h1>
                <p>Age: {{this.age}}</p>
                <img src="{{this.photo_url}}" height="200">
            </div>
        {{/each}}
    `;
const myCats =
[{
    name: 'Fiona',
    age: 4,
    photo_url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    name: 'Taco',
    age: 2,
    photo_url: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg'
}];

function render() {
    console.log("rendering on client...");
    const renderCats = Handlebars.compile(clientSideCatTemplate);
    document.getElementById('cat-container').innerHTML = renderCats({cats: myCats});
}