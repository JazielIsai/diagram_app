
export const createNode = ( id, type, label, x, y ) => {

    const node = {
        id: id,
        type: type,
        data: { label: label },
        position: { x: x, y: y },
    }

    return node;

}