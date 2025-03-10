import { createBrowserRouter } from "react-router-dom"
import CustomLabWrapper from "../LABS/custom_lab_wrapper"
import { NodePositionProvider } from '../taskbar/node_mover/hook_position';

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <NodePositionProvider>
        <CustomLabWrapper />
      </NodePositionProvider>
    ),
  },
])

export default routers
