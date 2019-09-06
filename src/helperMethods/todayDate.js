export default function todayDate() {
  const date = new Date().toLocaleDateString();
  console.log(date);
  const newData = [];
  let i = 0;
  let name = "";
  for (let j = 0; j < 3; j++) {
    while (date[i] != "." && date.length > i) {
      name += date[i];
      i++;
    }
    i++;
    newData.push(name);
    name = "";
  }
  console.log(newData);
  const day = newData[2];
  const month = newData[1];
  const year = newData[0];
  return `${year}-${month}-${day}`;
}
