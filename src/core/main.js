import pSimulator from './Simulator';

/**
 * Checks if the p5.js library is loaded.
 * Throws an error if p5.js is not detected.
 * 
 * @throws {Error} If p5.js is not loaded.
 */
function checkP5Dependency() {
    if (window.p5 == undefined) {
        console.error(
            'You must import p5.js in order to run the Physics Simulation Engine.',
            'More information on the p5 website https://p5js.org/.'
        );
    }
}

/**
 * Sets up the Physics Simulation Engine.
 * Initializes the engine and uses the provided runSimulator callback.
 * 
 * @param {Function} runSimulatorCallback - The callback function to run the simulator.
 */
function setupPSEngine(runSimulatorCallback) {
    checkP5Dependency();

	// TODO : when P5 refactoring with modules, change window.setup with correct way to do it
    window.setup = function() {
        window._pSimulationInstance = new pSimulator();
        window._pSimulationInstance.instanciate(runSimulatorCallback);
        window.pSEngine = window._pSimulationInstance.getPSEngineVar();
    };
}

export { setupPSEngine };
