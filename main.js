// Please complete the below exercises preferrably using JQuery

// 1. Make each item's paragraph collapse/expand when the title is clicked





// 2. Remove each item when we click on the closing X





// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items




//    Optional:
//    If the user clicks "Add New" and the input is empty,
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page
$(document).ready(function(){
  var rollup = false;
  var titleCounter = 0;

  /* Click function to add an item */
  $('.add').click(function(){
    var itemDiv = $('<div class=\'item\'></div>');
    var title = $('<h1 class=\'title\'></h1>');
    var description = $('<p class=\'description\'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.</p>');

    var titleVal = $.trim($('#newtitle').val());

    if(titleVal.length > 0){
      title.text(titleVal);
    }else{
      title.text('Title '+ ++titleCounter);
    }

    title.append('<span class=\'close\' tabindex=\'-1\'></span>')
    title.css('text-transform', 'capitalize');
    itemDiv.append(title);
    itemDiv.append(description);

    $('.item-list').append(itemDiv);
    $('#newtitle').val('')
  });

  /* Click function to remove an item */
  $(document).on("click", ".close", function(){    
    $(this).parents('.item').remove();
  });

  /* Click function to SlideUp/Down the description */
  $(document).on("click", ".title", function(){
    var sibling = $(this).siblings(".description");

    if (!rollup) {
      sibling.slideUp();
      rollup = true;
		}
		else {
      sibling.slideDown();
      rollup = false;
		}
  });


});
