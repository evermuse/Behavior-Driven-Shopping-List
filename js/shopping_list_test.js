var expect = chai.expect;
var should = chai.should();

describe('ShoppingListItem', function() {

  var newShoppingListItem;

  beforeEach(function() {

    newShoppingListItem = new ShoppingListItem('buy milk', 'whole milk or bust', false);

  });

  it('should be a function', function() {

    ShoppingListItem.should.be.a('function');

  });

  it('should have properties: name, description, and isDone', function () {

    newShoppingListItem.should.have.property('name');
    newShoppingListItem.should.have.property('description');
    newShoppingListItem.should.have.property('isDone');

  });

  it('should have a constructor', function() {



  });

  it('should have a method named check', function() {


  });

});

