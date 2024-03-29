
ItemEvents.armorTierRegistry (event => {

    event.add('fbmodium', tier => {

      tier.durabilityMultiplier = 50
      tier.slotProtections = [52, 55, 56, 52] 
      tier.enchantmentValue = 15
      tier.equipSound = 'minecraft:item.armor.equip_iron'
      tier.repairIngredient = '#forge:ingots/fbmodium'
      tier.toughness = 50.0
      tier.knockbackResistance = 50.0
    }),

    event.add('nether_infused_fbmodium', tier => {

        tier.durabilityMultiplier = 100
        tier.slotProtections = [102, 105, 106, 102] 
        tier.enchantmentValue = 15
        tier.equipSound = 'minecraft:item.armor.equip_iron'
        tier.repairIngredient = '#forge:ingots/nether_infused_fbmodium'
        tier.toughness = 100.0
        tier.knockbackResistance = 100.0
    }),

    event.add('end_infused_fbmodium', tier => {

        tier.durabilityMultiplier = 400
        tier.slotProtections = [402, 405, 406, 402] 
        tier.enchantmentValue = 15
        tier.equipSound = 'minecraft:item.armor.equip_iron'
        tier.repairIngredient = '#forge:ingots/end_infused_fbmodium'
        tier.toughness = 400.0
        tier.knockbackResistance = 400.0
    }),

    event.add('ultimate_infused_fbmodium', tier => {

        tier.durabilityMultiplier = 4000
        tier.slotProtections = [4002, 4005, 4006, 4002] 
        tier.enchantmentValue = 15
        tier.equipSound = 'minecraft:item.armor.equip_iron'
        tier.repairIngredient = '#forge:ingots/ultimate_infused_fbmodium'
        tier.toughness = 4000.0
        tier.knockbackResistance = 4000.0
      })
})