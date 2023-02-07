import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import main from "./sw";

document.addEventListener("DOMContentLoaded", main);
