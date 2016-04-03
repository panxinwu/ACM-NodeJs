function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  var length = 1;
  if(head === null){
    return 0;
  }else if(head.next === null){
    return 1;
  }else{
    while(1){
        if(head.next != null){
        length ++;
        head = head.next;
      }else{
            return length;
      }
    }
  }
}

function count(head, data) {
  var length = 0;
  if(head === null){
    return 0;
  }
  while(1){
    if(head === null){
        return length;
    }else if(head.data === data){
      length ++;
      head = head.next;
    }else{
        head = head.next;
    }
  }
}