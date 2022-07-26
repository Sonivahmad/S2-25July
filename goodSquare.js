function square(arr){
    let newArray=arr.map(function(element){
    return element**2
    })
    return newArray
  }
  console.log(square([2, 3, 6]))
  exports.square = square