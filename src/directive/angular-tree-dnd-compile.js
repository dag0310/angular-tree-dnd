angular.module('ntt.TreeDnD')
    .directive(
    'compile', [
        '$compile', function ($compile) {
            return {
                restrict: 'A',
                link:     function (scope, element, attrs) {
                    scope.$watch(
                        attrs.compile, function (new_val) {
                            if (new_val) {
                                /*
                                 * Compile creates a linking function
                                 * that can be used with any scope.
                                 */
                                var link = $compile(new_val);
                                /*
                                 * Executing the linking function
                                 * creates a new element.
                                 */
                                var new_elem = link(scope);
                                // Which we can then append to our DOM element.
                                if(angular.isFunction(element.empty)){
                                    element.empty()
                                }else{
                                    element.html('');
                                }

                                element.append(new_elem)
                            }
                        }
                    );
                }
            };
        }]
)
    .directive(
    'compileReplace', [
        '$compile', function ($compile) {
            return {
                restrict: 'A',
                link:     function (scope, element, attrs) {
                    scope.$watch(
                        attrs.compileReplace, function (new_val) {
                            if (new_val) {
                                /*
                                 * Compile creates a linking function
                                 * that can be used with any scope.
                                 */
                                var link = $compile(new_val);
                                /*
                                 * Executing the linking function
                                 * creates a new element.
                                 */
                                var new_elem = link(scope);

                                element.replaceWith(new_elem)
                            }
                        }
                    );
                }
            };
        }]
);