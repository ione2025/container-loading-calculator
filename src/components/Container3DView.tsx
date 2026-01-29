import React, { useRef, useEffect } from 'react';
import { useLoadingStore } from '../store/loadingStore';
import * as THREE from 'three';

const Container3DView: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { container, products } = useLoadingStore();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.shadowMap.enabled = true;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const containerGeometry = new THREE.BoxGeometry(
      container.length,
      container.height,
      container.width
    );
    const containerEdges = new THREE.EdgesGeometry(containerGeometry);
    const containerLines = new THREE.LineSegments(
      containerEdges,
      new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 })
    );
    scene.add(containerLines);

    const containerMesh = new THREE.Mesh(
      containerGeometry,
      new THREE.MeshPhongMaterial({
        color: 0x3498db,
        transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide,
      })
    );
    scene.add(containerMesh);

    const colors = [0xff6b6b, 0x4ecdc4, 0xffe66d, 0x95e1d3, 0xf38181];
    let currentZ = -container.width / 2;
    let colorIndex = 0;

    products.forEach((product) => {
      const productLength = product.length / 100;
      const productWidth = product.width / 100;
      const productHeight = product.height / 100;

      for (let i = 0; i < product.quantity; i++) {
        if (currentZ + productWidth > container.width / 2) {
          currentZ = -container.width / 2;
        }

        const geometry = new THREE.BoxGeometry(
          productLength,
          productHeight,
          productWidth
        );
        const material = new THREE.MeshPhongMaterial({
          color: colors[colorIndex % colors.length],
          transparent: false,
        });
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.set(
          0,
          -container.height / 2 + productHeight / 2,
          currentZ + productWidth / 2
        );

        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({ color: 0x000000 })
        );
        line.position.copy(mesh.position);

        scene.add(mesh);
        scene.add(line);

        currentZ += productWidth + 0.05;
      }

      colorIndex++;
    });

    const distance = Math.max(container.length, container.width, container.height) * 2.5;
    camera.position.set(distance * 0.7, distance * 0.5, distance * 0.7);
    camera.lookAt(0, 0, 0);

    const gridHelper = new THREE.GridHelper(20, 20, 0xcccccc, 0xdddddd);
    gridHelper.position.y = -container.height / 2 - 0.01;
    scene.add(gridHelper);

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotation = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        rotation.y += deltaX * 0.005;
        rotation.x += deltaY * 0.005;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomSpeed = 0.1;
      const direction = e.deltaY > 0 ? 1 : -1;
      camera.position.multiplyScalar(1 + direction * zoomSpeed);
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('wheel', handleWheel);

    const animate = () => {
      requestAnimationFrame(animate);

      const distance = camera.position.length();
      camera.position.x = distance * Math.cos(rotation.y) * Math.cos(rotation.x);
      camera.position.y = distance * Math.sin(rotation.x);
      camera.position.z = distance * Math.sin(rotation.y) * Math.cos(rotation.x);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!canvasRef.current) return;
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('wheel', handleWheel);
      renderer.dispose();
    };
  }, [container, products]);

  return (
    <div className="card" style={{ height: '100%', minHeight: '600px' }}>
      <h2>3D Container View</h2>
      <p style={{ marginBottom: '1rem', color: '#666', fontSize: '0.9rem' }}>
        Drag to rotate • Scroll to zoom
      </p>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: 'calc(100% - 80px)',
          borderRadius: '8px',
          cursor: 'grab',
        }}
      />
    </div>
  );
};

export default Container3DView;
