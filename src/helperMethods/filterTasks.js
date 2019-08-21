export default function filterTasks(list, search) {
  search = search.trim();
  if (typeof search !== "string") {
    return null;
  }
  if (search.lenght === 0) {
    return list;
  }
  const regex = new RegExp(search, "i");
  return list.filter(item => regex.test(item.text));
}
