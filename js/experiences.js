const experiences = [
  {
    id: 1,
    title: "Cliffs of Moher Coastal Walk",
    location: "Co. Clare",
    category: "coastal",
    duration: "1 day",
    durationDays: 1,
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
    durationDays: 3,
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
    durationDays: 5,
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
    durationDays: 2,
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
    durationDays: 2,
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
    durationDays: 1,
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
    durationDays: 3,
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
    durationDays: 1,
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
    durationDays: 2,
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
    durationDays: 1,
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
    durationDays: 2,
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
    durationDays: 2,
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
    durationDays: 3,
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
    durationDays: 4,
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
    durationDays: 3,
    price: 310,
    image: "images/experiences/placeholder.svg",
    description: "Tour Titanic Belfast, see the Peace Wall murals and enjoy the buzz of the Cathedral Quarter."
  }
];

function renderCards(experienceList) {
  const cardSection = document.getElementById("card-section")

  for(const experience of experienceList) {
    const cardContent = `
        <div class="card experience-card" data-category="${experience.category}" data-price="${experience.price}">
          <img src="${experience.image}" class="card-img-top" alt="${experience.alt}">
          <div class="card-body">
            <h3 class="card-title">${experience.title}</h3>
            <p class="card-location">${experience.location}</p>
            <p class="card-text">${experience.description}</p>
          </div>
          <div class="card-footer">
            <span>${experience.duration}</span>
            <span>€${experience.price}</span>
          </div>
        </div>`
    
      cardSection.innerHTML += cardContent
  }
}

function populateFilters(experienceList) {
  let categories = []
  let locations = []
  let maxPrice = 0
  
  for(const experience of experienceList) {
    if (!categories.includes(experience["category"])) {
      categories.push(experience["category"])
    }
    if (!locations.includes(experience["location"])) {
      locations.push(experience["location"])
    }
    if (experience.price > maxPrice) {
      maxPrice = experience.price
    }

    categories.sort()
    locations.sort()

    fillSelect(document.getElementById("filter-category"), categories)
    fillSelect(document.getElementById("filter-location"), locations)

    const priceSlider = document.getElementById("filter-price")
    priceSlider.min = 0
    priceSlider.max = maxPrice
    priceSlider.value = maxPrice
    document.getElementById("price-value").textContent = "€" + maxPrice
  }
}

function fillSelect(selectElement, values) {
  selectElement.innerHTML='<option value="all">All</option>'

  for (const value of values) {
    const option = document.createElement("option")
    option.value = value
    option.textContent = capitalise(value)
    selectElement.appendChild(option)
  }
}

function capitalise(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function applyFilters() {
  const filteredCategory = document.getElementById("filter-category").value
  const filteredLocation = document.getElementById("filter-location").value
  const filteredPrice= parseInt(document.getElementById("filter-price").value)
  const sorting = document.getElementById("sort-by").value

  document.getElementById("price-value").textContent = "€" + filteredPrice
  
    // 3. Build a filtered list with experiences.filter(...)
    //    Keep an experience only if ALL of these are true:
    //    - category is "all" OR matches experience.category
    //    - location is "all" OR matches experience.county
    //    - experience.price <= max price

    // 4. Sort the filtered list based on the sort-by value
    //    e.g. for price low to high: list.sort((a, b) => a.price - b.price)
    //    "default" means leave the original order

    // 5. Call renderCards with the result

    // 6. Show #no-results if the list is empty, hide it otherwise
    //    (set .hidden = true or false)
}

document.getElementById("filter-category").addEventListener("change", applyFilters);
document.getElementById("filter-location").addEventListener("change", applyFilters);
document.getElementById("sort-by").addEventListener("change", applyFilters);
document.getElementById("filter-price").addEventListener("input", applyFilters);

populateFilters(experiences)
renderCards(experiences)
applyFilters()
