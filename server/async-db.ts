import mysql from 'mysql';
const pool = mysql.createPool({
  host     :  process.env.DATABASE_HOST || '127.0.0.1',
  user     :  process.env.DATABASE_USER || 'root',
  password :  process.env.DATABASE_PASSWORD || '',
  database :  process.env.DATABASE_DB || 'mysql'
})

export const query = ( sql:string, values:any ) => {
  return new Promise(( resolve, reject ) => {
    pool.getConnection((err, connection) =>{
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {

          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })
}
