unction removeGrandParent() {
    setTimeout(() => {
      console.log("removing Grandparent");
      grandParent.removeEventListener("click", printGrandParent);
    }, 2000);
  }
  btn.addEventListener("click", removeGrandParent);

  parent.addEventListener("click", (event) => {
    console.log("parent bubbling");
  });
  
  child.addEventListener("click", (event) => {
    console.log("child bubbling");
  });