// in real, axios.post => and patch this in the redux store
const database = [
  { carName: "Ford", carPrice: 17000, carCode: "FD" },
  { carName: "Toyota", carPrice: 15000, carCode: "TY" },
  { carName: "Honda", carPrice: 20000, carCode: "HD" },
  { carName: "Nissan", carPrice: 17000, carCode: "NS" },
  { carName: "Tesla", carPrice: 17000, carCode: "TSL" },
  { carName: "HYONDAI", carPrice: 17000, carCode: "HON" },
];

export type CarType = typeof database[0];
export type DataTypes = typeof database;

export const axios = {
  GET: (data: "ok" | "err") =>
    new Promise((resove, reject) => {
      if (data === "ok") {
        return resove(database);
      }

      if (data === "err") {
        return reject("this is reject message");
      }
    }),
};
