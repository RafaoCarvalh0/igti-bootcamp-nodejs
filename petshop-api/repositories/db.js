import pg from "pg";

async function connect() {
    if(global.connetion){
        global.connection.connect();
    };

    const pool = new pg.Pool({
        connectionString: "postgres://anozdbbk:To_ZmkPibeQ9DwLTfi80-x_ZAs8OJYnB@queenie.db.elephantsql.com/anozdbbk"
    });

    global.connection = pool;
    return pool.connect();
}

export {
    connect
} 