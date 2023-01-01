import jwt from 'jsonwebtoken'

const KEY = 'asdfasdflkjasfdlkajfalskdjfhlaksjdfalsjf'

export default function handler(req,res){

    if(req.body.username === '' || req.body.password === '') {
        res.json({error:'invalid username or password'})
        return
    }

    const user = atob(process.env.JUST_RANDOM1)
    const pass = atob(process.env.JUST_RANDOM2)
    const {username, password} = req.body

    if(user !== username || pass !== password){
        res.json({error:'invalid username or password'})
        return
    }

    res.json({
        token: jwt.sign({
            username,
            admin: username === user && password === pass
        }, KEY
        )
    })
}