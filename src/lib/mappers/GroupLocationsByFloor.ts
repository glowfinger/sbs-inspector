export default function groupLocationsByFloor(locations) {
  const rows = [];
  for (let i = 0; i < locations.length; i++) {
    const location = locations[i];

    const foundIndex = rows.findIndex((row) => {
      return row.floor === location.floor
    });

    if (foundIndex === -1) {
      let floor = {
        floor: location.floor,
        locations: [location]

      }
      rows.push(floor)
    } else {
      rows[foundIndex].locations.push(location)
    }

  }
  return rows.sort(floorSort)
}

function floorSort(a, b) {
  return a.floor - b.floor;
}
