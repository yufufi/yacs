// api.js
// ======

// storage.js
// ==========
class Branch {
    constructor() {
    }

    static get Local() {
    }
}

class Data {

    static init() {
        if (!_init) {
            
            // Type 3: Persistent datastore with automatic loading 
            Datastore = require('nedb'), this._db = new Datastore({ filename: '.datafile', autoload: true });
            // You can issue commands right away 
            
            _init = true;
        }
    }

    static get local() {
        return _localData;
    }

    static get empty() {
        return _emptyData;
    }

    static insert(input) {
        var currentMax = 0;
        Data._db.find({}).sort({_id: 1}).limit(1).exec(function (err, doc) {
        });
        Data._db.insert({ data: input, index: Data._index});
    }

    toString() {
        return this._data[0];
    }

}

Data.init();

var _emptyData = new Data("");

module.exports = {
    Data,
    clip: function({ input = "" } = {}) {
        Data.insert(input);
        return {success: true};
    },

    paste: function() {
        return {paste: Data.local};
    },

    search: function({from = Branch.Local} = {}) {}
};



