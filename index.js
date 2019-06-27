'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: A function that takes in a value and returns the value unchanged. 
 * 
 * @param {any datatype} value: The collection over which to iterate.
 * @return{any datatype} value: Returns value unchanged
 * 
 */

 function identity(value){
    return value
};

module.exports.identity = identity;


/**
 * typeOf: A function that is designed to take in a value and return a string of what type of datatype the value that is
 * @param {any datatype} value: The value to see what type of datatype.
 * @return{string}: Returns a string of the type of datatype of the value that was paseed
 */
function typeOf(value){
    if(Array.isArray(value)){
        return "array"
    } else if( value === null){
        return "null"
    } else{
        return typeof value
    }
};

module.exports.typeOf = typeOf;



/**
 * first: This function is designed to return the first <number> item in the array 
 * but if its not array return [] and if not number argument is given or it's not an
 * number return first element in array.
 * 
 * @param {collection} array: The array where we pull an elements from
 * @param {number} number: The number tells how many we want to pull from the front of the array
 * @return: Returns first <number> of items in array if number is given and if collection is an array || Returns an [] if collection is not an 
 * array || Returns first element in the array if <number> is not given
 */


function first(array,number){
   if (!Array.isArray(array) || number < 0 ){
       return [];
     }
     if (isNaN(number) || number === undefined){
        return array[0]
    } else { 
            return array.slice(0,number)
}
    
};

module.exports.first = first;


 
 /**
  * last: This function is designed to return the last <number> item in the array 
 * but if it's not an array return [], and if no number argument is given or it's not an
 * number return last element in array.
 * 
 * @param {collection} array: The array where we pull an elements from
 * @param {number} number: The number tells how many we want to pull from the front of the array
 * @return: Returns last <number> of items in array if number is given and if collection is an array || Returns an [] if collection is not an 
 * array || Returns last element in the array if <number> is not given
 */
 

function last (array,number){
   
    if (!Array.isArray(array) || number < 0){
        return [];
    }
    if (typeof number !== "number"){
        return array[array.length-1]
    } 
        else { return array.slice(-number);
        }
};
module.exports.last = last;


 /**
  * indexOf: The function is designed to loop through an array and return the index
 * of the first element that is equal to value but if value is not in the array the function it will return -1.
 * 
 * @param {Array} array: A loop runs through the array
 * @param {Any Datatype} value: The value that is being compared to all the elements in the array
 * @return: Returns index of the postion when the first occruence when <value> equals element in the array || Returns -1 if value is not in array
 */

function indexOf(array, value){
    for(let i = 0; i <= array.length - 1; i++){
        if(array[i] === value) { 
            return i;
        }
    }
    return -1;
} ;
module.exports.indexOf = indexOf;

/** 
 * contains: This function is designed to return a boolean of true if the array
 * contains any of the elements that are = to the value and return false if not in array
  * 
* @param {Array} array: A loop runs through the array
* @param {Any datatype} value: The value that is being compared to all the elements in the array
* @return: Returns a boolean of true if array contains any elements that are equal to value || Returns false if no element is equal to array
*/
function contains(array, value){
   for( var i =0; i < array.length; i++){
       if (value === array[i]) {
           return true 
       }
   }
   return false;
}
module.exports.contains = contains;

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 * (No return statement in function)
 */
function each(collection,func){
if(Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
    func(collection[i], i, collection);
    }
} else if (typeOf(collection) === "object" ){
    for(var key in collection){
    func(collection[key], key, collection)
    }
    
   }
}

module.exports.each = each;

/**
 * unique: Designed to loop over a array and return a new array of all elements
 * in that array but with all duplicated elements removed.
 * 
 * @param {Array} array: The array over which to iterate.
 * @return: Returns a new array with all duplicates removed from <array>
 */
function unique(array){
    debugger;
    let result = [];
        for (let i = 0; i < array.length; i++ ){
              if(indexOf(result, array[i]) === - 1) {
                     result.push(array[i]);
    }
}
    return result;
};
module.exports.unique = unique;

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

/**
 * filter: Designed to loop over an array and apply function to each element in array and if true save element to a new array
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the array
 * @return: Returns a new array of elements from <array> if function ran on each of the elements are true
 */

 function filter(array, func){
    let result =[];
    each(array, function(e, i, a){
        if(func(e,i,a)){
            result.push(e)
        }
    
    })
    return result;
 }
 module.exports.filter = filter;


/**
 * reject: Designed to loop over an array and apply function to each element in array and if false save element to a new array
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the array
 * @return:Returns a new array of elements from <array> if function ran on each of the elements are false
 */
function reject(array, func){
    var newArray = filter(array, function(e, i, array){
        return !func(e, i , array);
    })
    
    return newArray;
}
module.exports.reject = reject;


/**
 * partition: Designed to itterate over an array of elements and call a function on those elements and save them in one of 
 * two new arrays depending if the return is true or false for each element.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the array
 * @return: An array of two arrays, first array saves all values true values and second array saves all false values
 */ 

function partition(array, func){
    var myArrayTrue = [[], []];
   each(array, function(e, key, a){
        if(func(e, key ,a)){ 
            myArrayTrue[0].push(e);
            
        }
        });
    each(array, function(e, key, a){
            if(func(e, key, a) === false){
            myArrayTrue[1].push(e);
        }
        
        });
           return myArrayTrue
}
module.exports.partition = partition;


/**
 * map: Designed to run a loop on array or for in loop  with calling each function on each element 
 * in loop and saving the return value into a new array
 * 
 * @param {Collection} collection: The array or object which to iterate.
 * @param {Function} func: The Function to be applied to each value in the array
 * @return: Returns a new array of elements have been saved after function has been applied from orginal collection
 */
function map(collection, func){
    var returnArray =[];
    each(collection, function(e, i, collection){
       returnArray.push(func(e, i, collection))
    })
    return returnArray;
}
module.exports.map = map;

/**
 * pluck: Designed to return values asssociated with the key of the argument given and saved into 
 * a new array and to return that array of values
 * 
 * @param {Array} array: The array over which to iterate
 * @param {Property} prop: key to access value in object
 * @return: Returns an new array of values assioiated with <prop>
 */
function pluck(array, prop){
    return map(array, function(element, i, array){
   return element[prop]    
        
    })
    
};
module.exports.pluck = pluck;



/**
 * every: Designed to return a boolean, so it will return true if every element that's being called by function is true, 
 * and returns false if one or more elements being called by function is false. If function isn't given and every element
 * is truthy return true otherwise false.
 * 
 * @param {Array or Object} collection: The array over which to iterate.
 * @param {Function} function: Function to be applied to each element within loop
 */
function every(collection, func){
var result = true;
each(collection, function(element, i, collection){
        if(func === undefined){
      if(!element)  {
          result = false;
      }
    } else{ 
        if(!func(element, i, collection)){
        result = false
        }
    }
})
// return result
return result

    

    
    
}
module.exports.every = every;


/**
 * some: Designed to return true if one of the elements in the collection
 * is true and return false if all elements being called by function return false. 
 * And if no function is provided return true if one element is truthy, otherwise return false. 
 * 
 * @param {Array or Object} collection: The array over which to iterate.
 * @param {Function} func: Function being applied to all elements in collection
 * @return: Returns true if one element in the collection that is called by function is true and false if none of elements called bu function is true
 */
function some(collection, func){

var result = false;
each(collection, function(element, i, collection){
        if(func === undefined){
            if(element)  {
            result = true;
            }
        } else{ 
            if(func(element, i, collection)){
            result = true
            }
         }
})
return result

}
module.exports.some = some;

/**
 * reduce: Designed to itterate of array and call a functions on each element
 * in array and accumalte all of return values starting with the seed provided or first element in array if not provided
 * for each return in that loop itteration.
 * 
 *@param {Array} array: The array over which to iterate.
 *@param {Function} func: Function being applied to all elements in collection
 *@param {Accumaltor} seed: Where to start for element in function
 *@return: Returns seed at last return 
 */
 
function reduce(array, func, seed){
    if(seed === undefined){
        seed = array[0];
        for(var i = 1; i < array.length; i++){
           seed = func(seed, array[i], i)
        }
        return seed
    }
    if((seed !== undefined)){
        seed = seed;
       each(array, function(element, index, array){
          seed = func(seed, element, index)
       }) 
    }
       return seed;
}
         
module.exports.reduce = reduce;     


/**
 * extend: Designed to copy poroperties from object 2 or more objects to object 1 and returns updated first object 
 * 
 *@param {Object} object1:  First object to add properties to
 *@param {Object} ...args: Possible objects to copy properties from to Object1
 *returns: Returns updated object1
 */
 
function extend(object1, ...args){
    console.log(object1); 
    console.log(args);
    each(args, function(object, index, collection){
        each(object, function(value, key, object){
            object1[key] = value
            
        })
    })
    return object1;
}
                
module.exports.extend = extend;
      



