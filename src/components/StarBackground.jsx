import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import * as random from 'maath/random/dist/maath-random.esm';

// Reads the active theme's accent color and blends it toward white,
// so the star field carries a subtle tint of whatever theme loaded
// this time instead of always looking identical (plain white) no
// matter which theme is active.
function getThemeTintedStarColor() {
  try {
    const styles = getComputedStyle(document.documentElement);
    const raw = styles.getPropertyValue('--accent-1-rgb').trim();
    const [r, g, b] = raw
      .split(/[\s,]+/)
      .map((n) => Number.parseInt(n, 10) / 255);

    if (![r, g, b].every(Number.isFinite)) {
      return new THREE.Color('#ffffff');
    }

    const accent = new THREE.Color(r, g, b);
    const white = new THREE.Color(1, 1, 1);
    // Mostly white (so stars still read as stars), with a soft theme tint
    return white.lerp(accent, 0.35);
  } catch (e) {
    return new THREE.Color('#ffffff');
  }
}

function StarField(props) {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(6000), { radius: 1.2 });
  const starColor = useMemo(() => getThemeTintedStarColor(), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={starColor}
          size={0.0022}
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
      <Canvas camera={{ position: [0, 0, 1] }} gl={{ alpha: true }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
