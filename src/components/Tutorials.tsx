import React, { useState } from 'react';
import { TUTORIAL_NODES } from '../data/cadData';
import { TutorialNode } from '../types';
import { Network, Play, User, Eye, CheckCircle, Flame, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Tutorials() {
  const [selectedSystem, setSelectedSystem] = useState('All');
  const [selectedNodeId, setSelectedNodeId] = useState('tut-1');

  const selectedNode = TUTORIAL_NODES.find(n => n.id === selectedNodeId) || TUTORIAL_NODES[0];

  const cadSystems = ['All', 'SolidWorks', 'Fusion 360', 'Onshape', 'Inventor', 'Creo', 'CATIA', 'FreeCAD'];

  // Filtering determines compatibility level of nodes
  const isCompatible = (node: TutorialNode) => {
    if (selectedSystem === 'All') return true;
    return node.cadSystems.includes(selectedSystem);
  };

  // Node coordinates on the map so we can draw a high-fidelity technical SVG graph!
  const nodeCoordinates: Record<string, { x: number; y: number }> = {
    'tut-1': { x: 80, y: 150 },   // Fundamentals
    'tut-2': { x: 200, y: 80 },   // Parametrization
    'tut-3': { x: 200, y: 220 },  // Surfacing
    'tut-4': { x: 320, y: 80 },   // Sheet Metal
    'tut-5': { x: 320, y: 220 },  // Advanced Assemblies
    'tut-6': { x: 440, y: 150 }   // Speed Techniques
  };

  return (
    <section id="tutorials" className="relative overflow-hidden bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
      <div className="absolute inset-0 engineering-grid-fine opacity-20 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        
        {/* Title */}
        <div className="space-y-4 mb-10 text-left">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-6 bg-brand-green rounded-full" />
            <span className="font-mono text-xs text-brand-green uppercase font-bold">SECTION_07 // KNOWLEDGE_NODE_NETWORK</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            A Nonlinear Knowledge Network
          </h2>
          <p className="font-sans text-sm text-zinc-400 max-w-2xl leading-relaxed">
            CAD expertise is not a straight road; it is a web of integrated disciplines. Filter nodes by 
            your preferred CAD system to trace prerequisites, unlock advanced modules, and chart your course.
          </p>
        </div>

        {/* CAD Filter Selector Bar */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-zinc-900/60 mb-8 justify-start">
          {cadSystems.map((sys) => {
            const isSelected = sys === selectedSystem;
            return (
              <button
                key={sys}
                onClick={() => setSelectedSystem(sys)}
                className={`font-mono text-[10px] uppercase font-bold px-3 py-1.5 rounded border transition-all ${
                  isSelected 
                    ? 'border-brand-green bg-zinc-900 text-brand-green shadow-[0_0_8px_rgba(34,197,94,0.15)]' 
                    : 'border-zinc-900 bg-[#060608] text-zinc-500 hover:border-zinc-800'
                }`}
              >
                {sys}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Left Column: Technical SVG Interactive Graph (7 cols) */}
          <div className="lg:col-span-7 bg-black border border-zinc-900 rounded-lg p-4 relative overflow-hidden flex flex-col justify-between min-h-[360px]">
            <div className="absolute top-2 left-2 font-mono text-[8px] text-zinc-600">SYS_KNET: NEURAL_PATHWAY_RESOLVER</div>
            <div className="absolute top-2 right-2 flex items-center gap-1.5">
              <span className="font-mono text-[8px] text-zinc-500">ACTIVE_COEFFICIENT: 0.98</span>
            </div>

            {/* SVG graph */}
            <div className="relative w-full aspect-[16/9] my-6">
              <svg viewBox="0 0 520 300" className="w-full h-full text-zinc-900 fill-none" style={{ overflow: 'visible' }}>
                
                {/* Connections Lines / prerequisite traces */}
                {TUTORIAL_NODES.map((node) => {
                  const startCoord = nodeCoordinates[node.id];
                  return node.connections.map((connId) => {
                    const endCoord = nodeCoordinates[connId];
                    if (!startCoord || !endCoord) return null;
                    
                    const isNodeComp = isCompatible(node);
                    const isConnComp = isCompatible(TUTORIAL_NODES.find(n => n.id === connId) || TUTORIAL_NODES[0]);
                    const isPathHighlighted = isNodeComp && isConnComp;

                    return (
                      <line
                        key={`${node.id}-${connId}`}
                        x1={startCoord.x}
                        y1={startCoord.y}
                        x2={endCoord.x}
                        y2={endCoord.y}
                        stroke={isPathHighlighted ? '#9333ea' : '#18181b'}
                        strokeWidth={isPathHighlighted ? 1.5 : 1}
                        strokeDasharray={isPathHighlighted ? 'none' : '3 3'}
                        className="transition-all duration-300"
                        strokeOpacity={isPathHighlighted ? 0.6 : 0.2}
                      />
                    );
                  });
                })}

                {/* Draw Node Circles */}
                {TUTORIAL_NODES.map((node) => {
                  const coord = nodeCoordinates[node.id];
                  if (!coord) return null;

                  const isComp = isCompatible(node);
                  const isSpotlighted = node.id === selectedNodeId;

                  return (
                    <g
                      key={node.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedNodeId(node.id)}
                    >
                      {/* Pulse ring for spotlighted node */}
                      <circle
                        cx={coord.x}
                        cy={coord.y}
                        r={isSpotlighted ? 18 : 10}
                        className={`transition-all duration-300 fill-none ${
                          isSpotlighted 
                            ? 'stroke-brand-green animate-pulse' 
                            : isComp 
                              ? 'stroke-brand-purple/40 hover:stroke-brand-purple' 
                              : 'stroke-zinc-900'
                        }`}
                        strokeWidth="1.5"
                      />
                      {/* Central node core */}
                      <circle
                        cx={coord.x}
                        cy={coord.y}
                        r={isSpotlighted ? 8 : 5}
                        className={`transition-colors duration-300 ${
                          isSpotlighted 
                            ? 'fill-brand-green' 
                            : isComp 
                              ? 'fill-brand-purple' 
                              : 'fill-zinc-900'
                        }`}
                      />
                      {/* Floating node label */}
                      <text
                        x={coord.x}
                        y={coord.y + 26}
                        className={`font-mono text-[7px] tracking-widest text-center ${
                          isSpotlighted 
                            ? 'fill-brand-green font-bold' 
                            : isComp 
                              ? 'fill-zinc-400' 
                              : 'fill-zinc-700'
                        }`}
                        textAnchor="middle"
                      >
                        {node.category.toUpperCase()}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Quick blueprint legend */}
            <div className="flex items-center gap-4 bg-zinc-950/40 border border-zinc-900/60 p-2.5 rounded font-mono text-[8px] text-zinc-500">
              <span className="font-bold">GRID_LEGEND:</span>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-brand-green" />
                <span>ACTIVE_SPOTLIGHT</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-brand-purple" />
                <span>COMPATIBLE_MODULE</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-zinc-900" />
                <span>INCOMPATIBLE_MODULE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Active Node Telemetry / Tutorial content details (5 cols) */}
          <div className="lg:col-span-5 bg-zinc-950 border border-zinc-900 p-6 rounded flex flex-col justify-between text-left">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <div className="flex items-center gap-2">
                  <Network className="h-4 w-4 text-brand-purple" />
                  <span className="font-mono text-xs text-zinc-300 font-bold uppercase">{selectedNode.category} Module</span>
                </div>
                <span className="font-mono text-[9px] text-zinc-600 font-bold">NODE_REF: {selectedNode.id.toUpperCase()}</span>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-white tracking-tight leading-snug">
                  {selectedNode.title}
                </h3>
                <div className="mt-3 flex items-center gap-2">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase">PREREQS:</span>
                  <div className="flex gap-1.5">
                    {selectedNode.connections.map((connId) => (
                      <span key={connId} className="font-mono text-[8px] bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-400 border border-zinc-800/40">
                        {connId.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course metadata panels */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-[#060608] border border-zinc-900 p-2.5 rounded">
                  <span className="font-mono text-[8px] text-zinc-500 uppercase flex items-center gap-1">
                    <User className="h-3 w-3 text-brand-purple" />
                    <span>INSTRUCTOR</span>
                  </span>
                  <div className="font-display font-semibold text-white text-xs mt-1">
                    {selectedNode.instructor}
                  </div>
                </div>
                <div className="bg-[#060608] border border-zinc-900 p-2.5 rounded">
                  <span className="font-mono text-[8px] text-zinc-500 uppercase flex items-center gap-1">
                    <Eye className="h-3 w-3 text-brand-green" />
                    <span>AUDITED_VIEWS</span>
                  </span>
                  <div className="font-display font-semibold text-brand-green text-xs mt-1">
                    {selectedNode.views.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Compatibility warning / list */}
              <div className="space-y-2">
                <span className="font-mono text-[8px] text-zinc-500 uppercase block">COMPATIBLE_COMPILERS</span>
                <div className="flex flex-wrap gap-1">
                  {selectedNode.cadSystems.map((sys) => {
                    const isSelectedSys = sys === selectedSystem;
                    return (
                      <span
                        key={sys}
                        className={`font-mono text-[8px] px-1.5 py-0.5 rounded border ${
                          isSelectedSys 
                            ? 'border-brand-green bg-brand-green/10 text-brand-green' 
                            : 'border-zinc-800/60 bg-zinc-900/40 text-zinc-500'
                        }`}
                      >
                        {sys}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Launch node module CTA */}
            <div className="mt-8 pt-4 border-t border-zinc-900/60 flex flex-col sm:flex-row gap-2 items-center">
              <button className="w-full inline-flex items-center justify-center gap-2 rounded bg-brand-purple py-2.5 px-4 font-mono text-xs font-bold uppercase text-white hover:bg-brand-purple-light transition-all shadow-[0_0_12px_rgba(147,51,234,0.2)]">
                <Play className="h-3.5 w-3.5 fill-white" />
                <span>Launch Tutorial Module</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
