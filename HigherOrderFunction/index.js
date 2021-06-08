

const languages=["JavaScript","Python","PHP","C"]
function mapSohel(arr,fn){
    const newArray=[];

    for(let i=0; i<arr.length; i++){
        newArray.push(fn(arr[i]));
    }

    return newArray;
}


let myArray=mapSohel(languages,function(language){
    return language.length;
})

console.dir(myArray)
