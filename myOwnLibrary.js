function isTouching(object1,object2){

    //if the object1 and object is satisfying it will return true or else it will return false  
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
  
    return true;
  }
  else {
    
  
    return false;
  }
  
  }
  
  