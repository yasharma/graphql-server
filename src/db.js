const { DataSource } = require("apollo-datasource");

const createDatabase = () => {
    return new Promise((resolve, reject) => {
        const db = new sqlite.Database(':memory:', (err) => {
            if (err) {
                return reject(err);
            }
            resolve(db);
        });
    });
};

const mock = [
    {
      id: 1,
      deliveryAddress: 'deliveryAddress',
      total: 100,
      items: '1,2',
      status: 'PAID',
      comment: 'Test comment'
    }
  ]

class Db extends DataSource {
    // async initialize() {
    //     this.db = await createDatabase();
    //     // do not change schema initialization it is here to provide an overview of data structures
    //     await this.executeCommand(`CREATE TABLE IF NOT EXISTS orders (
    //     id INTEGER PRIMARY KEY, 
    //     deliveryAddress TEXT NOT NULL,
    //     total REAL NOT NULL,
    //     items TEXT NOT NULL,
    //     discountCode TEXT,
    //     comment TEXT,
    //     status STRING NOT NULL
    //     );`);
    // }

    // close() {
    //     this.db.close();
    // }

    // executeQuery(query) {
    //     return new Promise((resolve, reject) => {
    //         this.db.all(query, (err, rows) => {
    //             if (err) {
    //                 return reject(err);
    //             }
    //             resolve(rows);
    //         });
    //     });
    // }

    // executeCommand(command) {
    //     return new Promise((resolve, reject) => {
    //         this.db.run(command, (err) => {
    //             if (err) {
    //                 return reject(err);
    //             }
    //             resolve();
    //         });
    //     });
    // }

    getOrders() {
        return mock
    }

    getOrder(id) {
      return mock.find(val => val.id === Number(id))
    }

    getOrderByStatus(status) {
      return mock.filter(val => val.status === status)
    }

    // updateOrderStatus(id, status) {
    //     return this.executeCommand(
    //         `UPDATE orders SET status='${status}' WHERE id=${id}`
    //     );
    // }
}

const db = new Db();

module.exports = db;
