import React, { Component } from 'react';
import './App.css';
const data1 = [
  {
    id: 1,
    name: 'a',
    content: {
      level: 1,
      title: 'content a'
    }
  },
  {
    id: 2,
    name: 'b',
    content: {
      level: 2,
      title: 'content b'
    }
  },
  {
    id: 3,
    name: 'c',
    content: {
      level: 3,
      title: 'content c'
    }
  }
]
const data2 = [
  {
    id: 1,
    name: 'd data2',
    content: {
      level: 1,
      title: 'content d data2'
    }
  },
  {
    id: 2,
    name: 'e data2',
    content: {
      level: 2,
      title: 'content e data2'
    }
  },
]
class App extends Component {
  constructor() {
    super();
    this.state = { width: 0 };
  }

  componentWillMount = () => {
    this.test();
  }

  test = () => {
    let testdata = [];

    let name_data1 = [];
    let name_data2 = [];

    data1.map(item1 => {
      name_data1.push(item1.name);
    }
    )
    data2.map(item2 => {
      name_data2.push(item2.name);
    }
    )

    let try_concat = [];
    console.log(try_concat.concat(name_data1, name_data2));
    // concat :The concat() method is used to join two or more arrays.
    // This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.

    // let try_copyWithin = name_data1.copyWithin(1, 0, 1);
    // console.log(try_copyWithin);
    //=====>> copyWithin: The copyWithin() method copies array elements within the array, to and from specified positions.
    // Syntax array.copyWithin(target, start, end)


    //=====>> every: The every() method checks if all elements in an array pass a test (provided as a function).

    // The every() method executes the function once for each element present in the array:

    // If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
    // If no false occur, every() returns true
    // Note: every() does not execute the function for array elements without values.

    // Note: every() does not change the original array

    // let try_fill=name_data1.fill('e',1,3);
    // console.log(try_fill);
    //=====>> fill: The fill() method fills all the elements in an array with a static value.

    // It is possible to specify the index for starting and ending fill(). By default it changes the whole array.
    // Syntax array.fill(value, start, end)


    // =====>> The filter() method creates an array filled with all array elements that pass a test (provided as a function).

    // Note: filter() does not execute the function for array elements without values.

    // Note: filter() does not change the original array.
    // Syntax array.filter(function(currentValue, index, arr), thisValue)


    //   =====>>  The find() method returns the value of the first element in an array that pass a test (provided as a function).

    // The find() method executes the function once for each element present in the array:

    // If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
    // Otherwise it returns undefined
    // Note: find() does not execute the function for empty arrays.

    // Note: find() does not change the original array.


    //     =====>>  The includes() method determines whether a string contains the characters of a specified string.

    // This method returns true if the string contains the characters, and false if not.

    // Note: The includes() method is case sensitive.


    // let try_reverse = name_data1.reverse();
    // console.log(try_reverse);
    // =====>>  The reverse() method reverses the order of the elements in an array.
    // Syntax array.reverse()


    //     let try_shift = name_data1.shift();
    //     console.log(try_shift);
    //     console.log(name_data1);
    //     =====>>  The shift() method removes the first item of an array.

    // Note: This method changes the length of the array.

    // Note: The return value of the shift method is the removed item.

    // Tip: To remove the last item of an array, use the pop() method.


  }

  render() {
    return (
      <div>
        <div>aaa</div>
      </div>
    );
  }
}

export default App;
