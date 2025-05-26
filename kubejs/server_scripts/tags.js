ServerEvents.tags("item", (e) => {
  const customtag = [
    //Emi remove Stacks
    {
      tag: "c:hidden_from_recipe_viewers",
      item: ["#simpletms:tr_items", "#simpletms:tm_items"],
    },
    //Flour
    {
      tag: "c:flours/wheat",
      item: ["bountifulfares:flour"],
    },
    //Dough
    {
      tag: "c:foods/dough",
      item: ["create:dough"],
    },
  ];
  customtag.forEach((custom) => {
    e.add(custom.tag, custom.item);
  });
});
