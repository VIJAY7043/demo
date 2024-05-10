const indivualarr = ["fruit","vegetable","drinks"]
  console.log("names :", ...indivualarr)

  const indivualarr2 = ["fruit", "vegetable", "drinks"];
console.log("names :", ...indivualarr2);


function listit(...all){
    console.log(all)
}
listit("fruits","vegetable","drinks","cosmetics")