
ServerEvents.recipes(event => {

    // Covered

    event.shapeless(
        Item.of('ae2:red_covered_cable'),
        [ 
          'ae2:red_glass_cable',
          'minecraft:red_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:red_covered_cable'),
        [ 
          '#forge:dyes/red',
          '#ae2:covered_cable'
        ]
    ),

    // Covered Dense

    event.shapeless(
        Item.of('ae2:red_covered_dense_cable'),
        [ 
          '#ae2:covered_dense_cable',
          '#forge:dyes/red'
        ]
    ),

    // Glass

    event.shapeless(
        Item.of('ae2:red_glass_cable'),
        [ 
          '#ae2:glass_cable',
          '#forge:dyes/red'
        ]
    ),

    // Smart Cable

    event.shapeless(
        Item.of('ae2:red_smart_cable'),
        [ 
          '#ae2:covered_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone',
          '#forge:dyes/red'
        ]
    ),

    event.shapeless(
        Item.of('ae2:red_smart_cable'),
        [
            'ae2:fluix_glass_cable',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone',
            'minecraft:red_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:red_smart_cable'),
        [ 
          '#ae2:smart_cable',
          '#forge:dyes/red'
        ]
    )

    // Smart Dense

    event.shapeless(
        Item.of('ae2:red_smart_dense_cable'),
        [ 
          '#ae2:smart_dense_cable',
          '#forge:dyes/red'
        ]
    ),

    event.shapeless(
        Item.of('ae2:red_smart_dense_cable'),
        [ 
          'ae2:red_covered_dense_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone'
        ]
    )



})