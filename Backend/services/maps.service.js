const axios = require('axios');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = "AlzaSyG4YnaylkOjkWCbm6RP8-yb4soBR1ysnuG";
  const url = `https://maps.gomaps.pro/maps/api/geocode/json?key=${apiKey}&address=${encodeURIComponent(address)}`;
  
  try { 
      const response = await axios.get(url);
      console.log("Go Maps API Response:", JSON.stringify(response.data, null, 2)); // Log full API response

      if (response.data.status === 'OK' && response.data.results.length > 0) {
          const location = response.data.results[0].geometry.location;
          return {
              ltd: location.lat,
              lng: location.lng
          };
      } else {
          console.error(`Failed to get coordinates for: ${address}`);
          return null;  // Return null explicitly
      }
  } catch (error) {
      console.error('Error fetching coordinates:', error.response?.data || error.message);
      return null;
  }
};


module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error('Origin and destination are required');
  }

  const apiKey = "AlzaSyG4YnaylkOjkWCbm6RP8-yb4soBR1ysnuG";  // Make sure this is set in .env
  const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?destinations=${encodeURIComponent(destination)}&origins=${encodeURIComponent(origin)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.data.status === 'OK') {

      if(response.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
        throw new Error('No Routes Found');
      }

      return response.data.rows[0].elements[0];
    } else {
      throw new Error('Unable to find the distance and time');
      }
  } catch (error) {
    console.error(err);
    throw error;
  }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error('Input is required');
  }

  const apiKey = "AlzaSyG4YnaylkOjkWCbm6RP8-yb4soBR1ysnuG";  // Make sure this is set in .env

  const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.data.status === 'OK') {
      return response.data.predictions;
    } else {
      throw new Error('Unable to find the suggestions');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
  

 
  const captains = await captainModel.find({
    location: {
        $geoWithin: {
            $centerSphere: [ [ ltd, lng ], radius / 6371 ]
        }
    }
});

return captains;
};
