function myMap(arr, callback) {
	var maparr = [];
	for (var i = 0; i<arr.length; i++) {
		maparr.push(callback(arr[i],i,arr));
	}
	return maparr;

//  CODE INSIDE HERE   //

}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/

// export this function (you can ignore this for now)
module.exports = myMap;
