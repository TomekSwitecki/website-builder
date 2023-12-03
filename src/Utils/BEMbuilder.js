const BEMBuilder = (block, modifiers) => {

    const blockName = block;
    const modifierClasses = modifiers.map(state => `${blockName}--${state}`);
    const BEMclassName = [blockName, ...modifierClasses].join(' ');
    return BEMclassName;
}

export default BEMBuilder;