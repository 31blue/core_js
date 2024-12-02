/*⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ generic Type ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️*/
function sumFunc(value) {
    return value;
}
const a = sumFunc(10);
const b = sumFunc('hello');
const c = sumFunc(false);
/*

  T : Type
  U : Unknown or Unique
  K : Key
  V : Value
  E : Element
  R : Return


*/
function swapAtoB(a, b) {
    return [b, a];
}
swapAtoB(1, true); // [true,1]
function getLength(data) {
    return data.length;
}
const b1 = getLength([1, 2, 3]); // 3
const b2 = getLength('hi'); // 2
// const b3 = getLength(false) // 2
const b3 = getLength({ name: 'tiger', length: 3 }); // 2
export {};
