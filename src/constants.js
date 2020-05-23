export const QUESTIONS = [
      {
            id: 0,
            isMulti: true,
            title: "What is your preferred roast level? (Select all that apply)",
            answers: {
                        'Light': ['A.M. Rescue', 'Life Saver', 'Take Me Home', 'Fresh Perspective', 'Spark', 'Santa Gema', 'Regalo', 'Agua Colorada', 'Suke Quto'],
                        'Medium': ['Pick-Me-Up', 'Kickstart', 'Life Saver', 'Fresh Perspective', 'Good Vibes', 'Spark', 'Connection', 'Santa Gema', 'Regalo', 'Agua Colorada'],
                        'Dark': ['Kickstart', 'Good Vibes', 'Stimulate', 'Rise and Shine'],
                        'Doesn\'t Matter to me!': [],
                  }

      },

      {
            id: 1,
            isMulti: true,
            title: "Flavor notes are the aromas, textures, and flavors we perceive when we taste coffee. Which of the following appeal to you? (Select all that apply)",
            answers: {
                        'Chocolate': ['Pick-Me-Up', 'Kickstart', 'Life Saver', 'Fresh Perspective', 'Stimulate', 'Spark', 'Connection', 'Rise and Shine', 'Santa Gema'],
                        'Caramel': ['A.M. Rescue', 'Kickstart', 'Life Saver', 'Take Me Home', 'Connection'],
                        'Nutty': ['A.M. Rescue', 'Life Saver', 'Take Me Home', 'Good Vibes', 'Stimulate', 'Connection'],
                        'Fruity': ['Pick-Me-Up', 'Fresh Perspective', 'Good Vibes', 'Santa Gema', 'Agua Colorada', 'Suke Quto'],
                        'Citrus': ['Life Saver', 'Take Me Home', 'Stimulate', 'Regalo', 'Suke Quto'],
                        'Floral': ['Take Me Home', 'Fresh Perspective', 'Suke Quto'],
                        'Savory': ['Good Vibes'],
                        'Herbaceous': ['Suke Quto'],
                        'Smooth': ['A.M. Rescue', 'Pick-Me-Up', 'Kickstart', 'Life Saver', 'Fresh Perspective', 'Spark', 'Connection', 'Santa Gema'],
                        'Delicate': ['A.M. Rescue', 'Take Me Home', 'Take Me Home', 'Regalo', 'Agua Colorada', 'Suke Quto'],
                        'Tea-like': ['Agua Colorada', 'Suke Quto'],
                        'Roasty': ['Good Vibes', 'Stimulate', 'Rise and Shine'],
                        'Smoky': ['Stimulate', 'Rise and Shine'],
                        'Sweet': ['A.M. Rescue', 'Pick-Me-Up', 'Kickstart', 'Life Saver', 'Spark', 'Connection', 'Santa Gema', 'Regalo', 'Agua Colorada'],
                        'Tart': ['Fresh Perspective', 'Santa Gema', 'Regalo', 'Agua Colorada', 'Suke Quto'],
                        'Rich': ['Pick-Me-Up', 'Kickstart', 'Fresh Perspective', 'Good Vibes', 'Stimulate', 'Rise and Shine'],
                        'I don\'t know, you decide!': []
                  }

      },

      {
            id: 2,
            isMulti: true,
            title: "How do you brew your coffee? (Select all that apply)",
            answers: {
                        'Cold Brew': ['A.M. Rescue', 'Pick-Me-Up', 'Fresh Perspective', 'Stimulate', 'Connection'],
                        'French Press': ['A.M. Rescue', 'Pick-Me-Up', 'Kickstart', 'Fresh Perspective', 'Good Vibes', 'Stimulate', 'Spark', 'Rise and Shine','Santa Gema', 'Agua Colorada'],
                        'Chemex': ['A.M. Rescue', 'Pick-Me-Up', 'Life Saver', 'Take Me Home', 'Fresh Perspective', 'Spark', 'Santa Gema', 'Regalo', 'Agua Colorada', 'Suke Quto'],
                        'Drip': ['A.M. Rescue', 'Pick-Me-Up', 'Kickstart', 'Life Saver', 'Take Me Home', 'Fresh Perspective', 'Good Vibes', 'Stimulate', 'Spark', 'Connection', 'Rise and Shine', 'Santa Gema', 'Regalo', 'Agua Colorada'],
                        'Pourover': ['A.M. Rescue', 'Pick-Me-Up', 'Life Saver', 'Take Me Home', 'Fresh Perspective', 'Spark', 'Santa Gema', 'Regalo', 'Agua Colorada', 'Suke Quto'],
                        'Espresso': ['Pick-Me-Up', 'Kickstart', 'Fresh Perspective', 'Good Vibes', 'Stimulate', 'Regalo'],
                        'Aeropress': ['A.M. Rescue', 'Pick-Me-Up', 'Kickstart', 'Life Saver', 'Take Me Home', 'Fresh Perspective', 'Good Vibes', 'Stimulate', 'Spark', 'Connection', 'Rise and Shine', 'Santa Gema', 'Regalo', 'Agua Colorada', 'Suke Quto']
                  }

      },

      {
            id: 3,
            isMulti: true,
            title: "Do you take milk (dairy or non-dairy) in your coffee?",
            answers: {
                        'Yes': ['A.M. Rescue', 'Pick-Me-Up', 'Kickstart', 'Life Saver', 'Good Vibes', 'Stimulate', 'Spark', 'Connection', 'Rise and Shine', 'Santa Gema'],
                        'No': ['A.M. Rescue', 'Pick-Me-Up', 'Kickstart', 'Life Saver', 'Take Me Home', 'Fresh Perspective', 'Spark', 'Connection', 'Santa Gema', 'Regalo', 'Agua Colorada', 'Suke Quto'],
                        'Sometimes': []
                  }

      },

      {
            id: 4,
            isMulti: true,
            title: "Do you add anything else to your coffee? (Select all that apply)",
            answers: {
                        'Sugar': ['A.M. Rescue', 'Pick-Me-Up', 'Kickstart', 'Life Saver',  'Good Vibes', 'Stimulate', 'Spark', 'Connection', 'Rise and Shine'],
                        'Sugar Substitute (Stevia, Splenda, etc.)': ['A.M. Rescue', 'Pick-Me-Up', 'Kickstart', 'Life Saver', 'Good Vibes', 'Stimulate', 'Spark', 'Connection', 'Rise and Shine'],
                        'Spices': ['A.M. Rescue', 'Pick-Me-Up', 'Kickstart', 'Life Saver', 'Good Vibes', 'Stimulate', 'Spark', 'Connection', 'Rise and Shine'],
                        'Butter/Oil': ['A.M. Rescue', 'Pick-Me-Up', 'Kickstart', 'Life Saver', 'Good Vibes', 'Stimulate', 'Spark', 'Connection', 'Rise and Shine'],
                        'Honey': ['A.M. Rescue', 'Pick-Me-Up', 'Kickstart', 'Life Saver', 'Take Me Home', 'Good Vibes', 'Stimulate', 'Spark', 'Connection', 'Rise and Shine'],
                        'Syrups': ['A.M. Rescue', 'Pick-Me-Up', 'Kickstart', 'Life Saver', 'Good Vibes', 'Stimulate', 'Spark', 'Connection', 'Rise and Shine'],
                        'None of the above': ['A.M. Rescue', 'Pick-Me-Up', 'Kickstart', 'Life Saver', 'Take Me Home', 'Fresh Perspective', 'Good Vibes', 'Stimulate', 'Spark', 'Connection', 'Rise and Shine', 'Santa Gema', 'Regalo', 'Agua Colorada', 'Suke Quto']
                  }

      },

      {
            id: 5,
            isMulti: true,
            title: "Do you have a preference of the following?",
            answers: {
                        'Blend': ['A.M. Rescue', 'Pick-Me-Up', 'Kickstart', 'Stimulate', 'Rise and Shine'],
                        'Single-origin': ['Life Saver', 'Take Me Home', 'Fresh Perspective', 'Good Vibes', 'Spark', 'Connection'],
                        'Limited-time Offering': ['Santa Gema', 'Regalo', 'Agua Colorada', 'Suke Quto'],
                        'No preference!': []
                  }

      },

      {
            id: 6,
            isMulti: true,
            title: "Do you have a specific charity you’d like to support?",
            answers: {
                        'Austin Pets Alive!': ['A.M. Rescue', 'Life Saver', 'Take Me Home', 'Agua Colorada', 'Suke Quto'],
                        'Central Texas Food Bank': ['Pick-Me-Up', 'Kickstart', 'Spark', 'Rise and Shine', 'Santa Gema', 'Regalo'],
                        'Autism Society of Texas': ['Fresh Perspective', 'Good Vibes', 'Stimulate', 'Connection'],
                        'All of the above!': []
                  }

      }
]
