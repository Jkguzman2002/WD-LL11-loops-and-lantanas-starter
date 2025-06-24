// Initial rendering logic – to be refactored during the lab
function addStations(stations) {
  stations.forEach(station => {
    addStationElement(station);
  });
}

// 🧪 TEAM FEATURES

// 💌 Wishlist Renderer
function renderWishlist() {
  // TODO: Use forEach to display items in wishlist
}

// ❌ Search Feedback
function searchStations(query) {
  // TODO: Filter stations array based on query
  // TODO: Display error if none found
}

// 🌟 Random Featured Station
function pickFeaturedStation() {
  // Pick a random station index
  const randomIndex = Math.floor(Math.random() * stations.length);
  let featured = null;
  stations.forEach((station, idx) => {
    if (idx === randomIndex) {
      featured = station;
    }
  });
  // Display featured station in the featured-station section
  const featuredSection = document.getElementById('featured-station');
  if (featuredSection && featured) {
    featuredSection.innerHTML = `<h2>Featured Station</h2>
      <div class="featured-card">
        <h3>${featured.name}</h3>
        <p><strong>Location:</strong> ${featured.location}</p>
        <p><strong>Type:</strong> ${featured.type}</p>
      </div>`;
  }
}

// 🏙️ Group by City
function groupStationsByCity() {
  // TODO: Loop through stations and group under each city
}

// 🔄 Filter Toggle
function toggleFilteredStations() {
  // TODO: Add toggle logic to filter stations dynamically
}

// Load stations on page start
addStations(stations);
pickFeaturedStation();

// --- Dropdown City Filter Logic ---
function getUniqueCities(stations) {
  const cities = stations.map(station => station.location);
  return [...new Set(cities)];
}

function populateCityDropdown() {
  const cityFilter = document.getElementById('city-filter');
  if (!cityFilter) return;
  const cities = getUniqueCities(stations);
  cities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    cityFilter.appendChild(option);
  });
}

function filterStationsByCity(city) {
  const filtered = city === 'all' ? stations : stations.filter(station => station.location === city);
  // Clear current list
  document.getElementById('station-list').innerHTML = '';
  addStations(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
  populateCityDropdown();
  const cityFilter = document.getElementById('city-filter');
  if (cityFilter) {
    cityFilter.addEventListener('change', (e) => {
      filterStationsByCity(e.target.value);
    });
  }
});

