for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] === a[j]) {
      console.log("Repeated number is", a[i]);
      break;
    }
  }
}
