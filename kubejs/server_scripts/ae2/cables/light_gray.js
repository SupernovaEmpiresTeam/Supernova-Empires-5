
ServerEvents.recipes(event => {

    // Covered Cable

    event.shaped(
        Item.of('ae2:light_gray_covered_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_cable', 
        B: '#forge:dyes/light_gray'
        }
    ),

    // Covered dense

    event.shaped(
        Item.of('ae2:light_gray_covered_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_dense_cable', 
        B: '#forge:dyes/light_gray'
        }
    ),

    // Glass

    event.shaped(
        Item.of('ae2:light_gray_glass_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:glass_cable', 
        B: '#forge:dyes/light_gray'
        }
    ),

    // Smart

    event.shaped(
        Item.of('ae2:light_gray_smart_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_cable', 
        B: '#forge:dyes/light_gray'
        }
    ),

    // Smart Dense

    event.shaped(
        Item.of('ae2:light_gray_smart_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_dense_cable', 
        B: '#forge:dyes/light_gray'
        }
    )

})