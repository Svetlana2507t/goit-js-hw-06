function slugify(title) {
  //Step 1 - convert "title" to Lower Case:
  const lowCaseTitle = title.toLowerCase();
  //Step 2 - split the string:
  const words = lowCaseTitle.split(" ");
  //Step 3 - join "words" with "-"
  const slug = words.join("-");
  return slug;

  //return title.toLowerCase().split(' ').join('-');
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
