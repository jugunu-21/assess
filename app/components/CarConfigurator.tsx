'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// First define all interfaces
interface ChairConfiguratorProps {
    initialColor?: string;
}

interface ColorOption {
    name: string;
    color: string;
}

interface MaterialOption {
    name: string;
    value: string;
    color: string;
    roughness: number;
    metalness: number;
}

interface ChairStyle {
    name: string;
    value: string;
    description: string;
}

interface RGBEffect {
    name: string;
    value: string;
    colors: string[];
}

interface Accessory {
    name: string;
    value: string;
    position: [number, number, number];
}

// Constants
const baseColors: ColorOption[] = [
    { name: 'Racing Red', color: '#FF0000' },
    { name: 'Stealth Black', color: '#000000' },
    { name: 'Arctic White', color: '#FFFFFF' },
    { name: 'Neon Blue', color: '#0066FF' },
    { name: 'Toxic Green', color: '#00FF00' },
];

const accentColors: ColorOption[] = [
    { name: 'Gold Trim', color: '#FFD700' },
    { name: 'Carbon Black', color: '#1a1a1a' },
    { name: 'Chrome', color: '#C0C0C0' },
    { name: 'Neon Pink', color: '#FF69B4' },
];

const materials: MaterialOption[] = [
    { name: 'Premium Leather', value: 'leather', color: '#1a1a1a', roughness: 0.4, metalness: 0 },
    { name: 'Mesh Fabric', value: 'mesh', color: '#2C2C2C', roughness: 0.8, metalness: 0 },
    { name: 'Suede', value: 'suede', color: '#4A4A4A', roughness: 0.9, metalness: 0 },
    { name: 'Carbon Fiber', value: 'carbon', color: '#1a1a1a', roughness: 0.3, metalness: 0.4 },
];

const chairStyles: ChairStyle[] = [
    {
        name: 'Pro Racer',
        value: 'racer',
        description: 'Racing-inspired design with extra side support'
    },
    {
        name: 'Executive',
        value: 'executive',
        description: 'Classic gaming chair with premium comfort'
    },
    {
        name: 'Minimalist',
        value: 'minimalist',
        description: 'Sleek and modern design'
    },
];

const rgbEffects: RGBEffect[] = [
    {
        name: 'Rainbow Wave',
        value: 'rainbow',
        colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']
    },
    {
        name: 'Breathing',
        value: 'breathing',
        colors: ['#FF0000', '#000000']
    },
    {
        name: 'Static',
        value: 'static',
        colors: ['#0066FF']
    },
];

const accessories: Accessory[] = [
    { name: 'Neck Pillow', value: 'neck-pillow', position: [0, 1.8, 0] },
    { name: 'Lumbar Support', value: 'lumbar', position: [0, 1.2, 0.3] },
    { name: 'Cup Holder', value: 'cup-holder', position: [0.8, 0.8, 0] },
    { name: 'Footrest', value: 'footrest', position: [0, 0.2, 0.5] },
];

// Define the Model component first
function Model({
    baseColor,
    accentColor,
    material,
    style,
    rgbEffect,
    activeAccessories
}: {
    baseColor: string;
    accentColor: string;
    material: MaterialOption;
    style: string;
    rgbEffect: RGBEffect;
    activeAccessories: string[];
}) {
    const getChairGeometry = (style: string) => {
        switch (style) {
            case 'minimalist':
                return [3, 4, 1]; // Slimmer profile
            case 'executive':
                return [3.5, 4.5, 1.2]; // Larger, more substantial
            default: // racer
                return [3.2, 4.2, 1.1]; // Standard racing style
        }
    };

    const dimensions = getChairGeometry(style);

    return (
        <group position={[0, 0, 0]}>
            {/* Chair Base */}
            <mesh position={[0, 0.5, 0]} castShadow>
                <cylinderGeometry args={[1, 1.2, 0.3, 32]} />
                <meshStandardMaterial
                    color={accentColor}
                    metalness={material.metalness}
                    roughness={material.roughness}
                />
            </mesh>

            {/* Chair Post */}
            <mesh position={[0, 1.5, 0]} castShadow>
                <cylinderGeometry args={[0.2, 0.2, 2, 16]} />
                <meshStandardMaterial
                    color={accentColor}
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>

            {/* Seat */}
            <mesh position={[0, 2, 0]} castShadow>
                <boxGeometry args={[dimensions[0], 0.5, dimensions[0]]} />
                <meshStandardMaterial
                    color={baseColor}
                    metalness={material.metalness}
                    roughness={material.roughness}
                />
            </mesh>

            {/* Backrest */}
            <mesh position={[0, 3.5, -0.3]} rotation={[Math.PI * 0.05, 0, 0]} castShadow>
                <boxGeometry args={[dimensions[0], dimensions[1], 0.5]} />
                <meshStandardMaterial
                    color={baseColor}
                    metalness={material.metalness}
                    roughness={material.roughness}
                />
            </mesh>

            {/* Side Supports - only for racer style */}
            {style === 'racer' && (
                <>
                    <mesh position={[-1.5, 3.5, 0]} rotation={[0, 0, Math.PI * 0.1]} castShadow>
                        <boxGeometry args={[0.3, 2, 0.8]} />
                        <meshStandardMaterial color={accentColor} />
                    </mesh>
                    <mesh position={[1.5, 3.5, 0]} rotation={[0, 0, -Math.PI * 0.1]} castShadow>
                        <boxGeometry args={[0.3, 2, 0.8]} />
                        <meshStandardMaterial color={accentColor} />
                    </mesh>
                </>
            )}

            {/* RGB Lighting Effect */}
            <mesh position={[0, 2, 0]} castShadow>
                <torusGeometry args={[2, 0.05, 16, 32]} />
                <meshStandardMaterial
                    color={rgbEffect.colors[0]}
                    emissive={rgbEffect.colors[0]}
                    emissiveIntensity={0.5}
                />
            </mesh>

            {/* Accessories */}
            {activeAccessories.includes('neck-pillow') && (
                <group position={[0, 4.5, -0.2]}>
                    <mesh castShadow>
                        <boxGeometry args={[1.2, 0.4, 0.4]} />
                        <meshStandardMaterial
                            color={accentColor}
                            metalness={material.metalness * 0.5}
                            roughness={material.roughness * 1.2}
                        />
                    </mesh>
                </group>
            )}

            {activeAccessories.includes('lumbar') && (
                <group position={[0, 3, -0.1]}>
                    <mesh castShadow>
                        <boxGeometry args={[1.5, 0.8, 0.4]} />
                        <meshStandardMaterial
                            color={accentColor}
                            metalness={material.metalness * 0.5}
                            roughness={material.roughness * 1.2}
                        />
                    </mesh>
                </group>
            )}

            {activeAccessories.includes('cup-holder') && (
                <group position={[dimensions[0] / 2 + 0.3, 2.2, 0]}>
                    <mesh castShadow>
                        <cylinderGeometry args={[0.15, 0.15, 0.4, 16]} />
                        <meshStandardMaterial
                            color={accentColor}
                            metalness={0.7}
                            roughness={0.3}
                        />
                    </mesh>
                    <mesh position={[0, -0.1, 0]} castShadow>
                        <cylinderGeometry args={[0.05, 0.15, 0.1, 16]} />
                        <meshStandardMaterial
                            color={accentColor}
                            metalness={0.7}
                            roughness={0.3}
                        />
                    </mesh>
                </group>
            )}

            {activeAccessories.includes('footrest') && (
                <group position={[0, 0.8, 1]}>
                    <mesh castShadow rotation={[-Math.PI * 0.15, 0, 0]}>
                        <boxGeometry args={[dimensions[0] - 0.5, 0.1, 1]} />
                        <meshStandardMaterial
                            color={accentColor}
                            metalness={material.metalness}
                            roughness={material.roughness}
                        />
                    </mesh>
                    {/* Support bars */}
                    <mesh position={[-0.8, 0, -0.3]} castShadow>
                        <cylinderGeometry args={[0.05, 0.05, 0.6, 8]} />
                        <meshStandardMaterial color={accentColor} metalness={0.8} roughness={0.2} />
                    </mesh>
                    <mesh position={[0.8, 0, -0.3]} castShadow>
                        <cylinderGeometry args={[0.05, 0.05, 0.6, 8]} />
                        <meshStandardMaterial color={accentColor} metalness={0.8} roughness={0.2} />
                    </mesh>
                </group>
            )}
        </group>
    );
}

// Then create the dynamic import
const DynamicModel = dynamic(() => Promise.resolve(Model), { ssr: false });

interface ThreeSceneProps {
    baseColor: string;
    accentColor: string;
    material: MaterialOption;
    style: string;
    rgbEffect: RGBEffect;
    activeAccessories: string[];
}

// Add a loading component
const LoadingSpinner = () => (
    <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
    </div>
);

// Update ThreeScene component
const ThreeScene = ({
    baseColor,
    accentColor,
    material,
    style,
    rgbEffect,
    activeAccessories
}: ThreeSceneProps) => {
    return (
        <Canvas shadows dpr={[1, 2]} camera={{ position: [8, 4, 8], fov: 50 }}>
            <color attach="background" args={['#f0f0f0']} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight
                position={[-10, 10, -10]}
                angle={0.5}
                intensity={1}
            />
            <Stage
                environment="warehouse"
                intensity={1}
                shadows
                preset="rembrandt"
                adjustCamera={false}
            >
                <Suspense fallback={null}>
                    <DynamicModel
                        baseColor={baseColor}
                        accentColor={accentColor}
                        material={material}
                        style={style}
                        rgbEffect={rgbEffect}
                        activeAccessories={activeAccessories}
                    />
                </Suspense>
            </Stage>
            <OrbitControls
                enablePan={false}
                enableZoom={true}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
                maxDistance={20}
                minDistance={4}
            />
        </Canvas>
    );
};

const ClientOnlyThreeScene = dynamic(() => Promise.resolve(ThreeScene), {
    ssr: false
});

export default function ChairConfigurator({ initialColor = '#FF0000' }: ChairConfiguratorProps) {
    const [mounted, setMounted] = useState(false);
    const [baseColor, setBaseColor] = useState(initialColor);
    const [accentColor, setAccentColor] = useState('#1a1a1a');
    const [currentSection, setCurrentSection] = useState('style');
    const [currentMaterial, setCurrentMaterial] = useState(materials[0]);
    const [currentStyle, setCurrentStyle] = useState(chairStyles[0].value);
    const [currentRGBEffect, setCurrentRGBEffect] = useState(rgbEffects[0]);
    const [activeAccessories, setActiveAccessories] = useState<string[]>([]);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Only show loading spinner during initial mount
    if (!mounted) {
        return <LoadingSpinner />;
    }

    const navigationItems = [
        { name: 'STYLE', value: 'style' },
        { name: 'COLORS', value: 'colors' },
        { name: 'MATERIAL', value: 'material' },
        { name: 'RGB LIGHTING', value: 'rgb' },
        { name: 'ACCESSORIES', value: 'accessories' },
    ];

    const toggleAccessory = (value: string) => {
        setActiveAccessories(prev =>
            prev.includes(value)
                ? prev.filter(a => a !== value)
                : [...prev, value]
        );
    };

    return (
        <div className="relative w-full h-screen flex flex-col">
            {/* Top Navigation */}
            <div className="w-full bg-white border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <button
                                key={item.value}
                                suppressHydrationWarning
                                className={`py-4 px-2 border-b-2 ${currentSection === item.value
                                    ? 'border-purple-500 text-black font-semibold'
                                    : 'border-transparent text-gray-700 hover:text-black'
                                    }`}
                                onClick={() => setCurrentSection(item.value)}
                            >
                                {item.name}
                            </button>
                        ))}
                        {/* <button
                            suppressHydrationWarning
                            className="ml-auto px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                        >
                            ADD TO CART
                        </button> */}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 relative">
                <ClientOnlyThreeScene
                    baseColor={baseColor}
                    accentColor={accentColor}
                    material={currentMaterial}
                    style={currentStyle}
                    rgbEffect={currentRGBEffect}
                    activeAccessories={activeAccessories}
                />
            </div>

            {/* Configuration Panel */}
            <div className="absolute top-24 right-4 w-80 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl">
                {currentSection === 'style' && (
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-4 text-black">Chair Style</h3>
                        <div className="space-y-4">
                            {chairStyles.map((style) => (
                                <button
                                    key={style.value}
                                    suppressHydrationWarning
                                    className={`w-full p-4 rounded-lg border-2 ${currentStyle === style.value
                                        ? 'border-purple-500 bg-purple-50'
                                        : 'border-gray-300 hover:border-purple-300'
                                        }`}
                                    onClick={() => setCurrentStyle(style.value)}
                                >
                                    <h4 className="font-bold text-black">{style.name}</h4>
                                    <p className="text-sm text-gray-800 mt-1">{style.description}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {currentSection === 'colors' && (
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-4 text-black">Base Color</h3>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {baseColors.map((option) => (
                                <button
                                    key={option.name}
                                    className={`w-10 h-10 rounded-full border-2 ${baseColor === option.color ? 'border-purple-500 ring-2 ring-purple-300' : 'border-gray-300'}`}
                                    style={{ backgroundColor: option.color }}
                                    onClick={() => setBaseColor(option.color)}
                                    title={option.name}
                                />
                            ))}
                        </div>
                        <h4 className="text-lg font-bold mb-3 text-black">Accent Color</h4>
                        <div className="flex flex-wrap gap-3">
                            {accentColors.map((option) => (
                                <button
                                    key={option.name}
                                    className={`w-10 h-10 rounded-full border-2 ${accentColor === option.color ? 'border-purple-500 ring-2 ring-purple-300' : 'border-gray-300'}`}
                                    style={{ backgroundColor: option.color }}
                                    onClick={() => setAccentColor(option.color)}
                                    title={option.name}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {currentSection === 'material' && (
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-4 text-black">Material</h3>
                        <div className="space-y-3">
                            {materials.map((material) => (
                                <button
                                    key={material.value}
                                    className={`w-full p-4 rounded-lg border-2 ${currentMaterial.value === material.value
                                        ? 'border-purple-500 bg-purple-50'
                                        : 'border-gray-300 hover:border-purple-300'
                                        }`}
                                    onClick={() => setCurrentMaterial(material)}
                                >
                                    <h4 className="font-bold text-black">{material.name}</h4>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {currentSection === 'rgb' && (
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-4 text-black">RGB Lighting</h3>
                        <div className="space-y-3">
                            {rgbEffects.map((effect) => (
                                <button
                                    key={effect.value}
                                    className={`w-full p-4 rounded-lg border-2 ${currentRGBEffect.value === effect.value
                                        ? 'border-purple-500 bg-purple-50'
                                        : 'border-gray-300 hover:border-purple-300'
                                        }`}
                                    onClick={() => setCurrentRGBEffect(effect)}
                                >
                                    <h4 className="font-bold text-black">{effect.name}</h4>
                                    <div className="flex gap-1 mt-2">
                                        {effect.colors.map((color, i) => (
                                            <div
                                                key={i}
                                                className="w-6 h-6 rounded-full border border-gray-300"
                                                style={{ backgroundColor: color }}
                                            />
                                        ))}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {currentSection === 'accessories' && (
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-4 text-black">Accessories</h3>
                        <div className="space-y-3">
                            {accessories.map((accessory) => (
                                <button
                                    key={accessory.value}
                                    className={`w-full p-4 rounded-lg border-2 ${activeAccessories.includes(accessory.value)
                                        ? 'border-purple-500 bg-purple-50'
                                        : 'border-gray-300 hover:border-purple-300'
                                        }`}
                                    onClick={() => toggleAccessory(accessory.value)}
                                >
                                    <h4 className="font-bold text-black">{accessory.name}</h4>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Summary Icons */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                {['comfort', 'ergonomics', 'durability', 'style', 'features'].map((icon) => (
                    <button
                        key={icon}
                        suppressHydrationWarning
                        className="w-8 h-8 bg-purple-800 rounded-full hover:bg-purple-700 transition-colors"
                    />
                ))}
            </div>
        </div>
    );
} 