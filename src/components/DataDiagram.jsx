import {useState} from "react";
import {useReactFlow} from "react-flow-renderer";
//method or hooks that it created
import {useForm} from "../hooks/useForm";
import {createNode} from "../helpers/createNode";
import {createEdge} from "../helpers/createEdge";


export const DataDiagram = () => {

    // in this state is for get and see the nodes that it was created
    const [getAllNodes, setAllNodes] = useState([]);
    // generate a id
    const [generateId, setGenerateId] = useState(0);

    // reference to react-flow-render content
    const reactFlowInstance = useReactFlow();

    const getNodes = reactFlowInstance.getNodes();
    const setNodes = reactFlowInstance.setNodes;
    const setEdges = reactFlowInstance.setEdges;

    // this is for get the date of form
    const {formState, onFormChange, onReset} = useForm();

    const addNode = () => {
        if (getNodes.length === 0) {
            // it is adding a node to the state "setNodes" for after see in the canvas
            setNodes( dt => [...dt, createNode('n-title-1', 'input', formState?.nameNode,350, 50) ]  )
            // it is adding the custom state for the use here
            setAllNodes( dt => [...dt, createNode('n-title-1', 'input', formState?.nameNode,100, 50)]  )
            // add 1 the id
            setGenerateId(generateId + 1);
        } else {
            // it is adding a node to the state "setNodes" for after see in the canvas
            setNodes( dt => [...dt, createNode(`n-${generateId}-${formState?.nameNode}`, '', formState?.nameNode,100, 50)]  )
            setAllNodes( dt => [...dt, createNode(`n-${generateId}-${formState?.nameNode}`, '', formState?.nameNode,100, 50)]  )
            // it is adding a connection to the state "setEdges" for after see in the canvas
            setEdges( dt => [...dt, createEdge(`c-${generateId}-${formState?.nameNode}`, formState?.idNode, `n-${generateId}-${formState?.nameNode}`)] )
            setGenerateId(generateId + 1);
        }
    }



    return (
        <div className='d-flex align-middle justify-content-center h-100 m-auto'>
            <div className='d-flex flex-column'>
                <h2> Generar Nodos </h2>

                <form className='d-flex flex-column'>

                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupFile01"> Nombre del nodo </label>
                        <input type="text" className="form-control" id="inputGroupFile01" name='nameNode' onChange={onFormChange} />
                    </div>

                    {
                        getAllNodes.length > 0 && (
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01"> Se conectará a: </label>
                                <select className="form-select" id="inputGroupSelect01" name='idNode' onChange={onFormChange}>
                                    <option selected>Escoge el nodo al que se conectará...</option>
                                    {
                                        getAllNodes.map( dt => (
                                            <option
                                                key={dt.id}
                                                value={dt.id}
                                            >
                                                { dt.data.label }
                                            </option>
                                        ) )
                                    }
                                </select>
                            </div>
                        )
                    }

                    <input type='button' value='Guardar' className='btn btn-success' onClick={addNode} />
                </form>
            </div>
        </div>
    )
}