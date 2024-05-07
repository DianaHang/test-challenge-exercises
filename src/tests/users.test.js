// You already have the methods imported
const users = require("../data").default;
const getUsers = require("../users");
const getUser = require("../users");
//import { default as expect } from "expect";
//import { getUser, getUsers } from "../users";

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want
// READ documentation

describe ('getUserById', () => {
    it ("It should retrieve the correct user for a given id", async () => {
        const user = await getUser[0];
        expect(getUserById(2)).toEqual(user);
    });
});

it ("It should fail to get the user", async () =>{
    const user = users[3];
    await expect(getUserById(2).toEqual(user));
});


