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

function changeCheckedStatus() {


}

function removeItemButtonClicked(idx) {



}