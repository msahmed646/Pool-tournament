import { motion } from 'framer-motion'


export default function Shuffle({ run = false }){
return (
<div style={{ height: 40, overflow: 'hidden' }}>
{run && (
<motion.div
initial={{ x: '-100%' }}
animate={{ x: '100%' }}
transition={{ repeat: 3, duration: 0.6, ease: 'easeInOut' }}
style={{ height: 6, background: 'linear-gradient(90deg,#ccc, #888, #ccc)' }}
/>
)}
</div>
)
}