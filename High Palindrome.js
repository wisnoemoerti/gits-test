function highestPalindrome(string, k) {
    if (isPalindrome(string)) {
      return string; // Jika string sudah palindrom, kembalikan string tersebut
    }
  
    if (k === 0) {
      return -1; // Jika k = 0, tidak mungkin membentuk palindrom, kembalikan -1
    }
  
    const firstChar = string[0];
    const lastChar = string[string.length - 1];
  
    if (firstChar === lastChar) {
      const palindrome = highestPalindrome(string.slice(1, string.length - 1), k); // Cari palindrom di substring di tengahnya
      return firstChar + palindrome + lastChar; // Sambungkan karakter pertama, palindrom tengah, dan karakter terakhir
    }
  
    const palindrome1 = highestPalindrome(string.slice(0, -1), k - 1); // Ganti karakter terakhir
    const palindrome2 = highestPalindrome(string.slice(1), k - 1); // Ganti karakter pertama
  
    if (palindrome1 === -1 && palindrome2 === -1) {
      return -1; // Jika tidak mungkin membentuk palindrom dengan mengganti karakter, kembalikan -1
    } else if (palindrome1 === -1) {
      return lastChar + palindrome2; // Jika palindrome1 tidak mungkin, sambungkan karakter terakhir dan palindrom2
    } else if (palindrome2 === -1) {
      return palindrome1 + firstChar; // Jika palindrome2 tidak mungkin, sambungkan palindrom1 dan karakter pertama
    }
  
    const palindrome1Value = parseInt(palindrome1);
    const palindrome2Value = parseInt(palindrome2);
  
    return palindrome1Value > palindrome2Value ? palindrome1 + firstChar : lastChar + palindrome2; // Kembalikan palindrom dengan nilai tertinggi
  }
  
  function isPalindrome(string) {
    const length = string.length;
    for (let i = 0; i < length / 2; i++) {
      if (string[i] !== string[length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  // Contoh penggunaan
  const string = '3943';
  const k = 1;
  console.log(highestPalindrome(string, k));