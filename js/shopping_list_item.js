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

ShoppingListItem.prototype.render = function(index) {

  var listItem = document.createElement('li');
  listItem.id = 'item_' + index;
  listItem.className = 'completed_' + this.isDone.toString();

  var spanName = document.createElement('span');
  spanName.innerHTML = this.name + '&nbsp; - &nbsp;';
  listItem.appendChild(spanName);

  var spanDescription = document.createElement('span');
  spanDescription.innerHTML = this.description + '&nbsp;';
  listItem.appendChild(spanDescription);

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'checkbox_' + index;
  checkbox.className = 'checkbox';
  checkbox.dataset.listId = index;
  checkbox.addEventListener('change', changeCheckedStatus);
  listItem.appendChild(checkbox);

  var deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'deleteButton';
  deleteButton.onClick = removeItemButtonClicked(index);
  deleteButton.innerHTML = 'x';
  listItem.appendChild(deleteButton);

  return listItem.outerHTML;

  //return '<li class="completed_' + this.isDone + '"><span>' + this.name + '</span>&nbsp;-&nbsp;<span>' + this.description + '</span>' + '&nbsp;<input type="checkbox" onchange="changeCheckedStatus(' + this.checked + ')"></li>';

};

