
export const createEdge = (id, source, target) => {

    const edge =  {
        id: id,
        source: source,
        target: target,
        animated: true,
        style: { stroke: '#0c1d97' },
    }

    return edge;
}