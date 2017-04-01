// api.js
// ======

// storage.js
// ==========
class Branch {
    constructor() {
    }

    static get Local() : string{
        return "";
    }
}

import * as Datastore from "nedb";

class Data {

    static _init: boolean;
    static _db = Datastore;

    static init() {
        if (!Data._init) {

            Data._currentMax = 0;

            // Type 3: Persistent datastore with automatic loading 
            Data._db = new Datastore({ filename: '.datafile', autoload: true });

            Data._db.find({}).sort({index: -1}).limit(1).exec(function (err, doc) {
                Data._currentMax = doc[0].index;
            });
            // You can issue commands right away 
            
            Data._init = true;
        }
    }

    static get local() {
        console.log("Requesting with: " + Data._currentMax);
        var dataToBeReturned = undefined;
        Data._db.find({index: Data._currentMax}).exec(function (err, doc) {
                console.log("got the doc " + doc);
                dataToBeReturned =  doc[0].data;
        });
        console.log("returning");
        return dataToBeReturned;
    }

    static insert(input) {
        Data._currentMax++;
        Data._db.insert({ data: input, index: Data._currentMax});
        console.log("Inserting " + input + " with: " + Data._currentMax);
    }

    static _currentMax : number;

    toString() {
        return ""; //this._data[0];
    }
}

Data.init();

export class api {
    public clip({input = "" } = {}){
        Data.insert(input);
        return {success: true};
    }

    public paste() {
        var d = Data.local;
        console.log("d: " + d);
        var z = {"paste": d};
        console.log("z: " + z);
        return z;
    }

    public search({from = Branch.Local} = {})
    {
    }
}
