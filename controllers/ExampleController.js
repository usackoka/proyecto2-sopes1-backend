import axios from 'axios'
import { json } from 'express'

export default {
    ejemploAxios: async (req, res, next) => {
        axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
            .then((response) => {
                console.log(response.data)
                res.status(200).send({data:response.data})
            })
            .catch((error) => {
                console.log(error)
                res.status(500).send({ msg: 'error en el servidor' })
            })
    }
}