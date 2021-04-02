'use strict'

import util from 'util'
import mysql from 'mysql'

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'nuxtuser',
  password: 'nuxtpass',
  database: 'nuxtDB'
})

pool.getConnection((err, connection) => {
  if(err) {
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed')
    }
    if(err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections')
    }
    if(err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.')
    }
  }
  // Release the connection to the pool if no error
  if(connection) {
    connection.release()
  }
})
pool.query = util.promisify(pool.query)

export default pool