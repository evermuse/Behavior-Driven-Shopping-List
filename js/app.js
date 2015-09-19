var theShoppingList = new ShoppingList();
var itemsToDisplay = theShoppingList.render();
document.querySelector('#output').innerHTML = itemsToDisplay;

document.querySelector('#add_shopping_list_item_button').addEventListener('click', add_to_shopping_list);

function add_to_shopping_list() {

  var newItemName = document.querySelector('#newItemName').value;
  var newItemDescription = document.querySelector('#newItemDescription').value;

  var new_shopping_list_item = new ShoppingListItem(newItemName, newItemDescription);

  theShoppingList.addItem(new_shopping_list_item);

  console.log(theShoppingList.render());
  document.querySelector('#output').innerHTML = theShoppingList.render();

}

var checkboxActivity = document.querySelectorAll('.checkbox');

function changeCheckedStatus(idx, checkbox) {

  var thisItem = theShoppingList.items[idx];
  var isChecked = checkbox.checked;

  var listElementClass = checkbox.parentElement;

  if (isChecked) {
    thisItem.check();
    listElementClass.className = 'completed_true';
  } else {
    thisItem.uncheck();
    listElementClass.className = 'completed_false';
  }

}

function removeItemButtonClicked(idx) {



}