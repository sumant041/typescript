import LinkedListNode from './linkedListNode';

export default class LinkedList {
  public headSentinel;
  constructor() {
    this.headSentinel = new LinkedListNode(null);
  }
  head() {
    return this.headSentinel.next;
  }
  find(index: number) {
    if (index == -1) {
      return this.headSentinel;
    }
    let ele = this.head();
    for (let i = 0; i < index; i ++) {
      ele = ele.next;
    }
    return ele;
  }
  insert(index: number, node: LinkedListNode) {
    let preEle = this.find(index - 1);
    let postEle = this.find(index);
    node.next = postEle;
    preEle.next = node;
  }
  delete(index: number) {
    let preEle = this.find(index - 1);
    let eleToDel = preEle.next;
    let postEle = eleToDel.next;
    preEle.next = postEle;
    eleToDel.next = null;
  }
  print() {
    let ele = this.head();
    while (ele !== undefined) {
      console.log(ele.value);
      ele = ele.next;
    }
  }
}
