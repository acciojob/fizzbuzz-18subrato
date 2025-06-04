let n = prompt('Enter a Number');
n = parseInt(n);

let str = '';
for(let i=1;i<=n;i++){
	if(i %3 === 0 && i%5 === 0){
		str = str + '\n'+'FizzBuzz';
	} else if(i %5 ===0 ){
		str = str + '\n'+'Buzz';
	} else if(i %3 === 0){
		str = str + '\n'+'Fizz';
	} else {
		str = str + '\n'+i;
	}
}

alert(str);