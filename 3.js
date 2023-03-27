const reverse = (str) =>{
    const iter = (counter, result) =>{
        if(str.length == result.length){
            return result;
        }        
        return iter(counter - 1, result + str[counter]);
    }
    return iter(str.length-1, ''); 
}
console.log('Reverse: ' + reverse('hello'));