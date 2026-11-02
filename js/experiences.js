const experiences = [
  {
    id: 1,
    title: "Cliffs of Moher Coastal Walk",
    location: "Co. Clare",
    category: "coastal",
    duration: "1 day",
    price: 120,
    image: "images/experiences/placeholder.svg",
    description: "Walk the clifftop path above the Atlantic with a local guide and stop for a seafood lunch in Doolin."
  },
  {
    id: 2,
    title: "Dublin Highlights City Break",
    location: "Dublin",
    category: "city",
    duration: "3 days",
    price: 349,
    image: "images/experiences/placeholder.svg",
    description: "Trinity College, Temple Bar and the Guinness Storehouse, with a central hotel and a guided walking tour."
  },
  {
    id: 3,
    title: "Wild Atlantic Way Road Trip",
    location: "Co. Kerry",
    category: "coastal",
    duration: "5 days",
    price: 695,
    image: "images/experiences/placeholder.svg",
    description: "Drive the Ring of Kerry and Slea Head with scenic stops, beach walks and cosy coastal B&Bs."
  },
  {
    id: 4,
    title: "Connemara Hills and Lakes Escape",
    location: "Co. Galway",
    category: "countryside",
    duration: "2 days",
    price: 210,
    image: "images/experiences/placeholder.svg",
    description: "Hike through Connemara National Park and enjoy a peaceful night in a lakeside country lodge."
  },
  {
    id: 5,
    title: "Giant's Causeway Family Adventure",
    location: "Co. Antrim",
    category: "family",
    duration: "2 days",
    price: 280,
    image: "images/experiences/placeholder.svg",
    description: "Explore the basalt columns, cross the Carrick-a-Rede rope bridge and hear the legend of Finn McCool."
  },
  {
    id: 6,
    title: "Medieval Kilkenny Heritage Tour",
    location: "Co. Kilkenny",
    category: "cultural",
    duration: "1 day",
    price: 85,
    image: "images/experiences/placeholder.svg",
    description: "Visit Kilkenny Castle and the Medieval Mile, then browse the craft shops and traditional pubs."
  },
  {
    id: 7,
    title: "Galway Arts and Music Weekend",
    location: "Galway City",
    category: "city",
    duration: "3 days",
    price: 325,
    image: "images/experiences/placeholder.svg",
    description: "Street performers, live trad sessions and fresh oysters in one of Ireland's liveliest cities."
  },
  {
    id: 8,
    title: "Dingle Peninsula Dolphin Cruise",
    location: "Co. Kerry",
    category: "family",
    duration: "1 day",
    price: 95,
    image: "images/experiences/placeholder.svg",
    description: "Meet Fungie's famous successors on a boat trip from Dingle harbour, followed by ice cream on the pier."
  },
  {
    id: 9,
    title: "Wicklow Mountains Hiking Retreat",
    location: "Co. Wicklow",
    category: "countryside",
    duration: "2 days",
    price: 175,
    image: "images/experiences/placeholder.svg",
    description: "Hike Glendalough's lakes and valleys, with a guided trail and a stay in a mountain guesthouse."
  },
  {
    id: 10,
    title: "Newgrange and Boyne Valley Discovery",
    location: "Co. Meath",
    category: "cultural",
    duration: "1 day",
    price: 70,
    image: "images/experiences/placeholder.svg",
    description: "Step inside a 5,000-year-old passage tomb and visit the Hill of Tara on a guided history tour."
  },
  {
    id: 11,
    title: "Cork Food and Market Break",
    location: "Cork City",
    category: "city",
    duration: "2 days",
    price: 230,
    image: "images/experiences/placeholder.svg",
    description: "Sample local produce at the English Market and take a food trail through the city's best cafes."
  },
  {
    id: 12,
    title: "Aran Islands Cycling Escape",
    location: "Co. Galway",
    category: "coastal",
    duration: "2 days",
    price: 195,
    image: "images/experiences/placeholder.svg",
    description: "Ferry to Inis Mór, cycle past stone walls and visit the ancient fort of Dún Aonghasa."
  },
  {
    id: 13,
    title: "Kilkenny Farm and Fireside Stay",
    location: "Co. Kilkenny",
    category: "family",
    duration: "3 days",
    price: 420,
    image: "images/experiences/placeholder.svg",
    description: "Feed the animals, bake soda bread and toast marshmallows at a working family farm."
  },
  {
    id: 14,
    title: "Ring of Beara Countryside Retreat",
    location: "Co. Cork",
    category: "countryside",
    duration: "4 days",
    price: 540,
    image: "images/experiences/placeholder.svg",
    description: "Quiet roads, sheep-dotted hills and sea views on a slow-paced stay on the Beara Peninsula."
  },
  {
    id: 15,
    title: "Belfast Titanic and Culture Break",
    location: "Belfast",
    category: "cultural",
    duration: "3 days",
    price: 310,
    image: "images/experiences/placeholder.svg",
    description: "Tour Titanic Belfast, see the Peace Wall murals and enjoy the buzz of the Cathedral Quarter."
  }
];

function renderCards() {
  cardsection = document.getElementById("card-section")

  experiences.forEach((experience) => {
    const card = document.createElement("div")

    const cardcontent =`
      <div class="card col-12 col-md-6 col-lg-4">
        <div class="card-header h-100" data-category="${experience.category}" data-price="${experience.price}">
          <img src="${experience.image}" class="card-img">
        </div>

        <div class="card-body">
          <h5>${experience.title}</h5>
          <p>${experience.description}</p>
        </div>
     </div>`

    cardsection.innerHTML += cardcontent
  })
}

renderCards()
