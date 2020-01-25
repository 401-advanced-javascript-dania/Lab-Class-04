'use strict';
const Products=require('../Products.js');
describe('Product Model',()=>{
    let products;
    beforeEach(()=>{
        products=new Products();
    })
    it ('can post() a new products',()=>{
        let obj={price:40 , weight:32, quantity_in_stock:44};
        return products.create(obj)
        .then(record =>{
            Object.keys(obj).forEach(key=>{
                expect(record[key].toEqual(obj[key]))
            })
        })
        .catch(erorr=> console.error('Erorr:something goes wrong',erorr));
    })
    it('can get ()a product ',()=>{
        let obj={price:40 , weight:32, quantity_in_stock:44};
        return products.create(obj)
        .then(record=>{
            return products.get(record._id)
             .then(product=>{
                 Object.keys(obj).forEach(key=>{
                     expect(product[0][key]).toEqual(obj[key])
                 })
             })
        })
        .catch(erorr=>console.error('Erorr:something goes wrong',erorr))
    })
    it('can update() a product',()=>{
     let obj={price:40 , weight:32, quantity_in_stock:44};
     return products.create(obj)
      .then(record=>{
          products.get(record)
          products.update(record._id,record)
          .then(product =>{
              Object.keys(obj).forEach( key =>{
                  expect(product[key]).toEqual(obj[key])
              })
          })
      })
      .catch(erorr=>console.error('Erorr:something goes wrong',erorr))

    })
    it ('can delete() a product',()=>{
     let obj={price:40 , weight:32, quantity_in_stock:44};
     return products.create(obj)
      .then(record=>{
          products.get(record)
          products.delete(record._id)
           .then(product=>{
               Object.keys(obj).forEach(key=>{
                   expect(product[key]).toEqual(obj[key]);
               })
           })
      })
      .catch(erorr=>console.error('Erorr:something goes wrong',erorr))

  
    })
})