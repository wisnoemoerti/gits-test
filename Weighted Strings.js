
function weightedStrings(string, queries) {
  const weights = {}; // Objek untuk menyimpan bobot karakter/substring

  // Membangun objek bobot
  for (let i = 0; i < string.length; i++) {
    let weight = 0;
    let j = i;
    while (j < string.length && string[j] === string[i]) {
      weight += string.charCodeAt(j) - 'a'.charCodeAt() + 1;
      weights[string.slice(i, j + 1)] = weight;
      j++;
    }
  }

  // Memeriksa status queries
  const results = [];
  for (let query of queries) {
    if (Object.values(weights).includes(query)) {
      results.push("Yes");
    } else {
      results.push("No");
    }
  }

  return results;
}

// Contoh penggunaan
const string = 'abbcccd';
const queries = [1, 3, 9, 8];
console.log(weightedStrings(string, queries));