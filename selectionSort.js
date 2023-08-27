// array generation
//const array = Array(100)
//  .fill(null)
//  .map(() => Math.floor(Math.random() * 1000) - 500);

const arr = [
  224, 147, 285, -143, -333, -309, -380, 404, 20, 132, -16, -494, 312, 299, 344,
  -354, -198, -318, -148, -420, -119, 241, 211, -1, -480, -454, 92, -312, 374,
  -372, 120, -225, 352, -49, 89, -356, -281, 346, 412, -488, -439, -352, 279,
  -67, 346, 200, 36, -398, 408, 202, 18, -376, 99, -124, 485, -88, 266, -38,
  101, -423, -287, -278, 134, -171, 414, 122, -95, 197, 393, 295, 14, 391, 203,
  -104, -141, -54, 166, 456, 252, 133, 475, -290, 349, -380, 496, 181, 41, 272,
  154, -497, -221, -227, 440, 19, -266, 223, -307, -436, 70, -380,
];

// selection sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

selectionSort(arr);
console.log("selectionSort(arr): ", selectionSort(arr));
