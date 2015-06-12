(function () {
    var app = angular.module('ang');

    app.controller('angCtrl', [function () {
        var scope = this;

        scope.num1 = 0;
        scope.num2 = 0;
        scope.sum = 0;
        scope.ctr = 0;
        scope.op = 1; // 1- add 2-subtract 3-multiply 4- divide 5-clr

        scope.sel = function (a) {
            if(scope.ctr>0)
            {
                scope.num2 = a;
                scope.ctr = 0;
                scope.operate();
            }
            else
            {
                scope.num1 = a;
            }
            
        };
        scope.selOp = function (b) {
            switch(b)
            {
                case 1:
                    scope.op = 1;
                    scope.ctr++;
                    break;
                case 2:
                    scope.op = 2;
                    scope.ctr++;
                    break;
                case 3:
                    scope.op = 3;
                    scope.ctr++;
                    break;
                case 4:
                    scope.op = 4;
                    scope.ctr++;
                    break;
                default:
                    scope.op = 5;
                    scope.operate()
                    break;
            }
        };

        scope.operate = function () {
            switch(scope.op)
            {
                case 1:
                    scope.num1 = scope.num1 + scope.num2;
                    break;
                case 2:
                    scope.num1 = scope.num1 - scope.num2;
                    break;
                case 3:
                    scope.num1 = scope.num1 * scope.num2;
                    break;
                case 4:
                    scope.num1 = scope.num1 / scope.num2;
                    break;
                default:
                    scope.num1 = 0;
                    scope.num2 = 0;
                    scope.sum = 0;
                    ctr = 0;
                    break;
            }
        };

    }]);
})();