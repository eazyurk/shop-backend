const { Model } = require('objection');

class User extends Model {
    static get tableName() {
        return 'user';
    }

    static get idColumn() {
        return 'user_id';
    }

    static get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

module.exports = User;