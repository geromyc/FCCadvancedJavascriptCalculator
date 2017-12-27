var calculator = {
    total: 0,
    currEq: [],
    currNum: 0,
    disp: function() {
        document.getElementById("actNum").value = this.currNum;
    },
    
    equals: function() {
        this.currEq.push(this.currNum);
        for (var i = 0; i < this.currEq.length; i++) {
    		if (this.currEq[i] == "+") {
    			this.total += parseFloat(this.currEq[i + 1], 10);
    			i++;
    		} else if (this.currEq[i] == "-") {
    			this.total -= parseFloat(this.currEq[i + 1], 10);
    			i++;
    		} else if (this.currEq[i] == "*") {
    			this.total *= parseFloat(this.currEq[i + 1], 10);
    			i++;
    		} else if (this.currEq[i] == "/") {
    			this.total /= parseFloat(this.currEq[i + 1], 10);
    			i++;
    		} else {
    			this.total += parseFloat(this.currNum[i], 10);
    		}
	    }
	this.currEq = [];
	this.currNum = 0;
	document.getElementById("ans").value = this.total;
    }
};

var keys = document.getElementsByClassName('keys');
for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function() {
        var num = event.target.id;
        var x = calculator.currNum;
        if (x == 0) {
            x = num;
        } else {
            x += num;
        }
        calculator.disp();
    }, false);
}
var operator = document.getElementsByClassName('operator');
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        var oper = event.target.id;
        calculator.equals();
        calculator.currEq.push(oper);
    }, false);
}
document.getElementById("ce").addEventListener('click', function() {
    calculator.currEq = [];
    calculator.currNum = 0;
    calculator.total = 0;
    calculator.disp();
});
document.getElementById("c").addEventListener('click', function() {
    calculator.currNum = 0;
    calculator.disp();
});
document.getElementById("equal").onclick = function(){
    calculator.equals();
};