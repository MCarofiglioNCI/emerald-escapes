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

const priceSlider = document.getElementById("filter-price")

function renderCards(experienceList) {
  const cardSection = document.getElementById("card-section")

  cardSection.innerHTML = ""

  // Extra "wow factor": View Transitions API. Relatively new feature and not fully supported in all browsers, but fallback behavior works fine
  // MDN article: https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API
  for(const experience of experienceList) {
    const cardContent = `
      <div class="card experience-card" style="view-transition-name: card-${experience.id}" data-category="${experience.category}" data-price="${experience.price}">
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
  const selectedCategory = document.getElementById("filter-category").value
  const selectedLocation = document.getElementById("filter-location").value
  const selectedPrice= parseInt(document.getElementById("filter-price").value)
  const sortBy = document.getElementById("sort-by").value
  const filteredExperiences = []

  
  for (const experience of experiences) {
    if (
      (experience["category"] === selectedCategory || selectedCategory == "all") && 
      (experience["location"] === selectedLocation || selectedLocation == "all") && 
      experience["price"] <= selectedPrice
    ) {
      filteredExperiences.push(experience)
    }
  }

  // Sorting algorithm from the following stackoverflow thread: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
  switch (sortBy) {
    case "price-asc":
      filteredExperiences.sort((a, b) => a.price - b.price)
      break
    case "price-desc":
      filteredExperiences.sort((a, b) => b.price - a.price)
      break
    case "duration-asc":
      filteredExperiences.sort((a, b) => a.durationDays - b.durationDays)
      break
  } 
  
  renderCards(filteredExperiences)

  const noResults = document.getElementById("no-results")

  if (filteredExperiences.length === 0) {
    noResults.hidden = false
  } else {
    noResults.hidden = true
  }
}


// Input event listerner for the price slider to only update the label with the max price, update function only called on change/release of the slider
document.getElementById("filter-category").addEventListener("change", updateWithTransition);
document.getElementById("filter-location").addEventListener("change", updateWithTransition);
document.getElementById("sort-by").addEventListener("change", updateWithTransition);
priceSlider.addEventListener("input", () => {
  document.getElementById("price-value").textContent = "€" + parseInt(priceSlider.value)
});
priceSlider.addEventListener("change", updateWithTransition);

populateFilters(experiences)
applyFilters()
function updateWithTransition() {
  if (document.startViewTransition) {
      document.startViewTransition(() => applyFilters())
  } else {
      applyFilters()
  }
}