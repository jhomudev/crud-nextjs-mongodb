import { connect, connection } from 'mongoose'

export const conn = {
  isConnected : false
}

export async function connectDB(){
  if(conn.isConnected) return
  const db = await connect(process.env.MONGO_URI) // in neccesary put 127.0.0.1 and no localhost
  console.log(db.connection.db)
  conn.isConnected = db.connections[0].readyState
}

connection.on('connected', ()=>{
  console.log('Mongoose db connected')
})

connection.on;('error', (err)=>{
  console.log('Mongoose db connection error', err)
})