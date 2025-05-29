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
      "minecraft:ender_eye",
      "minecraft:chainmail_helmet",
      "minecraft:chainmail_chestplate",
      "minecraft:chainmail_leggings",
      "minecraft:chainmail_boots",
      "minecraft:iron_helmet",
      "minecraft:iron_chestplate",
      "minecraft:iron_leggings",
      "minecraft:iron_boots",
      "minecraft:diamond_helmet",
      "minecraft:diamond_chestplate",
      "minecraft:diamond_leggings",
      "minecraft:diamond_boots",
      "cobblemon:master_ball",
      "minecraft:spyglass"
    ];
    remove_recipe_recipeid.forEach((recipeID) => {
      event.remove({ id: recipeID });
    });
});  