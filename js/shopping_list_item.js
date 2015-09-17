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

  return '<li class="completedIsDone"><span>[name]</span> <span>[description]</span></li>. example: <li class="completed_false"><span>name</span> <span>description</span></li>';

};

