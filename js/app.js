theShoppingList = new ShoppingList();
itemsToDisplay = theShoppingList.render();
document.querySelector('#output').innerHTML = ItemsToDisplay;

document.querySelector('#add_shopping_list_item_button').addEventListener('click', add_to_shopping_list());

submitLink.addEventListener('click', function() {

  console.log('clickworked');

});

function add_to_shopping_list() {

  document.querySelector('#newItem').value = newItemName;
  document.querySelector('#newItemDescription').value = newItemDescription;

  var new_shopping_list_item = ShoppingListItem(newItemName, newItemDescription);

  theShoppingList.add(new_shopping_list_item);

  itemsToDisplay;

}

function changeCheckedStatus() {


}

function removeItemButtonClicked(idx) {



}