export const ANSWERDICT = {
      'Light roast': ['Suke Quto', 'Santa Gema', 'Regalo', 'Agua Colorada', 'Take Me Home'],
      'Medium roast': ['A.M. Rescue', 'Pick-Me-Up', 'Life Saver', 'Fresh Perspective', 'Spark', 'Connection'],
      'Dark roast': ['Kickstart', 'Stimulate', 'Rise and Shine', 'Good Vibes'],
      "I don't know": ['Kickstart'],
      "Dark Chocolate": ['A.M. Rescue', 'Pick-Me-Up', 'Good Vibes', 'Connection'],
      "Bright and Fruity": ['Suke Quto', 'Regalo', 'Agua Colorada', 'Pick-Me-Up'],
      "Bold": ['Kickstart', 'Stimulate', 'Rise and Shine'],
      "Peanut Butter": ['Santa Gema', 'Regalo', 'Life Saver', 'Spark'],
      "No, I drink it black": ['Suke Quto', 'Regalo', 'Agua Colorada', 'Pick-Me-Up'],
      "Milk or Cream": ['Santa Gema', 'A.M. Rescue', 'Pick-Me-Up', 'Good Vibes'],
      "Flavored Creamer or Syrups": ['A.M. Rescue'],
      "Iced": ['Connection', 'Fresh Perspective'],
      "Espresso": ['Regalo', 'Kickstart', 'Stimulate'],
      "French Press": ['A.M. Rescue', 'Stimulate', 'Rise and Shine', 'Good Vibes'],
      "Pour Over": ['Suke Quto', 'Santa Gema', 'Agua Colorada', 'Pick-Me-Up', 'Spark', 'Fresh Perspective'],
      "Cold Brew": ['Connection', 'Good Vibes']
    };




export const QUESTIONS = [
      {
        id: 1,
        title: 'What roast level do you like?',
        answers: [
          "Light roast",
          "Medium roast",
          "Dark roast",
          "I don't know"
        ],
        isMulti: true,
        url: "https://cdn.shopify.com/s/files/1/0939/8326/products/learning_roaster_4f168e5c-3734-40ab-9824-1c5356becb18_600x.jpg?v=1557608537"
      },
      {
        id: 2,
        title: 'What flavors are you looking for in a coffee?',
        answers: [
          "Dark Chocolate",
          "Bright and Fruity",
          "Bold",
          "Peanut Butter"
        ],
        isMulti: false,
        url: "https://cdn.shopify.com/s/files/1/0939/8326/products/learning_roaster_4f168e5c-3734-40ab-9824-1c5356becb18_600x.jpg?v=1557608537"
      },
      {
        id: 3,
        title: 'Do you add anything to your coffee?',
        answers:[
          "No, I drink it black",
          "Milk or Cream",
          "Flavored Creamer or Syrups",
          "Iced"
        ],
        isMulti: false,
        url: "https://cdn.shopify.com/s/files/1/0939/8326/products/learning_roaster_4f168e5c-3734-40ab-9824-1c5356becb18_600x.jpg?v=1557608537"
      },
      {
        id: 4,
        title: 'How do you usually make coffee at home?',
        answers: [
          "Espresso",
          "French Press",
          "Pour Over",
          "Cold Brew"
        ],
        isMulti: false,
        url: "https://cdn.shopify.com/s/files/1/0939/8326/products/learning_roaster_4f168e5c-3734-40ab-9824-1c5356becb18_600x.jpg?v=1557608537"
      },
    ];
