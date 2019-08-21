import styles from "../map/colorSet.json";
export default function changeStyle(nightStyle) {
  let style = styles.lightStyle;
  if (nightStyle === true) {
    style = styles.nightStyle;
  }
  for (const property of style) {
    document.documentElement.style.setProperty(property.name, property.value);
  }
}
