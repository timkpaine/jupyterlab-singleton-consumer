import "../style/index.css";
import {ISingletonProvider} from "jupyterlab-singleton-provider";

const extension = {
  activate: () => {
    // eslint-disable-next-line no-console
    console.log("JupyterLab extension jupyterlab-singleton-consumer is activated!");

    // Check the exposed webcomponent
    if (document.createElement("singleton-element").constructor === HTMLElement) {
      console.error("jupyterlab-singleton-consumer: singleton-element is not defined");
    }
  },
  autoStart: true,
  id: "jupyterlab-singleton-consumer",
  optional: [],
  requires: [ISingletonProvider],
};

export default extension;
