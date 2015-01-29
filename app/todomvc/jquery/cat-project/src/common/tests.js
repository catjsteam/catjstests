var my = {};

my.tests = function() {
    
    return {

        /**
         * Insert a new To-do item
         * Test if the item is stored using chaijs library
         * 
         * @param thi$ {Object} The this reference 
         * @returns {boolean} true if the test passed or else false
         */
        inputTest: function(thi$) {
             
            var beforeTodoList, afterTodoList;
                       
            /* get the list length */
            beforeTodoList = thi$.getFilteredTodos();
            
            /* The elements can be tested with catjs API */ 
            _cat.core.plugin("jquery").actions.setText("#new-todo", "test");
            _cat.core.plugin("jquery").utils.trigger('#new-todo', {type: "keyup", opt: { keyCode: 13 }});

            /* get the list length after an item has being added */
            afterTodoList = thi$.getFilteredTodos();
            
            // test with chaijs the lists size
            chai.expect(beforeTodoList).to.be.below(afterTodoList);
            
           
            return true;
        },

        /**
         * Delete a To-do item from the list
         * Test if the item has being deleted from the list
         * 
         * @param thi$
         * @returns {boolean}
         */
         deleteTest: function(thi$) {
             
            var todoList, afterTodoList,
                destroyButtonQuery;
            
            /* get the list length */
            todoList = thi$.getFilteredTodos();
            
             /* We have inserted an element, expect to have at least one */
             chai.expect(todoList).to.have.length.above(0);
             
             destroyButtonQuery = ["#todo-list li[data-id='", todoList[0].id , "'] button"].join("");
            _cat.core.plugin("jquery").utils.trigger(destroyButtonQuery, {type: "click"});

            /* get the list length after an item has being deleted */
            afterTodoList = thi$.getFilteredTodos();

            // test with chaijs the lists size
            chai.expect(afterTodoList).to.be.below(todoList);

            return true;
        }
        
    };    
    
}();