'use strict';

const Validator = require('../validator.js');

let str = 'yes';
 let num = 1;
 let arr = ['a'];
 let obj = {x:'y'};
 let func = () => {};
 let bool = false;
 let validatorClass=new Validator(str,num,arr,obj,func,bool);
describe('validator module performs basic validation of', () => {
  // TODO: Make this series of tests less repetitive ... DRY it out
  it('strings', () => {
    let arrayOfTypes=[num,arr,obj,func,bool];
    expect(validatorClass.isString(str)).toBeTruthy();
    arrayOfTypes.forEach(val=>{
      expect(validatorClass.isString(val)).toBeFalsy();
    })
   
  });

  it('numbers', () => {
    let arrayOfTypes=[str,arr,obj,func,bool];
    expect(validatorClass.isNumber(num)).toBeTruthy();
    arrayOfTypes.forEach(val=>{
      expect(validatorClass.isNumber(val)).toBeFalsy();
    })
  });

  it('arrays', () => {
    let arrayOfTypes=[str,num,obj,func,bool];
    expect(validatorClass.isArray(arr)).toBeTruthy();
    arrayOfTypes.forEach(val=>{
      expect(validatorClass.isArray(val)).toBeFalsy();
    })
  });

  it('objects', () => {
    let arrayOfTypes=[str,num,func,bool];
    expect(validatorClass.isObject(obj)).toBeTruthy();
    arrayOfTypes.forEach(val=>{
      expect(validatorClass.isObject(val)).toBeFalsy();
    })
  });

  it('booleans', () => {
    let arrayOfTypes=[str,num,obj,func,arr];
    expect(validatorClass.isBoolean(bool)).toBeTruthy();
    arrayOfTypes.forEach(val=>{
      expect(validatorClass.isBoolean(val)).toBeFalsy();
    })
  });

  it('functions', () => {
    let arrayOfTypes=[str,num,obj,arr,bool];
    expect(validatorClass.isFunction(func)).toBeTruthy();
    arrayOfTypes.forEach(val=>{
      expect(validatorClass.isFunction(val)).toBeFalsy();
    })
  });

});

describe('validator module performs complex validations', () => {
    const fred={
  firstName: "Fred",
  lastName: "Sample",
  hair: {
    type: "wavy",
    color: "brown"
  },
  favoriteFoods: ["pizza","cupcakes","salmon"],
  married: true,
  kids: 3
}
  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(validatorClass.isItHasAKeys(fred)).toBeTruthy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(validatorClass.isTheTypeOfValuesMatches(fred)).toBeTruthy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
  expect(validatorClass.isThereArray(fred)).toBeFalsy(); 
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    const fred={
      firstName: "Fred",
      lastName: "Sample",
      hair: {
        type: "wavy",
        color: "brown"
      },
      favoriteFoods: ["pizza","cupcakes","salmon"],
      married: true,
      kids: 3
    }
    expect(validatorClass.isTheValueOfTheArrrayIsYesOrNo(fred.favoriteFoods)).toBeTruthy() ;
  });

  // TODO: Cover so, so many more cases
})

