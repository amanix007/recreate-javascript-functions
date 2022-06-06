//  function lengthOfLongestSubstring(){
//   let str = "abcabcbb";
//   let pointer_A = 0;
//   let pointer_B = 0;
//   let max = 0;
// let charset = new Set();
//    while(str.length > pointer_B){
//      if(!charset.has(str.charAt(pointer_B))){
//        charset.add(str.charAt(pointer_B));
//        pointer_B++;
//        max = Math.max(charset.size, max);
       
//      }else{
//        charset.delete(str.charAt(pointer_A));
//        pointer_A++;
//      }
//    }
//   console.log("lengthOfLongestSubstring", charset, pointer_A, pointer_B)
// }
function lengthOfLongestSubstring() {
    let str = "abcabcbb";
    let a_pointer = 0;
    let b_pointer = 0;
    let max = 0;

    let charSet = new Set();

    while (b_pointer < str.length) {
      
        if (!charSet.has(str.charAt(b_pointer))) {
            charSet.add(str.charAt(b_pointer));
            b_pointer++;
            max = Math.max(charSet.size, max);
        } else {
            charSet.delete(str.charAt(a_pointer));
            a_pointer++;
        }
      console.log(charSet)
    }
  console.log("lengthOfLongestSubstring",max, charSet, a_pointer, b_pointer, "lengthOfLongestSubstring")

    return max;

}
module.exports = {
  lengthOfLongestSubstring
}

//test
