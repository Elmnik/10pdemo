// Define destination codes
const cityCodes = {
  "New York": "N54",
  "Miami": "MB9",
  "Los Angeles": "L32"
};

// Flight path from Chicago to all airports above
const flightPaths = {
  // From Chicago to New York: East, North, East
  "New York": {
    directionFromChicago: "B", // leaves Chicago to the east
    path: [3, 2, 3, 1]
  },
  // From Chicago to Miami:South, South, East
  "Miami": {
    directionFromChicago: "C", // leaves Chicago to the south
    path: [2, 2, 2, 3]
  },
  // From Chicago to Los Angeles: West, East, South
  "Los Angeles": {
    directionFromChicago: "D", // leaves Chicago to the west
    path: [4, 4, 3, 2]
  }
};

//flight instruction
function generateFlightPath(destination) {
  const { directionFromChicago, path } = flightPaths[destination];
  const cityCode = cityCodes[destination];
  let instruction = "X";                // Start with X (begin)
  instruction += directionFromChicago;  // Add direction A/B/C/D from Chicago
  instruction += path.join("");         // Add path codes (1=north, 2=south, etc.)

  // If city starts with L, repeat code twice
  if (destination.startsWith("L")) {
    instruction += cityCode + cityCode;
  } else {
    instruction += cityCode;
  }

  instruction += "Y"; // End with Y (stop)
  return instruction;
}

// Generate answers
const losAngelesFlight = generateFlightPath("Los Angeles");
const miamiFlight = generateFlightPath("Miami");

// Output the results
console.log("Los Angeles =", losAngelesFlight); // XD4432L32L32Y
console.log("Miami =", miamiFlight);            // XC2223MB9Y   

