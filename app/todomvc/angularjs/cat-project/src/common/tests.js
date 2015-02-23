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
            _cat.core.plugin("angular").actions.setText("#new-todo", "test", false);
            _cat.core.plugin("angular").utils.trigger("#todo-form", {type: "submit"});

            /* get the list length after an item has being added */
            todoList = $scope.todos;
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
                destroyButtonQuery,
                removeElt;
            
            /* get the list length */
            todoList = $scope.todos;
            before = todoList.length;
            
            /* We have inserted an element, expect to have at least one */
            chai.expect(todoList).to.have.length.above(0);
             
            destroyButtonQuery = ["#todo-list li button"].join("");
            removeElt = _cat.core.plugin("angular").utils.getElt(destroyButtonQuery);
            
            _cat.core.plugin("angular").utils.trigger(removeElt[removeElt.length-1], {type: "click"});

            /* get the list length after an item has being deleted */
            todoList = $scope.todos;
            after = todoList.length;

            // test with chaijs the lists size
            chai.expect(after).to.be.below(before);

            return true;
        }
        
    };    
    
}();