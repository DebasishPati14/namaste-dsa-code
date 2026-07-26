// Draw upside down triangle
/*
 *	*	*	*	*
 *	*	*	*
 *	*	*
 *	*
 *
 

    #	#	#	#	#
        #   #	#
            #
 */
function drawUpsideDownRightAngledTriangle(length: number) {
  let printStr = '';
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      printStr += '*\t';
    }
    console.log(printStr);
    printStr = '';
  }
}

function drawUpsideDownTriangle(length: number) {
  let printStr = '';
  for (let i = 0; i < length / 2; i++) {
    for (let j = 0; j < i; j++) {
      printStr += '\t';
    }
    for (let j = i; j < length - i; j++) {
      printStr += '#\t';
    }
    console.log(printStr);
    printStr = '';
  }
}
drawUpsideDownTriangle(7);
console.log('Done ');
drawUpsideDownRightAngledTriangle(5);
