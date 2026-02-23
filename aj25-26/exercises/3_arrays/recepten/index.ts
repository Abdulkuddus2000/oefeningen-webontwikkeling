interface Recipie {
  name: string;
  description: string;
  numberOfPeople: number;
  ingredients: {
    name: string;
    amount: string;
    price: number;
  }[];
  totalCost: number;
}

const lasagne: Recipie = {
  name: "Lasagne",
  description: "Delicious Lasagne",
  numberOfPeople: 5,
  ingredients: [
    {
      name: "lasagne pieces",
      amount: "1 pack",
      price: 2.5,
    },
  ],
  totalCost: 10.5,
};

console.log(lasagne);

export {};
