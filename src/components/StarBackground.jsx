import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as random from 'maath/random/dist/maath-random.esm';

function StarBackgroundProps(props) {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  // Subtle scroll-linked zoom on the starfield: as the visitor scrolls
  // through the page, the field slowly scales up, like drifting deeper
  // into the universe rather than a static, flat backdrop.
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);

  return (
    <motion.div
      style={{ scale }}
      className="w-full h-auto fixed inset-0 z-[0] pointer-events-none"
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackgroundProps />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
