const generateTrip = (data, nearby) => {
  let graph = data;

  let nextIndex = 0;
  let path = [];
  let prevIndex = 0;
  let temp;

  for (let i = 0; i < graph.length - 1; i++) {
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

    path.push(nearby[nextIndex - 1]);

    for (let j = 0; j < graph.length; j++) {
      graph[j][prevIndex] = 'visited';
    }
  }
  return path;
};

export default generateTrip;
