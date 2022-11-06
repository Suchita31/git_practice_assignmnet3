function checkPrime(n){
let factor=0;
for(let i=0; i<=n; i++){
if(n%i==0){
factors++;
}
if(factors==2){
return true;
} return false;
} let answer =checkPrime(13);
if(answer == true){
console.log("prime");
}else{
console.log("Not Prime");
}