function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);  // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    ((Math.sin(dLat / 2) * Math.sin(dLat / 2)) +
    (Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)))) *
    (Math.sin(dLon / 2) * Math.sin(dLon / 2));
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function calcDistance(target, arrWithVals) {
  const { lat1, long1 } = target;
  const distances = arrWithVals.map((item) => {
    const { lat2, long2, id } = item;
    const distance = getDistanceFromLatLonInKm(lat1, long1, lat2, long2);
    return { id, distance };
  });
  // find the smallest value from the distance array
  // Math.max.apply(Math, distances);
  const distancesSorted = distances.sort((a, b) => a.distance > b.distance);
  const smallestDistance = distancesSorted[0];
  return smallestDistance.id;
}

export default calcDistance;
