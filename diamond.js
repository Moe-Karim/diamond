var num = prompt("Enter rows number:");
for (var i =0;i<num;i++){
    console.log(" ".repeat(num-i-1), "*".repeat((i*2)+1))
}
for (var i = num-2;i>-1;i--){
    console.log(" ".repeat(num-i-1),"*".repeat((i*2)+1))
}
