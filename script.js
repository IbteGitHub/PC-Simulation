function showOptions() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('options-screen').style.display = 'block';
}

function startAssembly() {
    document.getElementById('options-screen').style.display = 'none';
    document.getElementById('assembly-video').style.display = 'block';
    // Start the assembly video
}

function showDescription() {
    document.getElementById('options-screen').style.display = 'none';
    document.getElementById('description-screen').style.display = 'block';
}

function showComponentDescription() {
    document.getElementById('description-screen').style.display = 'none';
    document.getElementById('component-description').style.display = 'block';
    // Display the selected component description
}

function assemble() {
    document.getElementById('description-screen').style.display = 'none';
    document.getElementById('assembly-screen').style.display = 'block';
    // Allow users to drag and drop components for assembly
}

function disassemble() {
    document.getElementById('description-screen').style.display = 'none';
    document.getElementById('disassembly-screen').style.display = 'block';
    // Allow users to drag and drop components for disassembly
}

function exit() {
    document.getElementById('description-screen').style.display = 'none';
    document.getElementById('finish-screen').style.display = 'block';
}

function finishSimulation() {
    // Display a pop-up message asking the user if they want to continue or exit the simulation
    // You can use JavaScript confirm or build a custom modal for this
    // Redirect or perform the appropriate action based on the user's choice
}
