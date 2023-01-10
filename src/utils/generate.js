const generateTrip = (data, nearby) => {
  let graph = data;

  let nextIndex = 0;
  let path = [];
  let cost = 3600;
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
    if (cost + 3600 + minValue > 28800) {
      break;
    }

    cost = cost + 1800 + minValue;
    path.push(nearby[nextIndex - 1]);

    for (let j = 0; j < graph.length; j++) {
      graph[j][prevIndex] = 'visited';
    }
  }
  console.log(cost);
  return path;
};

export default generateTrip;
