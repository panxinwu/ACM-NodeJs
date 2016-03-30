function list(names){
    var string = '',
        length = names.length;
  switch(length){
    case 0:
            return '';
    case 1: 
            return names[0].name;
    default:
            for(var key in names){
            if(key == length-2){
            string = string + names[key].name + ' & ';
          }else if(key == length-1){
            return string + names[key].name;
          }else{
                    string = string + names[key].name + ', ';
          }
            }
  }
    
  
}