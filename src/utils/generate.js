const generateTrip = (data, nearby, placeCost, tripCost) => {
  let graph = data;

  let nextIndex = 0;
  let path = [];
  let cost = placeCost;
  let prevIndex = 0;
  let temp;

  while (cost < 28800) {
    if (path.length === nearby.length) {
      break;
    }
    let arrayToWatch = graph[nextIndex];
    // find minimum value from array
    let minValue = arrayToWatch
      .filter((n) => n > 0 && n !== 'visited')
      .reduce((prev, curr) => (curr < prev ? curr : prev));

    // find index of the minValue
    let findNextIndex = graph[nextIndex].findIndex((e) => e === minValue);

    // swap value between prevIndex and nextIndex
    temp = nextIndex;
    prevIndex = temp;
    nextIndex = findNextIndex;
    if (cost + placeCost + minValue > tripCost) {
      break;
    }

    cost = cost + placeCost + minValue;
    path.push(nearby[nextIndex - 1]);

    for (let j = 0; j < graph.length; j++) {
      graph[j][prevIndex] = 'visited';
    }
  }
  return path;
};

export default generateTrip;
