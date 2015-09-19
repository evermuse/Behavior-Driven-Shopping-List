var expect = chai.expect;
var should = chai.should();

var newShoppingListItem1;
var newShoppingListItem2;

before(function() {

  newShoppingListItem1 = new ShoppingListItem('milk', 'whole milk or bust');
  newShoppingListItem2 = new ShoppingListItem('apples', 'gala please');

});

describe('ShoppingListItem', function() {

  it('should be a function', function() {

    ShoppingListItem.should.be.a('function');

  });

  it('should have properties: name, description, and isDone', function () {

    newShoppingListItem1.should.have.property('name');
    newShoppingListItem1.should.have.property('description');
    newShoppingListItem1.should.have.property('isDone');

  });

  it('should have a constructor that accepts 2 arguments: name & description', function() {

    newShoppingListItem1.name.should.equal('milk');
    newShoppingListItem1.description.should.equal('whole milk or bust');

  });

});

//end ShoppingListItem property specs

describe('.check', function() {

  it('should have a method named check', function() {

    expect(newShoppingListItem1.check).to.be.a('function');

  });

  it('calling check should set isDone to true', function() {

    newShoppingListItem1.check();
    newShoppingListItem1.isDone.should.equal(true);

  });

});

describe('.uncheck', function() {

  it('should have a method named uncheck', function() {

    expect(newShoppingListItem1.uncheck).to.be.a('function');

  });

  it('calling uncheck should set isDone to false', function() {

    newShoppingListItem1.uncheck();
    newShoppingListItem1.isDone.should.equal(false);

  });

});

describe('.render', function() {

  it('should have a method named render', function() {

    expect(newShoppingListItem1.render).to.be.a('function');

  });

  it('calling render should construct and return an html formatted string with a <li> element and uncompleted task', function() {

    newShoppingListItem1.render();
    newShoppingListItem1.render().should.be.a('string');
    expect(newShoppingListItem1.render()).to.match(/<li class="completed_false>/);

  });

});

//end ShoppingListItemm method specs

describe('ShoppingList', function() {

  var newShoppingList;

  beforeEach(function () {

    newShoppingList = new ShoppingList('milk', 'bread', 'apples');

  });

  it('should be a function', function() {

    ShoppingList.should.be.a('function');

  });

  it('should have a constructor that initializes an empty array', function() {

    expect(newShoppingList.items).to.be.an('array');

  });

});

//end ShoppingList property specs

describe('.addItem', function() {

  var newShoppingList;
  var notListItem;

  beforeEach(function() {

    notListItem = 'Bob';
    newShoppingList = new ShoppingList();

  });

  it('should have a method named addItem', function() {

    expect(newShoppingList.addItem).to.be.a('function');

  });

  it('addItem should accept a single ShoppingListItem and add it to the array', function() {

    newShoppingList.addItem(newShoppingListItem1);
    expect(newShoppingList.items[0].name).to.deep.equal('milk');

  });

  it('should throw an error if item being entered is not a ShoppingListItem', function() {

    expect(newShoppingList.addItem).to.throw(Error);

  });

});

describe('.removeItem', function() {

  var newShoppingList;
  var notListItem;

  beforeEach(function() {

    notListItem = 'Bob';
    newShoppingList = new ShoppingList();
    newShoppingList.addItem(newShoppingListItem1);
    newShoppingList.addItem(newShoppingListItem2);

  });

  it('should have a method named removeItem', function() {

    expect(newShoppingList.removeItem).to.be.a('function');

  });

  it('invoking .remove on a ListItem should remove the item', function() {

    newShoppingList.removeItem(newShoppingListItem1);
    expect(newShoppingList.items[0].name).to.deep.equal('apples');

  });

  it('invoking .remove while undefined should remove the last item from the list', function() {

    newShoppingList.removeItem();

    console.log(newShoppingList.items);
    expect(newShoppingList.items.length).to.equal(1);

  });

  it('should throw an error if item being removed is not on the ShoppingList', function() {

    expect(newShoppingList.removeItem).to.throw(Error);

  });

});

describe('.render', function() {

  var newShoppingList;

  beforeEach(function() {

    newShoppingList = new ShoppingList();
    newShoppingList.addItem(newShoppingListItem1);
    newShoppingList.addItem(newShoppingListItem2);

  });

  it('should have a method named render', function() {

    expect(newShoppingList.render).to.be.a('function');

  });

  it('calling render should construct and return an html formatted string', function() {

    newShoppingList.render();
    expect(newShoppingList.render()).to.be.a('string');

  });

});

//end ShoppingList method specs