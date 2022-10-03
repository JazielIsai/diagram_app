import { ReactFlowProvider } from 'react-flow-renderer';
import {CanvasDiagram} from "./components/CanvasDiagram";
import {DataDiagram} from "./components/DataDiagram";
import {Header} from "./components/Header";

function App() {

  return (
      <ReactFlowProvider>
        <div className="">
          <Header />
          <div className='container mt-5'>
            <div className='row'>
              <div className='col-4'>
                <DataDiagram />
              </div>
              <div className='col-8'>
                <CanvasDiagram />
              </div>
            </div>
          </div>
        </div>
      </ReactFlowProvider>

);
}

export default App;
