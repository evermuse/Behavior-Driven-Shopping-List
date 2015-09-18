function ShoppingList(items) {

  this.items = [];

}

ShoppingList.prototype.addItem =  function(ListItem) {

  if (ListItem instanceof ShoppingListItem) {

    this.items.push(ListItem);

  } else {

    throw new Error('ListItem is not an instanceof of ShoppingListItem');

  }

};

ShoppingList.prototype.removeItem = function(ItemToRemove) {

  var itemIndex = this.items.indexOf(ItemToRemove);

  if (itemIndex !== -1) {

    this.items.splice(itemIndex, 1);

  } else if (ItemToRemove === undefined) {

    items.pop();

  } else {

    throw new Error('Item is not on the list');

  }

};

ShoppingList.prototype.render = function() {

  var fullList = [];

  for (var i = 0; i < this.items.length; i++) {

    fullList.push(this.items[i].render());

  }

  fullList.join(',');

  console.log(fullList);

  return '<ul>' + fullList + '</ul>';

};