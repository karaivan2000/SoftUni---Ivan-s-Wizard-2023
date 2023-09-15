function start(state, game) {
    game.createWizard(state.wizard);

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game) {
    const { wizard } = state;
    const { wizardElement } = game;

    console.log(state.keys);

    //Move Wizard
    if (state.keys.KeyD) {
        wizard.posX += 2;
    } 

    //Render
    wizardElement.style.left = wizard.posX + `px`;


    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}