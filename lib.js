function isTouching(object1, object2) {
  if (
    (object1.x - object2.x < object2.width / 2 + object1.width / 2 &&
      object2.x - object1.x < object2.width / 2 + object1.width / 2) ||
    (object1.y - object2.y < object2.height / 2 + object1.height / 2 &&
      object2.y - object1.y < object2.height / 2 + object1.height / 2)
  ) {
    /*movingrect.shapeColor="green";
    fixedrect.shapeColor="green";*/
    console.log("heh");
    return true;
  } else {
    //movingrect.shapeColor="yellow";
    //fixedrect.shapeColor="yellow";
    console.log("oh no");
    return false;
  }
}

function downTouching(movingRect, fixedRect) {
  if (
    movingRect.y - fixedRect.y < fixedRect.height / 2 + movingRect.height / 2 &&
    fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2
  ) {
    console.log("ok");
    return true;
  } else {
    console.log("noo");
    return false;
  }
}

function bounce(object1, object2) {
  if (
    object1.x - object2.x < object2.width / 2 + object1.width / 2 &&
    object2.x - object1.x < object2.width / 2 + object1.width / 2
  ) {
    object1.velocityX = object1.velocityX * -1;
    object2.velocityX = object2.velocityX * -1;
  } else if (
    object1.y - object2.y < object2.height / 2 + object1.height / 2 &&
    object2.y - object1.y < object2.height / 2 + object1.height / 2
  ) {
    object1.velocityY = object1.velocityY * -1;
    object2.velocityY = object2.velocityY * -1;
  }
}

function hasCollided(object1, object2) {
  rightedge = object1.x + object1.width;
  leftedge = object2.x;
  if (rightedge >= leftedge) {
    return true;
  } else {
    return false;
  }
}

function detectCollision(body1, body2) {
  body1pos = body1.body.position;
  body2pos = body2.body.position;

  var distance = dist(body1pos.x, body1pos.y, body2pos.x, body2pos.y);
  if (distance <= body2.r + body1.r) {
    Matter.Body.setStatic(body2.body, false);
  }
}
