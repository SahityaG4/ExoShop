const data = {
  products: [
    {
      _id: "1",
      name: "Cute Coffee",
      category: "coffees",
      // image: "./images/baekhyun.jpg", -> this wont work since we need to import here itself and then export it.
      image: require("./images/baekhyun.jpg"),
      price: "120",
      brand: "prive alliance",
      rating: "2.5",
      numReviews: "10",
      description: "I don't know what this is but buy because baekie made it ><"
    },
    {
        _id: "2",
        name: "Hot Coffee",
        category: "coffees",
        image: require("./images/kai.jpg"),
        price: "120",
        brand: "Gucci",
        rating: "3",
        numReviews: "10",
        description: "dont look at me look at the coffee and buy"
      },
      {
        _id: "3",
        name: "My Coffee",
        category: "coffees",
        image: require("./images/chanyeol.jpg"),
        price: "120",
        brand: "prada",
        rating: "4",
        numReviews: "10",
        description: "can only be delivered to my bae"
      },
      {
        _id: "4",
        name: "smoll Coffee",
        category: "coffees",
        image: require("./images/DO.jpg"),
        price: "120",
        brand: "Christian DO",
        rating: "5",
        numReviews: "10",
        description: "I dont care whether you buy or not but if you give negative rating you will see the end"
      },
      {
        _id: "5",
        name: "Mom Coffee",
        category: "coffees",

        image: require("./images/suho.jpg"),
        price: "120",
        brand: "bvlgari",
        rating: "4.5",
        numReviews: "10",
        description: "By drinking my coffee I am able to manage 9 immature kids so this is the best coffee"
      },
  ],
};

export default  data;