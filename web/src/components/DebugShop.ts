const DebugShop = () => {
  return {
    plyInventory: {
      batter: 5,
      rice: 3,
      potato: 2,
      spices: 1,
    },
    shop: {
      items: [
        {
          label: "Sushi Rolls",
          image: "Sushi_Item.png",
          name: "sushi_rolls",
          requiredItems: [
            {
              name: "raw_seafood",
              label: "Raw Seafood",
              image: "RawSeafood_Item.png",
              amount: 1,
            },
            {
              name: "rice",
              label: "Rice",
              image: "Rice_Item.png",
              amount: 1,
            },
          ],
        },
        {
          label: "Fish and Chips",
          image: "FishChips_Item.png",
          name: "fish_n_chips",
          requiredItems: [
            {
              name: "raw_seafood",
              label: "Raw Seafood",
              image: "RawSeafood_Item.png",
              amount: 1,
            },
            {
              name: "fries",
              label: "Fries",
              image: "Fries_Item.png",
              amount: 1,
            },
            {
              name: "batter",
              label: "Batter",
              image: "Batter_Item.png",
              amount: 1,
            },
          ],
        },
        {
          label: "Hushpuppies",
          image: "Hushpuppies_Item.png",
          name: "hushpuppies",
          requiredItems: [
            {
              name: "batter",
              label: "Batter",
              image: "Batter_Item.png",
              amount: 2,
            },
          ],
        },
        {
          label: "Fries",
          image: "Fries_Item.png",
          name: "fries",
          requiredItems: [
            {
              name: "potato",
              label: "Potato",
              image: "Potato_Item.png",
              amount: 1,
            },
          ],
        },
        {
          label: "Grilled Tilapia",
          image: "Tilapia_Item.png",
          name: "grilled_tilapia",
          requiredItems: [
            {
              name: "raw_seafood",
              label: "Raw Seafood",
              image: "RawSeafood_Item.png",
              amount: 2,
            },
            {
              name: "batter",
              label: "Batter",
              image: "Batter_Item.png",
              amount: 1,
            },
            {
              name: "spices",
              label: "Spices",
              image: "Spices_Item.png",
              amount: 1,
            },
          ],
        },
        {
          label: "Fish Tacos",
          image: "FishTaco_Item.png",
          name: "fish_tacos",
          requiredItems: [
            {
              name: "raw_seafood",
              label: "Raw Seafood",
              image: "RawSeafood_Item.png",
              amount: 1,
            },
            {
              name: "batter",
              label: "Batter",
              image: "Batter_Item.png",
              amount: 1,
            },
          ],
        },
        {
          label: "Paella de Marisco",
          image: "Paella_Item.png",
          name: "paella",
          requiredItems: [
            {
              name: "raw_seafood",
              label: "Raw Seafood",
              image: "RawSeafood_Item.png",
              amount: 3,
            },
            {
              name: "rice",
              label: "Rice",
              image: "Rice_Item.png",
              amount: 2,
            },
            {
              name: "spices",
              label: "Spices",
              image: "Spices_Item.png",
              amount: 1,
            },
          ],
        },
        {
          label: "Clam Chowder",
          image: "Chowder_Item.png",
          name: "clam_chowder",
          requiredItems: [
            {
              name: "raw_seafood",
              label: "Raw Seafood",
              image: "RawSeafood_Item.png",
              amount: 2,
            },
            {
              name: "potato",
              label: "Potato",
              image: "Potato_Item.png",
              amount: 2,
            },
          ],
        },
        {
          label: "Surf and Turf",
          image: "SurfTurf_Item.png",
          name: "surf_n_turf",
          requiredItems: [
            {
              name: "raw_seafood",
              label: "Raw Seafood",
              image: "RawSeafood_Item.png",
              amount: 3,
            },
            {
              name: "spices",
              label: "Spices",
              image: "Spices_Item.png",
              amount: 1,
            },
          ],
        },
        {
          label: "XXX Spicy Sichuan Soup",
          image: "SichuanSoup_Item.png",
          name: "spicy_soup",
          requiredItems: [
            {
              name: "raw_seafood",
              label: "Raw Seafood",
              image: "RawSeafood_Item.png",
              amount: 3,
            },
            {
              name: "spices",
              label: "Spices",
              image: "Spices_Item.png",
              amount: 5,
            },
          ],
        },
        {
          label: "Salmon Filet",
          image: "Salmon_Item.png",
          name: "salmon_filet",
          requiredItems: [
            {
              name: "raw_seafood",
              label: "Raw Seafood",
              image: "RawSeafood_Item.png",
              amount: 3,
            },
            {
              name: "rice",
              label: "Rice",
              image: "Rice_Item.png",
              amount: 1,
            },
          ],
        },
        {
          label: "Long Island Iced Tea",
          image: "LongIsland_Item.png",
          name: "long_island_tea",
          requiredItems: [
            {
              name: "vodka",
              label: "Vodka",
              image: "vodka.png",
              amount: 1,
            },
            {
              name: "rum",
              label: "Rum",
              image: "Rum_Item.png",
              amount: 1,
            },
            {
              name: "lemonade",
              label: "Lemonade",
              image: "Lemonade.png",
              amount: 1,
            },
            {
              name: "kurkakola",
              label: "Cola",
              image: "cola.png",
              amount: 1,
            },
          ],
        },
        {
          label: "Cosmopolitan",
          image: "Cosmo_Item.png",
          name: "cosmopolitan",
          requiredItems: [
            {
              name: "vodka",
              label: "Vodka",
              image: "vodka.png",
              amount: 1,
            },
            {
              name: "lemonade",
              label: "Lemonade",
              image: "Lemonade.png",
              amount: 1,
            },
            {
              name: "fruit_juice",
              label: "Fruit Juice",
              image: "Fruit_Juice.png",
              amount: 1,
            },
          ],
        },
        {
          label: "Strawberry Daiquiri",
          image: "Daiquiri_Item.png",
          name: "strawberry_daiquiri",
          requiredItems: [
            {
              name: "rum",
              label: "Rum",
              image: "Rum_Item.png",
              amount: 1,
            },
            {
              name: "lemonade",
              label: "Lemonade",
              image: "Lemonade.png",
              amount: 1,
            },
            {
              name: "fruit_juice",
              label: "Fruit Juice",
              image: "Fruit_Juice.png",
              amount: 1,
            },
          ],
        },
        {
          label: "Blue Lagoon",
          image: "BlueLagoon_Item.png",
          name: "blue_lagoon",
          requiredItems: [
            {
              name: "vodka",
              label: "Vodka",
              image: "vodka.png",
              amount: 1,
            },
            {
              name: "lemonade",
              label: "Lemonade",
              image: "Lemonade.png",
              amount: 1,
            },
            {
              name: "curacao",
              label: "Curacao",
              image: "Curacao_Item.png",
              amount: 1,
            },
          ],
        },
        {
          label: "Pina Colada",
          image: "Pina_Item.png",
          name: "pina_colada",
          requiredItems: [
            {
              name: "rum",
              label: "Rum",
              image: "Rum_Item.png",
              amount: 1,
            },
            {
              name: "fruit_juice",
              label: "Fruit Juice",
              image: "Fruit_Juice.png",
              amount: 1,
            },
          ],
        },
        {
          label: "Mojito",
          image: "Mojito_Item.png",
          name: "mojito",
          requiredItems: [
            {
              name: "rum",
              label: "Rum",
              image: "Rum_Item.png",
              amount: 1,
            },
            {
              name: "lemonade",
              label: "Lemonade",
              image: "Lemonade.png",
              amount: 1,
            },
            {
              name: "sugar",
              label: "Sugar",
              image: "Sugar_Item.png",
              amount: 1,
            },
          ],
        },
        {
          label: "Mai Tai",
          image: "MaiTai_Item.png",
          name: "mai_tai",
          requiredItems: [
            {
              name: "rum",
              label: "Rum",
              image: "Rum_Item.png",
              amount: 1,
            },
            {
              name: "lemonade",
              label: "Lemonade",
              image: "Lemonade.png",
              amount: 1,
            },
            {
              name: "curacao",
              label: "Curacao",
              image: "Curacao_Item.png",
              amount: 1,
            },
            {
              name: "sugar",
              label: "Sugar",
              image: "Sugar_Item.png",
              amount: 1,
            },
          ],
        },
        {
          label: "Lemonade",
          image: "Lemonade.png",
          name: "lemonade",
          requiredItems: [
            {
              name: "lemon",
              label: "Lemon",
              image: "Lemons_Item.png",
              amount: 2,
            },
            {
              name: "sugar",
              label: "Sugar",
              image: "Sugar_Item.png",
              amount: 1,
            },
          ],
        },
        {
          label: "Boba Tea",
          image: "Boba_Item.png",
          name: "boba_tea",
          requiredItems: [
            {
              name: "tapioca",
              label: "Tapioca",
              image: "Tapioca.png",
              amount: 1,
            },
            {
              name: "sugar",
              label: "Sugar",
              image: "Sugar_Item.png",
              amount: 2,
            },
          ],
        },
      ],
      labels: {
        header: "Pearl's Seafood",
        costs: "Recipe Costs",
        crafting: "Food Made",
        submit: "Cook",
      },
    },
  };
};
export default DebugShop;
