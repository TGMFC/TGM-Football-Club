// Example fixtures data (you can expand or edit this easily)
const fixtures = [
  { date: "24 Aug 2025", opponent: "Benoni United", venue: "Home", time: "08:30" },
  { date: "31 Aug 2025", opponent: "Boksburg FC", venue: "Away", time: "09:15" },
  { date: "07 Sep 2025", opponent: "Kempton Stars", venue: "Home", time: "10:00" },
  { date: "14 Sep 2025", opponent: "Brakpan Rovers", venue: "Away", time: "08:45" }
];

// Function to load fixtures into the page
function loadFixtures() {
  const container = document.getElementById("fixtures-list");

  if (!container) return;

  fixtures.forEach(fix => {
    const item = document.createElement("div");
    item.classList.add("fixture-item");

    item.innerHTML = `
      <p><strong>${fix.date}</strong> | ${fix.time}</p>
      <p>${fix.opponent} - <em>${fix.venue}</em></p>
    `;

    container.appendChild(item);
  });
}

// Run once page is loaded
document.addEventListener("DOMContentLoaded", loadFixtures);


