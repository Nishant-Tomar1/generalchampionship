import React from 'react'
import { motion } from 'framer-motion'

function Feedback() {
  const variant = {
    entry : {
        opacity: [0,1], 
        transition:{
            duration:1.5,
            times:[0,1],
        }
    },
    exit : {
        opacity: [1,0], 
        transition:{
            duration:1.5,
            times:[0,1],
        }
    },
}
  return (
    <motion.div variants={variant} animate='entry' exit='exit'>
    
      Feedback
    </motion.div>
  )
}

export default Feedback
