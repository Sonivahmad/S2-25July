function amitHelp(menu){
    let amitMenu=[]
    for(let i=0;i<menu.length;i++){
      if(menu[i].includes('Paneer')==true && menu[i].includes('Rice')==false || menu[i].includes('Paneer')==true){
        amitMenu.push(menu[i])
      }
    }
    return amitMenu;
  }
  console.log(amitHelp(['Panner Butter Masala', 'Panner Fried Rice', 'Chicken Biryani', 'Cold Coffee', 'Paneer Kofta']))
  exports.amitHelp = amitHelp