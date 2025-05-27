ServerEvents.recipes((event) => {
    let remove_recipe_recipeid = [
      "minecraft:enchanting_table",
      "vanillabackport:dried_ghast",
      "minecraft:piston",
      "minecraft:dispenser",
      "minecraft:dropper",
      "minecraft:rail",
      "minecraft:activator_rail",
      "minecraft:detector_rail",
      "minecraft:crafter",
      "minecraft:hopper",
      "minecraft:observer",
      "minecraft:repeater",
      "minecraft:comparator",
      "minecraft:anvil",
      "minecraft:ender_eye"
    ];
    remove_recipe_recipeid.forEach((recipeID) => {
      event.remove({ id: recipeID });
    });
});  