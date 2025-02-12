// enter items need to purchase by entering text and hitting 'return'
// or clicking 'add item' button

// check and uncheck items on list by clicking 'check' button
// delete items from list





// submit(): event is sent to an element when the user is attempting to
// submit a form; can only be attached to <form> elements
// how will fulfill first requirement of entering items

// event.preventDefault(): default action of event will nto be triggered
// does not accept arguments

// .toggleClass(): add or remove one or more classes from each element
// in set of matched elements 

// .closest(): for each element get first element that matches selector
// by testing element itself and traversing up through ancestors in DOM

// function that can delete items
// function that can toggle items
// function that can add items

'use strict';

function addItems(){
  $('#js-shopping-list-form').submit(event => {
  event.preventDefault();
  let listItem = $('#shopping-list-entry').val();
  let item = 
    `<li>
      <span class = 'shopping-item'>${listItem}</span>
      <div class ='shopping-item-controls'>
        <button class ='shopping-item-toggle'>
          <span class = 'button-label' >check</span>
        </button>
        <button class = 'shopping-item-delete'>
          <span class = 'button-label'>delete</span>
        </button>
      </div>
    </li>`;
    $('.shopping-list').append(item);
    console.log(listItem);
  });
}

function checkItem() {
  $('.shopping-list').on('click', '.shopping-item-toggle', event => {
    $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}

// $( "#foo" ).toggleClass( className, addOrRemove );


function deleteItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', event => {
    $(event.currentTarget).closest('li').remove();
  })
}



$(addItems);
$(checkItem);
$(deleteItem);