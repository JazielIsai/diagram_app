import {useRef, useCallback} from "react";
import ReactFlow, {
    Controls,
    Background,
    MiniMap,
    useNodesState,
    useEdgesState,
    addEdge
} from 'react-flow-renderer';
import DownloadButton from "./DownloadDiagram";


export const CanvasDiagram = () => {

    const reactFlowWrapper = useRef(null);

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

    return (
        <div className='reactflow-wraper' ref={reactFlowWrapper}>
            <DownloadButton />
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onConnect={onConnect}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    )
}