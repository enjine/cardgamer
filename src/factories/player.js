export default function playerFactory(number, name, hand = [], victories = []) {
  return { number, name, hand, victories: 0 };
}
