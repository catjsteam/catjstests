var my = {};

my.tests = function() {
    
    return {

        /**
         * Insert a new To-do item
         * Test if the item is stored using chaijs library
         * 
         * @param thi$ {Object} The this reference
         * @param $scope {Object} angularjs scope object 
         * @returns {boolean} true if the test passed or else false
         */
        inputTest: function(thi$, $scope) {
             
            var todoList,
                before, after;
                       
            /* get the list length */
            todoList = $scope.todos;
            before = todoList.length;
            
            /* The elements can be tested with catjs API */ 
            _cat.core.plugin("jquery").actions.setText("#new-todo", "test");
            _cat.core.plugin("jquery").utils.trigger('#new-todo', {type: "keyup", opt: { keyCode: 13 }});

            /* get the list length after an item has being added */
            todoList = thi$.getFilteredTodos();
            after = todoList.length;
            
            // test with chaijs the lists size
            chai.expect(before).to.be.below(after);
            
           
            return true;
        },

        /**
         * Delete a To-do item from the list
         * Test if the item has being deleted from the list
         * 
         * @param thi$
         * @param $scope {Object} angularjs scope object
         * @returns {boolean}
         */
         deleteTest: function(thi$, $scope) {
             
            var todoList,
                before, after,
                destroyButtonQuery;
            
            /* get the list length */
            todoList = $scope.todos;
            before = todoList.length;
            
             /* We have inserted an element, expect to have at least one */
             chai.expect(todoList).to.have.length.above(0);
             
             destroyButtonQuery = ["#todo-list li[data-id='", todoList[0].id , "'] button"].join("");
            _cat.core.plugin("jquery").utils.trigger(destroyButtonQuery, {type: "click"});

            /* get the list length after an item has being deleted */
            todoList = thi$.getFilteredTodos();
            after = todoList.length;

            // test with chaijs the lists size
            chai.expect(after).to.be.below(before);

            return true;
        }
        
    };    
    
}();