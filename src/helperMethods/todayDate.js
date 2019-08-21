export default function todayDate() {
  const date = new Date().toLocaleDateString();
  const day = date[0] + date[1];
  const month = date[3] + date[4];
  const year = date[6] + date[7] + date[8] + date[9];
  return `${year}-${month}-${day}`;
}
