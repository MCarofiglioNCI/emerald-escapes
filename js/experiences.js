// Content of experiences[] generated using Claude AI, with the following prompt:
//
// "I am creating a list of experiences for a fictional travel agency for an assignment. I am creating a list of objects to generate the cards programmatically,
// help me compile a list of 15 experiences with the following structure:
//
// const experiences = [
//   {
//     id: 1,
//     title: "Cliffs of Moher Coastal Walk",
//     location: "Co. CLare",
//     category: "coastal",
//     duration: "1 day",
//     price: 120,
//     image: "images/experiences/cliffs-of-moher.jpg",
//     description: "Short description here."
//   },
//   {
//
//   }
// ]"
//
// I subsequently edited the format during development due to the need to filter by duration (thus, needed an int value rather than a string for simplicity)

const experiences = [
  {
    id: 1,
    title: "Cliffs of Moher Coastal Walk",
    location: "Co. Clare",
    category: "coastal",
    duration: "1 day",
    durationDays: 1,
    price: 120,
    image: "images/experiences/moher.jpg",
    description:
      "Walk the clifftop path above the Atlantic with a local guide and stop for a seafood lunch in Doolin.",
  },
  {
    id: 2,
    title: "Dublin Highlights City Break",
    location: "Dublin",
    category: "city",
    duration: "3 days",
    durationDays: 3,
    price: 349,
    image: "images/experiences/dublin-highlights.jpg",
    description:
      "Trinity College, Temple Bar and the Guinness Storehouse, with a central hotel and a guided walking tour.",
  },
  {
    id: 3,
    title: "Wild Atlantic Way Road Trip",
    location: "Co. Kerry",
    category: "coastal",
    duration: "5 days",
    durationDays: 5,
    price: 695,
    image: "images/experiences/atlantic-way.jpg",
    description:
      "Drive the Ring of Kerry and Slea Head with scenic stops, beach walks and cosy coastal B&Bs.",
  },
  {
    id: 4,
    title: "Connemara Hills and Lakes Escape",
    location: "Co. Galway",
    category: "countryside",
    duration: "2 days",
    durationDays: 2,
    price: 210,
    image: "images/experiences/connemara-hills.jpg",
    description:
      "Hike through Connemara National Park and enjoy a peaceful night in a lakeside country lodge.",
  },
  {
    id: 5,
    title: "Giant's Causeway Family Adventure",
    location: "Co. Antrim",
    category: "family",
    duration: "2 days",
    durationDays: 2,
    price: 280,
    image: "images/experiences/giants-causeway.jpg",
    description:
      "Explore the basalt columns, cross the Carrick-a-Rede rope bridge and hear the legend of Finn McCool.",
  },
  {
    id: 6,
    title: "Medieval Kilkenny Heritage Tour",
    location: "Co. Kilkenny",
    category: "cultural",
    duration: "1 day",
    durationDays: 1,
    price: 85,
    image: "images/experiences/kilkenny.jpg",
    description:
      "Visit Kilkenny Castle and the Medieval Mile, then browse the craft shops and traditional pubs.",
  },
  {
    id: 7,
    title: "Galway Arts and Music Weekend",
    location: "Galway City",
    category: "city",
    duration: "3 days",
    durationDays: 3,
    price: 325,
    image: "images/experiences/galway-arts.jpg",
    description:
      "Street performers, live trad sessions and fresh oysters in one of Ireland's liveliest cities.",
  },
  {
    id: 8,
    title: "Dingle Peninsula Dolphin Cruise",
    location: "Co. Kerry",
    category: "family",
    duration: "1 day",
    durationDays: 1,
    price: 95,
    image: "images/experiences/dingle.jpg",
    description:
      "Meet Fungie's famous successors on a boat trip from Dingle harbour, followed by ice cream on the pier.",
  },
  {
    id: 9,
    title: "Wicklow Mountains Hiking Retreat",
    location: "Co. Wicklow",
    category: "countryside",
    duration: "2 days",
    durationDays: 2,
    price: 175,
    image: "images/experiences/wicklow.jpg",
    description:
      "Hike Glendalough's lakes and valleys, with a guided trail and a stay in a mountain guesthouse.",
  },
  {
    id: 10,
    title: "Newgrange and Boyne Valley Discovery",
    location: "Co. Meath",
    category: "cultural",
    duration: "1 day",
    durationDays: 1,
    price: 70,
    image: "images/experiences/newgrange.jpg",
    description:
      "Step inside a 5,000-year-old passage tomb and visit the Hill of Tara on a guided history tour.",
  },
  {
    id: 11,
    title: "Cork Food and Market Break",
    location: "Cork City",
    category: "city",
    duration: "2 days",
    durationDays: 2,
    price: 230,
    image: "images/experiences/cork.jpg",
    description:
      "Sample local produce at the English Market and take a food trail through the city's best cafes.",
  },
  {
    id: 12,
    title: "Aran Islands Cycling Escape",
    location: "Co. Galway",
    category: "coastal",
    duration: "2 days",
    durationDays: 2,
    price: 195,
    image: "images/experiences/aran-islands.jpg",
    description:
      "Ferry to Inis Mór, cycle past stone walls and visit the ancient fort of Dún Aonghasa.",
  },
  {
    id: 13,
    title: "Kilkenny Farm and Fireside Stay",
    location: "Co. Kilkenny",
    category: "family",
    duration: "3 days",
    durationDays: 3,
    price: 420,
    image: "images/experiences/kilkenny-fireside.jpg",
    description:
      "Feed the animals, bake soda bread and toast marshmallows at a working family farm.",
  },
  {
    id: 14,
    title: "Ring of Beara Countryside Retreat",
    location: "Co. Cork",
    category: "countryside",
    duration: "4 days",
    durationDays: 4,
    price: 540,
    image: "images/experiences/ring-of-beara.jpg",
    description:
      "Quiet roads, sheep-dotted hills and sea views on a slow-paced stay on the Beara Peninsula.",
  },
  {
    id: 15,
    title: "Belfast Titanic and Culture Break",
    location: "Belfast",
    category: "cultural",
    duration: "3 days",
    durationDays: 3,
    price: 310,
    image: "images/experiences/belfast.jpg",
    description:
      "Tour Titanic Belfast, see the Peace Wall murals and enjoy the buzz of the Cathedral Quarter.",
  },
];

const priceSlider = document.getElementById("filter-price");
const dialog = document.getElementById("experience-dialog")
let activeCard = null
let activeId = null


function renderCards(experienceList) {
  const cardSection = document.getElementById("card-section");

  cardSection.innerHTML = "";

  // Extra "wow factor": View Transitions API. Relatively new feature and not fully supported in all browsers, but fallback behavior works fine
  // MDN article: https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API
  for (const experience of experienceList) {
    const cardContent = `
      <div class="card experience-card" style="--card-name: card-${experience.id}" data-id="${experience.id}" data-category="${experience.category}" data-price="${experience.price}">
        <img src="${experience.image}" class="card-img-top" alt="${experience.alt}" width="800" height="533" loading="lazy" decoding="async">
        <div class="card-body">
          <h3 class="card-title">${experience.title}</h3>
          <p class="card-location">${experience.location}</p>
          <p class="card-text">${experience.description}</p>
        </div>
        <div class="card-footer">
          <span class="card-duration">${experience.duration}</span>
          <span class="card-price">€${experience.price}</span>
        </div>
      </div>`;

    cardSection.innerHTML += cardContent;
  }
}

function populateFilters(experienceList) {
  let categories = [];
  let locations = [];
  let maxPrice = 0;

  for (const experience of experienceList) {
    if (!categories.includes(experience["category"])) {
      categories.push(experience["category"]);
    }
    if (!locations.includes(experience["location"])) {
      locations.push(experience["location"]);
    }
    if (experience.price > maxPrice) {
      maxPrice = experience.price;
    }
  }
  categories.sort();
  locations.sort();

  fillSelect(document.getElementById("filter-category"), categories);
  fillSelect(document.getElementById("filter-location"), locations);

  const priceSlider = document.getElementById("filter-price");
  priceSlider.min = 0;
  priceSlider.max = maxPrice;
  priceSlider.value = maxPrice;
  document.getElementById("price-value").textContent = "€" + maxPrice;
}

function fillSelect(selectElement, values) {
  selectElement.innerHTML = '<option value="all">All</option>';

  for (const value of values) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = capitalise(value);
    selectElement.appendChild(option);
  }
}

function capitalise(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function applyFilters() {
  const selectedCategory = document.getElementById("filter-category").value;
  const selectedLocation = document.getElementById("filter-location").value;
  const selectedPrice = parseInt(document.getElementById("filter-price").value);
  const sortBy = document.getElementById("sort-by").value;
  const filteredExperiences = [];

  for (const experience of experiences) {
    if (
      (experience["category"] === selectedCategory ||
        selectedCategory == "all") &&
      (experience["location"] === selectedLocation ||
        selectedLocation == "all") &&
      experience["price"] <= selectedPrice
    ) {
      filteredExperiences.push(experience);
    }
  }

  // Sorting algorithm from the following stackoverflow thread: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
  switch (sortBy) {
    case "price-asc":
      filteredExperiences.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filteredExperiences.sort((a, b) => b.price - a.price);
      break;
    case "duration-asc":
      filteredExperiences.sort((a, b) => a.durationDays - b.durationDays);
      break;
  }

  renderCards(filteredExperiences);

  const noResults = document.getElementById("no-results");

  document.getElementById("result-count").textContent =
    `Showing ${filteredExperiences.length} of ${experiences.length} experiences`;

  if (filteredExperiences.length === 0) {
    noResults.hidden = false;
  } else {
    noResults.hidden = true;
  }
}

// Filling dialog with details from the selected experience
function fillDialog(experience) {
  const image = document.getElementById("dialog-image")
  image.src = experience.image
  image.alt = experience.alt

  document.getElementById("dialog-location").textContent = experience.location
  document.getElementById("dialog-title").textContent = experience.title
  document.getElementById("dialog-description").textContent = experience.description
  document.getElementById("dialog-duration").textContent = experience.duration
  document.getElementById("dialog-price").textContent = "€" + experience.price


}

function openExperience(id, card) {
  if (activeCard) {
      activeCard.style.viewTransitionName = `card-${activeId}`
  }

  // Array.find() to return the first item that matches the condition. Since id is unique per experience, no risk of errors
  // Source: MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const experience = experiences.find((item) => item.id === id)
  fillDialog(experience)

  activeCard = card
  activeId = id

  if (!document.startViewTransition) {
      dialog.showModal()
      return
  }

  activeCard.style.viewTransitionName = "active-card"

  document.startViewTransition(() => {
      activeCard.style.viewTransitionName = "none"
      dialog.style.viewTransitionName = `active-card`
      dialog.showModal()
  })
}

function closeExperience() {
  if (!document.startViewTransition || !activeCard) {
    dialog.close()
    return
  }

  const closingCard = activeCard

  // Reverse the view transition so the dialog shrinks back into its card
  const transition = document.startViewTransition(() => {
    dialog.close()
    dialog.style.viewTransitionName = "none"
    closingCard.style.viewTransitionName = "active-card"
  })

  transition.finished.then(() => {
      closingCard.style.viewTransitionName = ""
  })
}


// Input event listerner for the price slider to only update the label with the max price, update function only called on change/release of the slider
document
  .getElementById("filter-category")
  .addEventListener("change", updateWithTransition);
document
  .getElementById("filter-location")
  .addEventListener("change", updateWithTransition);
document
  .getElementById("sort-by")
  .addEventListener("change", updateWithTransition);
priceSlider.addEventListener("input", () => {
  document.getElementById("price-value").textContent =
    "€" + parseInt(priceSlider.value);
});
priceSlider.addEventListener("change", updateWithTransition);
document.getElementById("reset-filters").addEventListener("click", () => {
  document.getElementById("filter-category").value = "all";
  document.getElementById("filter-location").value = "all";
  document.getElementById("sort-by").value = "default";
  priceSlider.value = priceSlider.max;

  updateWithTransition();
});

const cardSection = document.getElementById("card-section");

cardSection.addEventListener("click", (event) => {
  const card = event.target.closest(".experience-card")
  if (card) {
    const id = Number(card.dataset.id)
    openExperience(id, card)
  }
})

document.querySelector(".dialog-close").addEventListener("click", closeExperience)

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closeExperience()
  }
})

dialog.addEventListener("cancel", (event) => {
  event.preventDefault()
  closeExperience()
})


function updateWithTransition() {
  if (!document.startViewTransition) {
    applyFilters()
    return
  }

  // Fix for a small bug with view transitions, applying a common class to the card section avoids styling bugs
  cardSection.classList.add("filtering")
  const transition = document.startViewTransition(() => applyFilters())
  transition.finished.then(() => cardSection.classList.remove("filtering"))
}

function presetFilterFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryFromUrl = urlParams.get("category");
  const categorySelect = document.getElementById("filter-category");

  // Only apply it if it matches one of the dropdown options, so a wrong URL is ignored
  for (const option of categorySelect.options) {
    if (option.value === categoryFromUrl) {
      categorySelect.value = categoryFromUrl;
    }
  }
}

populateFilters(experiences);
presetFilterFromUrl();
applyFilters();
