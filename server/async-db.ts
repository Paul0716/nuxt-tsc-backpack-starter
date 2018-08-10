import mysql from 'mysql';
const pool = mysql.createPool({
  host     :  '127.0.0.1',
  user     :  'root',
  password :  '',
  database :  'mysql'
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
