export function makeRanges(numbers: number[]): string[] {
  // Early return if the array is empty.
  if (numbers.length === 0) return [];
  // Create a new array to store the ranges.
  const ranges: string[] = [];
  // Create a variable to store the current range.
  let currentRange: number[] = [];
  // Loop over numbers array.
  // If next number is one more than current number, 
  //    add current num to range.Continue the loop.
  // Add current num to currentRange. 
  // Format currentRange to a string and push to ranges array.
  // Reset currentRange to empty array.
  for (let num = 0; num < numbers.length; num++) {
    const nextNum = numbers[ num + 1 ];
    const currentNum = numbers[ num ];
    if (currentNum + 1 === nextNum) { 
      currentRange.push(currentNum);
      continue;
    }
    currentRange.push(currentNum);
    ranges.push(formatRange(currentRange))
    currentRange = [];
  }
  return ranges;
}

const formatRange = (currentRange: number[]): string => { 
  if (currentRange.length === 1) return currentRange[0].toString();
  return `${currentRange[0]}-${currentRange[currentRange.length - 1]}`;
};