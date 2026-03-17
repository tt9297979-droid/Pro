import { getSignal } from '../../lib/ai'

export default function handler(req,res){

  const signal = getSignal()

  res.json(signal)

}
