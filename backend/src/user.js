export class User {
    
    #users = [];

    constructor() {}

    get all() {
        return this.#users;
    }

    add(username, socketId) {
        if(!this.#users.map(user => user.id).includes(socketId))
            this.#users.push({ id: socketId, username });
    }

    remove(socketId) {
        const index = this.#users.map(user => user.id).indexOf(socketId);
        if(index > -1) this.#users.splice(index, 1);
    }

    selectCard(card, socketId) {
        const index = this.#users.map(user => user.id).indexOf(socketId);
        if(index > -1) Object.assign(this.#users[index], { card });
    }

    resetCards() {
        this.#users.map(user => delete user.card);
    }

}
