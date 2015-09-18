function ShoppingListItem(name, description) {

  this.name = name;
  this.description = description;
  this.isDone = false;

}

ShoppingListItem.prototype.check = function() {

  this.isDone = true;

};

ShoppingListItem.prototype.uncheck = function() {

  this.isDone = false;

};

ShoppingListItem.prototype.render = function() {

  this.isDone = false;
  return '<li class="completed_' + this.isDone + '><span>' + this.name + '</span><span>' + this.description + '</span></li>';

};

