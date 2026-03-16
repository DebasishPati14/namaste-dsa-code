function printTriangle(size: number) {
  let patternStr = '';
  for (let i = 0; i <= size; i++) {
    for (let j = 0; j < i; j++) {
      patternStr += ' * ';
    }
    console.log(patternStr);
    patternStr = '';
  }
}

printTriangle(7);
