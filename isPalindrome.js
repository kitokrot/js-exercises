const isPalindrome = str => {
  if (str.length < 2) {
    return true;
  }
  if (str.substr(0, 1) !== str.substr(str.length - 1, 1)) {
    return false;
  }
  return isPalindrome(str.substr(1, str.length - 2));
};

