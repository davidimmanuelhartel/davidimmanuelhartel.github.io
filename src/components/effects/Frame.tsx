import { useRef, useState } from "react";

import { useFrame } from "@react-three/fiber";
import { EllipseCurve } from "three";

import * as random from "maath/random";
import * as buffer from "maath/buffer";
import * as triangle from "maath/triangle";
import * as threeUtils from "maath/three";

import { Points } from "@react-three/drei";

function TrianglesDemo() {
  const pointsRef = useRef<THREE.Points>(null!);
  const lineRef = useRef<any>(null!);
  const circleRef = useRef<any>(null!);
  const circle2Ref = useRef<any>(null!);

  const [{ points, pointsB, final }] = useState(() => {
    // generate two sets of 4 points in a circle, that we'll use for our circumcircle visualization
    const points = random.inCircle(new Float32Array(4 * 2), { radius: 0.3 });
    const pointsB = random.inCircle(points.slice(0), { radius: 0.4 });
    const final = pointsB.slice(0);

    return { points, pointsB, final };
  });

  useFrame(({ clock }, _) => {
    const t = Math.sin(clock.getElapsedTime()) + 2 * 0.4;

    // lerp between the two different sets of point, thus animating the two visualized triangles
    buffer.lerp(points, pointsB, final, t);

    // get the points as an array, to use them to create the geometries
    const [a, b, c, d] = threeUtils.bufferToVectors(final, 2);

    // prettier-ignore
    lineRef.current.geometry.setFromPoints([ 
      a , b , c, a,
      b, c, d, b
    ], 2);

    {
      // get the circumcircle for the first triangle
      const circle = triangle.getCircumcircle([
        [a.x, a.y],
        [b.x, b.y],
        [c.x, c.y],
      ]);

      const curve = new EllipseCurve(
        circle!.x,
        circle!.y,
        circle!.r,
        circle!.r,
        0,
        2 * Math.PI,
        false,
        0
      );

      circleRef.current.geometry.setFromPoints(curve.getPoints(128));
    }

    {
      // get the circumcircle for the second triangle
      const circle = triangle.getCircumcircle([
        [b.x, b.y],
        [c.x, c.y],
        [d.x, d.y],
      ]);

      const curve = new EllipseCurve(
        circle!.x,
        circle!.y,
        circle!.r,
        circle!.r,
        0,
        2 * Math.PI,
        false,
        0
      );

      circle2Ref.current.geometry.setFromPoints(curve.getPoints(128));
    }
  });

  return (
    <>
      {/* @ts-ignore */}
      <Points positions={final} stride={2} ref={pointsRef}>
        <pointsMaterial size={5} />
      </Points>

      {/* @ts-ignore */}
      <line castShadow ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial />
      </line>
      {/* @ts-ignore */}
      <line castShadow ref={circleRef}>
        <bufferGeometry />
        <lineBasicMaterial color={0x000000} />
      </line>
      {/* @ts-ignore */}
      <line castShadow ref={circle2Ref}>
        <bufferGeometry />
        <lineBasicMaterial color={0x000000} />
      </line>
    </>
  );
}

export default TrianglesDemo;
