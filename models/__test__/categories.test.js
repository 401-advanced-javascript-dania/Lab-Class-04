
const Categories = require('../categories/categories.js');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  it('can post() a new category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
  it('can update() a food item',()=>{
    let obj={name:'Test Category'};
    return categories.create(obj)
    .then(record=>{
      categories.get(record._id)
      categories.update(record._id,record)
        .then(category=>{
            Object.keys(obj).forEach(key=>{
                expect(category[key]).toEqual(obj[key])
            })
        })

    })
    .catch(erorr=>console.error('Erorr:something goes wrong',erorr))

})
it('can delete() a food item ',()=>{
    let obj={name:'Test Category'};
    return categories.create(obj)
    .then(record=>{
      categories.get(record._id)
      categories.delete(record._id)
        .then(category=>{
            Object.keys(obj).forEach(key=>{
                expect(category[key]).toEqual(obj[key])

            })
        })

    })  
    .catch(erorr=>console.error('Erorr:something goes wrong',erorr))

})
});