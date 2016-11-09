"use strict";
var linkedListNode_1 = require("./linkedListNode");
var LinkedList = (function () {
    function LinkedList() {
        this.headSentinel = new linkedListNode_1.default(null);
    }
    LinkedList.prototype.head = function () {
        return this.headSentinel.next;
    };
    LinkedList.prototype.find = function (index) {
        if (index == -1) {
            return this.headSentinel;
        }
        var ele = this.head();
        for (var i = 0; i < index; i++) {
            ele = ele.next;
        }
        return ele;
    };
    LinkedList.prototype.insert = function (index, node) {
        var preEle = this.find(index - 1);
        var postEle = this.find(index);
        node.next = postEle;
        preEle.next = node;
    };
    LinkedList.prototype.delete = function (index) {
        var preEle = this.find(index - 1);
        var eleToDel = preEle.next;
        var postEle = eleToDel.next;
        preEle.next = postEle;
        eleToDel.next = null;
    };
    LinkedList.prototype.print = function () {
        var ele = this.head();
        while (ele !== undefined) {
            console.log(ele.value);
            ele = ele.next;
        }
    };
    return LinkedList;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LinkedList;
