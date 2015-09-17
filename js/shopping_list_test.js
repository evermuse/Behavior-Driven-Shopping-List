var expect = chai.expect;
var should = chai.should();

var newShoppingListItem;

before(function() {

  newShoppingListItem = new ShoppingListItem('buy milk', 'whole milk or bust');

});

describe('ShoppingListItem', function() {

  it('should be a function', function() {

    ShoppingListItem.should.be.a('function');

  });

  it('should have properties: name, description, and isDone', function () {

    newShoppingListItem.should.have.property('name');
    newShoppingListItem.should.have.property('description');
    newShoppingListItem.should.have.property('isDone');

  });

  it('should have a constructor that accepts 2 arguments: name & description', function() {

    newShoppingListItem.name.should.equal('buy milk');
    newShoppingListItem.description.should.equal('whole milk or bust');

  });

});

//end ShoppingListItem property specs

describe('.check', function() {


  it('should have a method named check', function() {

    expect(newShoppingListItem.check).to.be.a('function');

  });

  it('calling check should set isDone to true', function() {

    newShoppingListItem.check();
    newShoppingListItem.isDone.should.equal(true);

  });

});

describe('.uncheck', function() {

  it('should have a method named uncheck', function() {

    expect(newShoppingListItem.uncheck).to.be.a('function');

  });

  it('calling uncheck should set isDone to false', function() {

    newShoppingListItem.uncheck();
    newShoppingListItem.isDone.should.equal(false);

  });

});

describe('.render', function() {

  it('should have a method named render', function() {

    expect(newShoppingListItem.render).to.be.a('function');

  });

  it('calling render should construct and return an html formatted string with <li> element', function() {

    newShoppingListItem.render();
    newShoppingListItem.render().should.be.a('string');
    expect(newShoppingListItem.render()).to.match(/<li/);

  });

});

//end ShoppingListItemm method specs

describe('ShoppingList', function() {

  var newShoppingList;

  // beforeEach(function () {

  //   newShoppingList = new ShoppingList(items);

  // });

  it('should be a function', function() {

    ShoppingList.should.be.a('function');

  });

  it('should have a constructor that initializes an empty array', function() {

    expect(newShoppingList.items).to.be.an('array');

  });

  it('should have a method named addItem', function() {

    newShoppingList.should.have.method('addItem');

  });

  it('should have a method named addItem', function() {

    newShoppingList.should.have.method('addItem');

  });

  it('should have a method named removeItem', function() {

    newShoppingList.should.have.method('removeItem');

  });

  it('should have a method named removeItem', function() {

    newShoppingList.should.have.method('removeItem');

  });

  it('should have a method named render', function() {

    newShoppingList.should.have.method('render');

  });

  it('calling render should construct and return an html formatted string', function() {

    newShoppingList.render.should.return.typeof('string'); // invoke

  });

});

